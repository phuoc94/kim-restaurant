<template>
  <div :class="backgroundColorClass">
    <div
      class="container grid max-w-md grid-cols-2 justify-center gap-5 px-4 py-5 lg:max-w-4xl lg:grid-cols-4"
    >
      <!-- Navigation tabs -->
      <router-link
        :to="{ path: tab.path }"
        v-for="(tab, index) in tabs"
        :key="index"
      >
        <div
          :class="tabClass(tab.path)"
          class="col-span-1 flex cursor-pointer justify-center rounded px-4 py-1 text-center font-serif text-xl"
        >
          <span>
            <img
              src="../assets/image-5.png"
              alt="icon"
              class="w-[20px]"
              v-if="currentTab === tab.path"
            />
          </span>
          <span>{{ tab.label }}</span>
        </div>
      </router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";

import axios from "axios";
import { useRoute } from "vue-router";

import { getBrowserLanguage } from "@/utils/languageUtils";

const API_URL = process.env.VUE_APP_API_URL;

// Reactive variables
const tabs = ref([]);
const route = useRoute();
const currentTab = ref(route.path);
const loading = ref(true);
const error = ref(null);

const backgroundColorClass = computed(() => {
  switch (currentTab.value) {
    case "/menu/bestseller":
      return "bg-[#FEF9CE]";
    case "/menu/lunchbuffet":
      return "bg-[#FEF9CE]";
    case "/menu/alacarte":
      return "bg-[#DEC0A5]";
    case "/menu/reservation":
      return "bg-[#DEC0A5]";
    default:
      return "bg-[#FEF9CE]";
  }
});

const tabClass = (path) => {
  let classes =
    "col-span-1 flex cursor-pointer justify-center rounded px-4 py-1 text-center font-serif text-xl";
  if (currentTab.value === path) {
    classes += " bg-[#FFC933] font-bold";
  }
  if (
    currentTab.value !== "/menu/alacarte" &&
    currentTab.value !== "/menu/reservation"
  ) {
    classes += " border border-[#FFC933]";
  }
  return classes;
};

// Fetch menu navigation tabs from the server
const fetchLocales = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
        query($locales: [Locale!]!){
          translation(locales: $locales, where: {component: "menuNav"}) {
            navigationItems {
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
      console.error("GraphQL errors:", response.data.errors);
    } else {
      tabs.value = response.data.data.translation.navigationItems;
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

// Watch for changes in the route and update the currentTab variable
watch(route, () => {
  currentTab.value = route.path;
});

// Fetch menu navigation tabs when the component is mounted
onMounted(fetchLocales);
</script>

<style scoped>
/* Add custom styles for active tabs and other styles if needed */
</style>
