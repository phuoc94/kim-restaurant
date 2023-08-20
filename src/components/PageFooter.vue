<template>
  <div v-if="translation" class="page-footer bg-neutral-900/80">
    <div class="container p-11 pt-16 lg:flex lg:py-28">
      <div class="gap-4 lg:flex lg:basis-1/2">
        <div class="min-w-max font-montserrat text-zinc-100 lg:basis-4/12">
          <h4 class="font-bold">{{ translation.footerOpenHours }}</h4>
          <div class="mt-3">
            <p v-for="hour in openHours" :key="hour.label">{{ hour.label }}</p>
          </div>
        </div>
        <div class="mt-14 font-montserrat text-zinc-100 lg:mt-0 lg:basis-3/12">
          <h4 class="font-bold">{{ translation.footerNavigation }}</h4>
          <div class="mt-3">
            <router-link
              v-for="link in menuItems"
              :key="link.path"
              :to="link.path"
            >
              <p>{{ link.label }}</p>
            </router-link>
          </div>
        </div>
        <div class="mt-14 lg:mt-0 lg:basis-5/12">
          <h4 class="font-montserrat font-bold uppercase text-zinc-100">
            <a
              href="https://www.facebook.com/VietnamilainenRavintolaKim"
              target="_blank"
            >
              {{ translation.footerFollowUs }}
              <i class="icon pi pi-facebook ml-2"></i>
            </a>
          </h4>
        </div>
      </div>
      <div
        class="mt-14 flex items-baseline gap-1 lg:mt-0 lg:basis-1/2 lg:justify-end"
      >
        <div class="see-you font-serif text-5xl font-bold text-yellow-500">
          {{ translation.footerSeeYou }}
        </div>
        <img src="@/assets/image-5.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import { getBrowserLanguage } from "@/utils/languageUtils";
import { convertToTranslationObject } from "@/utils/convertToTranslationObject";

const API_URL = process.env.VUE_APP_API_URL;

const menuItems = ref([]);
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
          translations(
            locales: $locales,
            orderBy: component_ASC
            where: {OR: [{component: "footerLinks"}, {component: "openHours"}]}) {
            navigationItems {
              path
              label
            }
          }
          translationItems(locales: $locales, where: {customId_contains: "footer"}) {
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
      console.error("GraphQL errors:", response.data.errors);
    } else {
      menuItems.value = response.data.data.translations[0].navigationItems;
      openHours.value = response.data.data.translations[1].navigationItems;
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
