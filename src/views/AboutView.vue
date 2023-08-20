<template>
  <div v-if="content">
    <img class="max-h-screen w-full" src="@/assets/about_img.webp" />
    <div class="bg-custom-gradient py-24 md:py-32 lg:py-40">
      <h1 class="h1 text-center font-serif font-bold text-amber-400">
        {{ content.title }}
      </h1>
      <div
        class="mx-auto mt-8 flex max-w-5xl flex-col gap-16 px-4 text-justify md:flex-row"
      >
        <div class="flex-1">
          <p>
            {{ content.paragraph[0] }}
          </p>
        </div>
        <div class="flex-1">
          <p>
            {{ content.paragraph[1] }}
          </p>
        </div>
      </div>
    </div>
    <FrameFour />
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { getBrowserLanguage } from "@/utils/languageUtils";
import FrameFour from "@/components/FrameFour.vue";

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
        contents(where: {contentId: "About-Section"}, locales: $locales) {
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
