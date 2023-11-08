<template>
  <div v-if="content" class="container px-4 pt-16 text-center" id="reservation">
    <h1 class="h1 text-dim-gray font-serif font-bold">
      {{ content.title }}
    </h1>
    <p class="font-montserrat text-neutral-900">
      {{ content.paragraph[0] }}
    </p>
    <ContactForm />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";

import ContactForm from "@/components/ContactForm.vue";
import { getBrowserLanguage } from "@/utils/languageUtils";

const API_URL = process.env.VUE_APP_API_URL;

const content = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchContent = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
      query($locales: [Locale!]!){
        contents(where: {contentId: "Reservation-Section"}, locales: $locales) {
          title
          paragraph
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
      content.value = response.data.data.contents[0];
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchContent);
</script>
