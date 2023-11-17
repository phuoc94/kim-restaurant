<template>
  <div
    v-if="content"
    class="container grid grid-cols-1 items-center py-24 lg:grid-cols-2"
  >
    <div class="lg:margin-0 flex basis-1/2 justify-center">
      <img class="image" src="@/assets/mihoanhthanh.webp" />
    </div>
    <div class="basis-1/2 p-11">
      <h1
        class="h1 text-dim-gray mb-8 text-center font-libre font-bold lg:text-left"
      >
        {{ content.title }}
      </h1>
      <p class="mb-4 text-center font-montserrat text-gray-500 lg:text-left">
        {{ content.paragraph[0] }}
      </p>

      <div class="flex flex-wrap justify-center gap-4 xl:justify-start">
        <router-link
          v-for="(link, index) in content.buttons"
          :key="index"
          :to="link.path || { hash: '#reservation' }"
        >
          <button
            :class="{
              button: link.path && link.path !== '#reservation',
              'button-second rounded-md bg-neutral-900 px-8 py-3 font-libre font-bold text-white':
                !link.path || link.path === '#reservation',
            }"
          >
            {{ link.label || "Book a table" }}
          </button>
        </router-link>
      </div>
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
        contents(where: {contentId: "Wecome-to-Restaurant-Section"}, locales: $locales) {
          title
          paragraph
          buttons{
            path
            label
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
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchContent);
</script>
