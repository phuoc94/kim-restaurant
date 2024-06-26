<template>
  <div v-if="content">
    <img class="max-h-screen w-full object-cover" :src="content.image?.url" />

    <div class="px-4">
      <div class="container grid justify-center">
        <h1
          class="h1 font-lucida-hw mt-16 text-center font-serif font-bold text-amber-400"
        >
          {{ content.title }}
        </h1>
        <p class="max-w-md pb-8 pt-2 text-center">
          {{ content.paragraph[0] }}
        </p>
      </div>
      <div
        class="container rounded-br-[36px] rounded-tl-[36px] bg-[#DEC0A5] px-4 py-12 shadow-xl lg:px-32"
      >
        <div v-for="(page, index) in content.pagas" :key="index" class="my-4">
          <h6 class="font-bold">
            {{ page.title }}
          </h6>
          <div v-html="page.paragraph?.html"></div>
        </div>
      </div>
    </div>
    <FrameFour />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";

import FrameFour from "@/components/FrameFour.vue";
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
        contents(where: {contentId: "About-Section"}, locales: $locales) {
          title
          paragraph
          image {
            url(transformation: {image: {resize: {height: 960, width: 1440}}})
          }
          pagas{
            title
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
      console.log(response.data.data.contents[0]);
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
