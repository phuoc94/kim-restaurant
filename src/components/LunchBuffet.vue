<template>
  <div v-if="translation">
    <div class="bg-custom-gradient">
      <div class="pb-16">
        <img class="mx-auto" src="@/assets/lounasbuffet.png" />
        <div class="-translate-y-12 md:-translate-y-24 lg:-translate-y-36">
          <p class="text-center text-xl font-bold leading-none">
            {{ translation.buffetTime }}
          </p>
          <h1
            class="h1 text-dim-gray text-center font-serif font-bold leading-tight"
          >
            {{ parseFloat(lunchbuffetPrice).toFixed(2) }} €
          </h1>
        </div>
        <div
          class="menu-container container mb-24 grid grid-cols-1 gap-8 bg-white px-4 py-8 shadow-lg md:px-12 lg:grid-cols-2 lg:px-20"
        >
          <div class="flex items-center justify-center lg:justify-start">
            <h3 class="h1 font-serif font-bold text-amber-400">
              {{ translation.dailySpecials }}
            </h3>
          </div>
          <div v-for="dayMenu in menu" :key="dayMenu.day">
            <h3 class="text-dim-gray font-bold">{{ dayMenu.day }}</h3>
            <div
              v-for="dish in dayMenu.lunchBuffetItems"
              :key="dish.title"
              class="flex w-full font-montserrat"
            >
              <span>{{ dish.title }}</span>
              <span class="mx-1 flex-1 -translate-y-1"></span>
              <span class="w-10">{{ dish.dietary }}</span>
            </div>
          </div>
        </div>

        <div class="container bg-white px-4 py-8 shadow-lg md:px-12 lg:px-20">
          <h3 class="h1 mb-8 text-center font-serif font-bold text-amber-400">
            {{ translation.dailyClassic }}
          </h3>
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
            <div v-for="dayMenu in dailyClassic" :key="dayMenu.day">
              <h3 class="text-dim-gray font-bold">{{ dayMenu.day }}</h3>
              <div
                v-for="dish in dayMenu.lunchBuffetItems"
                :key="dish.title"
                class="flex w-full font-montserrat"
              >
                <span>{{ dish.title }}</span>
                <span class="mx-1 flex-1 -translate-y-1"></span>
                <span class="w-10">{{ dish.dietary }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";

import { convertToTranslationObject } from "@/utils/convertToTranslationObject";
import { getBrowserLanguage } from "@/utils/languageUtils";

const API_URL = process.env.VUE_APP_API_URL;

const menu = ref([]);
const loading = ref(true);
const error = ref(null);
const lunchbuffetPrice = ref();
const dailyClassic = ref([]);
const translation = ref(null);

const fetchDishes = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
      query($locales: [Locale!]!){
        lunchBuffets(locales: $locales) {
            day
            lunchBuffetItems(first: 100) {
              title
              dietary
            }
          }
        menus(where: {title: "Lunchbuffet"}) {
          prices{
            price
          }
        }
        translationItems(
          orderBy: customId_ASC
          where: {OR: [{customId: "dailyClassic"}, {customId: "dailySpecials"}, {customId: "buffetTime"}]}
          locales: $locales
        ) {
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
      lunchbuffetPrice.value = response.data.data.menus[0].prices[0].price;
      menu.value = response.data.data.lunchBuffets;
      dailyClassic.value = menu.value.splice(-2);
      translation.value = convertToTranslationObject(
        response.data.data.translationItems
      );
      console.log(
        "🚀 ~ file: LunchBuffet.vue:120 ~ fetchDishes ~ translation:",
        translation.value
      );
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchDishes);
</script>

<style>
.menu-container .grid > div:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}
.menu-container .grid > div:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}
.menu-container .grid > div:nth-child(3) {
  grid-column: 1;
  grid-row: 3;
}
.menu-container .grid > div:nth-child(4) {
  grid-column: 2;
  grid-row: 1;
}
.menu-container .grid > div:nth-child(5) {
  grid-column: 2;
  grid-row: 2;
}
.menu-container .grid > div:nth-child(6) {
  grid-column: 2;
  grid-row: 3;
}
</style>
