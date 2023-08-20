<template>
  <nav class="flex flex-wrap items-center justify-end px-4 lg:container">
    <!-- Social media links and "Book a table" button (large screens) -->
    <div
      v-if="buttons.length > 0"
      class="hidden basis-1/3 items-center justify-end gap-10 lg:order-last lg:flex lg:basis-5/12"
    >
      <a :href="buttons[2].path" target="_blank">
        <i class="icon pi pi-facebook text-4xl text-black"></i>
      </a>
      <router-link v-if="route.path === '/'" :to="buttons[0].path">
        <button class="button">{{ buttons[0].label }}</button>
      </router-link>
      <router-link v-else :to="buttons[2].path">
        <button class="button">{{ buttons[2].label }}</button>
      </router-link>
    </div>

    <!-- Logo -->
    <div
      class="flex flex-shrink-0 basis-1/3 items-center justify-center pb-6 pt-1 lg:basis-2/12"
    >
      <router-link :to="{ path: '/' }">
        <img class="h-14 lg:h-20" src="@/assets/logo.webp" />
      </router-link>
    </div>

    <!-- Hamburger menu button (small screens) -->
    <div class="flex basis-1/3 justify-end lg:hidden">
      <button @click="open = !open" class="flex items-center px-3 py-2">
        <span v-if="!open"
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17H21M3 12H21M3 7H21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <i v-else class="icon pi pi-times text-xl"></i>
      </button>
    </div>

    <!-- Navigation menu (small and large screens) -->
    <div
      :class="{ block: open, hidden: !open }"
      class="block w-full flex-grow text-center lg:order-first lg:flex lg:w-auto lg:basis-5/12 lg:items-center lg:text-left"
    >
      <div class="gap-4 lg:flex">
        <!-- Menu items -->
        <router-link
          v-for="link in menuItems"
          :key="link.path"
          :to="link.path"
          class="mt-4 block lg:mt-0 lg:inline-block"
          :class="{ 'router-link-active': isActiveRoute(link) }"
        >
          <span class="link font-serif text-lg text-gray-900">{{
            link.label
          }}</span>
        </router-link>
      </div>

      <!-- "Book a table" button (small screens) -->
      <div class="my-4 lg:hidden" v-if="buttons.length > 0">
        <router-link v-if="route.path === '/'" :to="buttons[0].path">
          <button class="button">{{ buttons[0].label }}</button>
        </router-link>
        <router-link v-else :to="buttons[2].path">
          <button class="button">{{ buttons[2].label }}</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import "primeicons/primeicons.css";
import { getBrowserLanguage } from "@/utils/languageUtils";
import axios from "axios";

const API_URL = process.env.VUE_APP_API_URL;

// Reactive variables
const open = ref(false);
const route = useRoute();
const menuItems = ref([]);
const buttons = ref([]);
const loading = ref(true);
const error = ref(null);

// Check if a menu item is active
const isActiveRoute = (menuItem) => {
  return (
    (route.path === menuItem.route || route.path.startsWith(`/menu/`)) &&
    menuItem.path.startsWith(`/menu/`)
  );
};

// Fetch menu items from the server
const fetchLocales = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
        query($locales: [Locale!]!){
          translation(locales: $locales, where: {component: "navigationItems"}) {
            navigationItems {
              path
              label
            }
          }
          links(
            orderBy: customId_ASC
            where: {OR: [{customId: "Navigation-Button"}, {customId: "Book-a-table-button"} ,  {customId: "Facebook"}]}
            locales: $locales
          ) {
            customId
            label
            path
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
      menuItems.value = response.data.data.translation.navigationItems;
      buttons.value = response.data.data.links;
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

// Watch for changes in the route and close the menu on navigation
watch(route, () => {
  open.value = false;
});

// Fetch menu items when the component is mounted
onMounted(fetchLocales);
</script>

<style scoped>
/* Styling for active router links */
.router-link-active > .link,
.router-link-exact-active > .link {
  @apply font-bold text-neutral-900;
}
</style>
