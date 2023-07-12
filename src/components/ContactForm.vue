<template>
  <form
    ref="form"
    @submit.prevent="sendEmail"
    class="grid grid-cols-1 gap-y-5 pb-16 pt-8 lg:grid-cols-6 lg:gap-x-16"
  >
    <input
      type="date"
      name="user_date"
      v-model="formValues.currentDate"
      class="col-span-2 rounded border border-gray-300 px-9 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      style="height: 5rem"
    />
    <input
      type="time"
      name="user_time"
      value="10:00"
      class="col-span-2 rounded border border-gray-300 px-9 focus:outline-none focus:ring-2 focus:ring-blue-600"
      style="height: 5rem"
    />
    <select
      name="num_people"
      class="col-span-2 rounded border border-gray-300 px-9 focus:outline-none focus:ring-2 focus:ring-blue-600"
      style="height: 5rem"
    >
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

    <div class="col-span-3 flex flex-col text-left">
      <label class="hidden lg:block">Email:</label>
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        class="rounded border border-gray-300 px-9 focus:outline-none focus:ring-2 focus:ring-blue-600"
        style="height: 5rem"
      />
    </div>
    <div class="col-span-3 flex flex-col text-left">
      <label class="hidden lg:block">Phone number:</label>
      <input
        type="tel"
        name="user_phone"
        placeholder="Phone number"
        class="rounded border border-gray-300 px-9 focus:outline-none focus:ring-2 focus:ring-blue-600"
        style="height: 5rem"
      />
    </div>
    <div class="col-span-full text-left">
      <label class="hidden lg:block">Message:</label>
      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        class="w-full rounded border border-gray-300 px-9 py-8 focus:outline-none focus:ring-2 focus:ring-blue-600"
      ></textarea>
    </div>
    <div class="col-span-full">
      <input type="submit" class="button" value="Book a table" />
    </div>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";
import { reactive, ref } from "vue";

export default {
  setup() {
    const form = ref(null);
    const formValues = reactive({
      currentDate: new Date().toISOString().substring(0, 10),
    });

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
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };

    return {
      form,
      formValues,
      sendEmail,
    };
  },
};
</script>

<style scoped>
label {
  color: #171717;

  font-family: Times New Roman;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;

  padding-bottom: 0.5rem;
}

.button {
  padding: 0.75rem 2rem;
  border-radius: 0.3125rem;
  background: var(--ffbb-00, #ffc933);
  color: var(--171717, #171717);
  font-size: 1rem;
  font-family: David Libre;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8125rem;
}
</style>
