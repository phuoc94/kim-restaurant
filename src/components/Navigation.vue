<template>
  <nav class="flex flex-wrap items-center justify-end px-4 lg:container">
    <div
      class="hidden basis-1/3 items-center justify-end gap-10 lg:order-last lg:flex lg:basis-5/12"
    >
      <a
        href="https://www.facebook.com/VietnamilainenRavintolaKim"
        target="_blank"
      >
        <i class="icon pi pi-facebook text-4xl text-black"></i>
      </a>
      <router-link v-if="route.path === '/'" :to="{ hash: '#reservation' }">
        <button class="button">Book a table</button>
      </router-link>
      <router-link v-else :to="{ name: 'contact', hash: '#reservation' }">
        <button class="button">Book a table</button>
      </router-link>
    </div>
    <div
      class="flex flex-shrink-0 basis-1/3 items-center justify-center pb-6 pt-1 lg:basis-2/12"
    >
      <router-link :to="{ path: '/' }">
        <img class="h-14 lg:h-20" src="@/assets/logo.webp" />
      </router-link>
    </div>
    <div class="flex basis-1/3 justify-end lg:hidden lg:basis-5/12">
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
    <div
      :class="{ block: open, hidden: !open }"
      class="block w-full flex-grow text-center lg:order-first lg:flex lg:w-auto lg:items-center lg:text-left"
    >
      <div class="text-sm lg:flex-grow">
        <router-link
          v-for="link in menuItems"
          :key="link.id"
          :to="link.route"
          class="mt-4 block lg:mr-4 lg:mt-0 lg:inline-block"
          :class="{ 'router-link-active': isActiveRoute(link) }"
        >
          <span class="link font-serif text-2xl text-gray-900">{{
            link.label
          }}</span>
        </router-link>
      </div>
      <div class="my-4 lg:hidden">
        <router-link v-if="route.path === '/'" :to="{ hash: '#reservation' }">
          <button class="button">Book a table</button>
        </router-link>
        <router-link v-else :to="{ name: 'contact', hash: '#reservation' }">
          <button class="button">Book a table</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import "primeicons/primeicons.css";

export default {
  setup() {
    const open = ref(false);
    const route = useRoute();

    const isActiveRoute = (menuItem) => {
      return (
        (route.path === menuItem.route || route.path.startsWith(`/menu/`)) &&
        menuItem.label === "Menu"
      );
    };

    const menuItems = ref([
      { id: 1, label: "Home", route: "/" },
      { id: 2, label: "Menu", route: "/menu/bestseller" },
      { id: 3, label: "About", route: "/about" },
      { id: 4, label: "Contact", route: "/contact" },
      { id: 5, label: "Gallery", route: "/gallery" },
    ]);
    watch(route, () => {
      open.value = false;
    });

    return {
      route,
      open,
      menuItems,
      isActiveRoute,
    };
  },
};
</script>

<style scoped>
.router-link-active > .link,
.router-link-exact-active > .link {
  @apply font-bold text-neutral-900;
}
</style>
