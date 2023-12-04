<template>
  <div
    v-if="formSubmitted"
    class="grid grid-cols-1 gap-y-5 pb-16 pt-8 lg:grid-cols-6 lg:gap-x-16"
  >
    <h2 class="col-span-full text-center">
      {{ translation.formThanks }}
    </h2>
  </div>

  <div
    v-else-if="formError"
    class="grid grid-cols-1 gap-y-5 pb-16 pt-8 lg:grid-cols-6 lg:gap-x-16"
  >
    <h2 class="col-span-full text-center text-red-600">
      Error: {{ formError }}
    </h2>
  </div>

  <form
    v-else
    ref="form"
    @submit.prevent="sendEmail"
    class="grid grid-cols-1 gap-y-5 pb-16 pt-8 lg:grid-cols-6 lg:gap-x-16"
  >
    <template v-if="translation">
      <div
        class="relative col-span-2"
        id="datepicker"
        data-te-datepicker-init
        data-te-format="dd/mm/yyyy"
      >
        <input
          type="text"
          class="w-full rounded border border-neutral-900 px-9 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          name="user_date"
          style="height: 80px"
          v-model="currentDate"
          data-te-datepicker-toggle-ref
          data-te-datepicker-toggle-button-ref
        />
      </div>
      <div
        class="relative col-span-2"
        data-te-with-icon="false"
        data-te-timepicker-init
        id="timepicker-just-input"
      >
        <input
          type="text"
          class="w-full rounded border border-neutral-900 px-9 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          data-te-toggle="timepicker-just-input"
          style="height: 80px"
          name="user_time"
          id="form15"
          value="10:00"
        />
      </div>
      <div class="col-span-2 rounded border border-neutral-900 bg-white px-8">
        <select name="num_people" class="w-full bg-white" style="height: 78px">
          <option value="1">1 {{ translation.formPerson }}</option>
          <option value="2" selected>2 {{ translation.formPerson }}</option>
          <option value="3">3 {{ translation.formPerson }}</option>
          <option value="4">4 {{ translation.formPerson }}</option>
          <option value="5">5 {{ translation.formPerson }}</option>
          <option value="6">6 {{ translation.formPerson }}</option>
          <option value="7">7 {{ translation.formPerson }}</option>
          <option value="8">8 {{ translation.formPerson }}</option>
          <option value="9">9 {{ translation.formPerson }}</option>
          <option value="10+">10+ {{ translation.formPerson }}</option>
          <option value="20+">20+ {{ translation.formPerson }}</option>
          <option value="30+">30+ {{ translation.formPerson }}</option>
          <option value="40+">40+ {{ translation.formPerson }}</option>
          <option value="50+">50+ {{ translation.formPerson }}</option>
        </select>
      </div>

      <div class="col-span-3 flex flex-col text-left">
        <label
          class="hidden pb-2 font-serif text-xl font-bold text-neutral-900 lg:block"
          >{{ translation.formEmail }}:</label
        >
        <input
          type="email"
          name="user_email"
          :placeholder="translation.formEmail"
          class="rounded border border-neutral-900 px-9 focus:outline-none focus:ring-2 focus:ring-blue-600"
          style="height: 80px"
          required
        />
      </div>
      <div class="col-span-3 flex flex-col text-left">
        <label
          class="hidden pb-2 font-serif text-xl font-bold text-neutral-900 lg:block"
          >{{ translation.formPhoneNumber }}:</label
        >
        <input
          type="tel"
          name="user_phone"
          :placeholder="translation.formPhoneNumber"
          class="rounded border border-neutral-900 px-9 focus:outline-none focus:ring-2 focus:ring-blue-600"
          style="height: 80px"
        />
      </div>
      <div class="col-span-full text-left">
        <label
          class="hidden pb-2 font-serif text-xl font-bold text-neutral-900 lg:block"
          >{{ translation.formMessage }}:</label
        >
        <textarea
          name="message"
          :placeholder="translation.formMessage"
          rows="4"
          class="w-full rounded border border-neutral-900 px-9 py-8 focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
      </div>
      <div class="col-span-full">
        <input
          type="submit"
          class="button"
          :value="translation.formSubmitButton"
        />
      </div>
    </template>
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";
import { Datepicker, initTE, Input, Timepicker } from "tw-elements";

import { convertToTranslationObject } from "@/utils/convertToTranslationObject";
import { getBrowserLanguage } from "@/utils/languageUtils";
import emailjs from "@emailjs/browser";

const API_URL = process.env.VUE_APP_API_URL;

const translation = ref(null);
const loading = ref(true);
const error = ref(null);

const form = ref(null);
const formError = ref(null);
const formSubmitted = ref(false);

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();

today = `${dd}/${mm}/${yyyy}`;

const currentDate = ref(today);

const sendEmail = () => {
  emailjs
    .sendForm(
      process.env.VUE_APP_EMAILJS_SERVICE_ID,
      process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
      form.value,
      process.env.VUE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
        formSubmitted.value = true;
      },
      (error) => {
        console.log("FAILED...", error.text);
        formError.value = error.text;
      }
    );
};

const fetchContent = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
      query($locales: [Locale!]!){
        translationItems(where: {customId_contains: "form"}, locales: $locales) {
          customId
          text
        }
      }
    `,
      variables: {
        locales: [getBrowserLanguage()],
      },
    });

    if (response.data.errors) {
      console.log("GraphQL errors:", response.data.errors);
    } else {
      translation.value = convertToTranslationObject(
        response.data.data.translationItems
      );
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchContent();
  initTE({ Timepicker, Datepicker, Input });
});
</script>

<style scoped></style>
