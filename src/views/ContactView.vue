<template>
  <div class="bg-image flex h-screen items-center justify-center px-4">
    <div v-if="translation" class="bg-zinc-700 px-4 py-12 md:px-20 lg:px-24">
      <div
        class="basis-full divide-y-4 divide-dashed text-center font-inter text-white md:basis-10/12 lg:basis-8/12 xl:basis-1/2"
      >
        <div class="pb-12">
          <h1 class="h1 font-serif font-bold">
            {{ translation.contactTitle }}
          </h1>
        </div>

        <div
          class="mx-auto grid grid-cols-2 justify-between gap-4 py-12 text-lg md:grid-cols-4"
          v-if="openHours.length > 0"
        >
          <div v-for="hour in openHours" :key="hour.day">
            <p class="font-bold">{{ hour.day }}</p>
            <p>{{ hour.openHour }}</p>
          </div>
        </div>

        <div class="flex flex-col pt-6 text-left text-lg md:flex-row">
          <div class="mb-4 w-full md:mb-0 md:mr-2 md:w-7/12">
            <p>{{ translation.ContactInfo }}</p>
            <p>
              {{ translation.contactTelephoneText }}
              <a :href="links[2].path"
                ><span class="font-bold text-amber-400">{{
                  links[2].label
                }}</span></a
              >
            </p>
            <p class="max-w-[240px] lg:max-w-none">
              {{ translation.contactFacebookText }}
              <a
                :href="links[0].path"
                target="_blank"
                class="font-bold text-amber-400"
              >
                {{ links[0].label }}</a
              >
            </p>
          </div>
          <div class="w-full md:ml-2 md:mt-0 md:w-5/12">
            <p>
              {{ translation.contactLocationText }}
              <a :href="links[1].path" target="_blank"
                ><span class="font-bold text-amber-400">{{
                  links[1].label
                }}</span></a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FrameFour />
</template>

<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";

import FrameFour from "@/components/FrameFour.vue";
import { convertToTranslationObject } from "@/utils/convertToTranslationObject";
import { getBrowserLanguage } from "@/utils/languageUtils";

const API_URL = process.env.VUE_APP_API_URL;

const links = ref([]);
const openHours = ref([]);
const translation = ref();
const loading = ref(true);
const error = ref(null);

const fetchLocales = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
        query($locales: [Locale!]!){
          links(
            locales: $locales,
            orderBy: customId_ASC
            where: {OR: [{customId: "phoneNumber"}, {customId: "Location"}, {customId: "Facebook"}]}
          ) {
            path
            label
          }
          translationItems(locales: $locales, where: {customId_contains: "contact"}) {
            customId
            text
          }
          openTimes(locales: $locales, orderBy: weekDaysNumber_ASC ) {
            day
            openHour
          }
        }
      `,
      variables: {
        locales: [getBrowserLanguage()],
      },
    });

    if (response.data.errors) {
      console.error("GraphQL errors:", response.data.errors);
    } else {
      openHours.value = response.data.data.openTimes;
      links.value = response.data.data.links;
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

onMounted(fetchLocales);
</script>

<style scoped>
.bg-image {
  background-image: url("@/assets/1.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
