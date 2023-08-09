<template>
  <div class="bg-white lg:bg-custom-gradient">
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
          class="col-span-1 cursor-pointer rounded border border-yellow-500 px-4 py-1 text-center font-serif text-xl"
          :class="{
            'bg-yellow-500 font-bold': currentTab === tab.path,
          }"
        >
          <span>
            <i
              class="icon pi pi-star-fill text-yellow-200"
              v-if="currentTab === tab.path"
            ></i>
          </span>
          {{ tab.label }}
        </div>
      </router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { getBrowserLanguage } from "@/utils/languageUtils";

const API_URL = process.env.VUE_APP_API_URL;

// Reactive variables
const tabs = ref([]);
const route = useRoute();
const currentTab = ref(route.path);
const loading = ref(true);
const error = ref(null);

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
