<template>
  <div>
    <div class="bg-custom-gradient">
      <div class="pb-16">
        <img src="@/assets/lounasbuffet.webp" />
        <h1
          class="h1 -translate-y-12 text-center font-serif font-bold text-black md:-translate-y-20 lg:-translate-y-32"
        >
          12,70€
        </h1>
        <div
          v-for="dayMenu in menu"
          :key="dayMenu.day"
          class="mx-auto max-w-xl px-4 pb-8"
        >
          <h1 class="h1 font-serif font-bold text-black">{{ dayMenu.day }}</h1>
          <div
            v-for="dish in dayMenu.lunchBuffetItems"
            :key="dish.title"
            class="flex w-full font-montserrat sm:px-8"
          >
            <span>{{ dish.title }}</span>
            <span
              class="mx-1 flex-1 -translate-y-1 border-b-2 border-dotted border-black"
            ></span>
            <span class="w-10">{{ dish.dietary }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

const menu = ref([]);
const loading = ref(true);
const error = ref(null);

const getBrowserLanguage = () => {
  const browserLanguage = navigator.language.substr(0, 2);
  if (browserLanguage !== "fi" && browserLanguage !== "en") {
    return "en";
  }
  return browserLanguage;
};

const fetchDishes = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
      query($locales: [Locale!]!){
        lunchBuffets(locales: $locales) {
            day
            lunchBuffetItems {
              title
              dietary
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
      menu.value = response.data.data.lunchBuffets;
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchDishes);
</script>

<style></style>
