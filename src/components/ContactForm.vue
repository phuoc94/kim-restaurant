<template>
  <div
    v-if="formSubmitted"
    class="grid grid-cols-1 gap-y-5 pb-16 pt-8 lg:grid-cols-6 lg:gap-x-16"
  >
    <h2 class="col-span-full text-center">
      Thank you for making a reservation!
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
        style="height: 5rem"
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
        style="height: 5rem"
        name="user_time"
        id="form15"
        value="10:00"
      />
    </div>
    <div class="col-span-2 rounded border border-neutral-900 bg-white px-8">
      <select name="num_people" class="w-full" style="height: 78px">
        <option value="1">1 person</option>
        <option value="2" selected>2 people</option>
        <option value="3">3 people</option>
        <option value="4">4 people</option>
        <option value="5">5 people</option>
        <option value="6">6 people</option>
        <option value="7">7 people</option>
        <option value="8">8 people</option>
        <option value="9">9 people</option>
        <option value="10">10 people</option>
      </select>
    </div>

    <div class="col-span-3 flex flex-col text-left">
      <label
        class="hidden pb-2 font-serif text-xl font-bold text-neutral-900 lg:block"
        >Email:</label
      >
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        class="rounded border border-neutral-900 px-9 focus:outline-none focus:ring-2 focus:ring-blue-600"
        style="height: 5rem"
        required
      />
    </div>
    <div class="col-span-3 flex flex-col text-left">
      <label
        class="hidden pb-2 font-serif text-xl font-bold text-neutral-900 lg:block"
        >Phone number:</label
      >
      <input
        type="tel"
        name="user_phone"
        placeholder="Phone number"
        class="rounded border border-neutral-900 px-9 focus:outline-none focus:ring-2 focus:ring-blue-600"
        style="height: 5rem"
      />
    </div>
    <div class="col-span-full text-left">
      <label
        class="hidden pb-2 font-serif text-xl font-bold text-neutral-900 lg:block"
        >Message:</label
      >
      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        class="w-full rounded border border-neutral-900 px-9 py-8 focus:outline-none focus:ring-2 focus:ring-blue-600"
      ></textarea>
    </div>
    <div class="col-span-full">
      <input type="submit" class="button" value="Book a table" />
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import emailjs from "@emailjs/browser";
import { Input, Timepicker, Datepicker, initTE } from "tw-elements";

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

onMounted(() => {
  initTE({ Timepicker, Datepicker, Input });
});
</script>

<style scoped></style>
