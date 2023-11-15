<template>
  <div
    v-if="content"
    class="relative flex min-h-screen items-center justify-center bg-cover bg-center"
  >
    <img
      src="@/assets/banner-1.webp"
      alt="Lunch Buffet"
      class="absolute inset-0 z-0 h-full max-h-screen w-full object-cover"
    />
    <div class="relative z-10 mx-14 text-white">
      <h1 class="h1 mb-6 font-serif font-bold">{{ content.title }}</h1>
      <div class="mb-8 max-w-2xl font-inter font-bold">
        <ul>
          <li
            v-for="(item, index) in content.paragraph"
            :key="index"
            class="flex gap-1"
          >
            <div>
              <i class="pi pi-check" style="font-weight: bolder"></i>
            </div>
            <div>{{ item }}</div>
          </li>
        </ul>
      </div>
      <div>
        <div class="mb-8 max-w-2xl font-inter font-bold">
          <p
            class="font-montserrat"
            v-html="content.pagas[0].paragraph.html"
          ></p>
        </div>
      </div>

      <router-link :to="{ path: content.buttons[0].path }">
        <button class="button">{{ content.buttons[0].label }}</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";

import { getBrowserLanguage } from "@/utils/languageUtils";

const API_URL = process.env.VUE_APP_API_URL;

const content = ref(null); // Initialize content with null
const loading = ref(true);
const error = ref(null);

const fetchContent = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
      query($locales: [Locale!]!){
        contents(where: {contentId: "Lunch-Buffet-Slider"}, locales: $locales) {
          title
          paragraph
          buttons{
            path
            label
          }
          pagas{
            paragraph{
              html
            }
          }
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
      console.log(content.value.pagas[0].paragraph);
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchContent);
</script>
