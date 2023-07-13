<template>
  <nav class="container mx-auto flex flex-wrap items-center justify-end px-6">
    <div
      class="hidden basis-5/12 items-center justify-end gap-[39px] lg:order-last lg:flex"
    >
      <a href="https://www.facebook.com/VietnamilainenRavintolaKim">
        <i class="icon pi pi-facebook"></i>
      </a>
      <router-link to="/contact#reservation">
        <button class="book-table">Book a table</button>
      </router-link>
    </div>
    <div
      class="flex flex-shrink-0 basis-2/12 items-center justify-center pb-6 pt-1"
    >
      <router-link to="/">
        <img class="h-[57px] lg:h-[85px]" src="@/assets/logo.png" />
      </router-link>
    </div>
    <div class="flex basis-5/12 justify-end lg:hidden">
      <button
        @click="open = !open"
        class="flex items-center rounded border px-3 py-2"
      >
        <i v-if="!open" class="icon pi pi-bars"></i>
        <i v-else class="icon pi pi-times"></i>
      </button>
    </div>
    <div
      :class="{ block: open, hidden: !open }"
      class="block w-full flex-grow text-right lg:order-first lg:flex lg:w-auto lg:items-center lg:text-left"
    >
      <div class="mr-4 flex max-w-[428px] justify-between text-sm lg:flex-grow">
        <router-link
          v-for="link in menuItems"
          :key="link.id"
          :to="link.route"
          class="mt-4 block lg:mt-0 lg:inline-block"
          active-class="router-link-active"
        >
          <span class="link">{{ link.label }}</span>
        </router-link>
      </div>
      <div class="my-4 lg:hidden">
        <router-link to="/contact#reservation">
          <button class="book-table">Book a table</button>
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

    const menuItems = ref([
      { id: 1, label: "Home", route: "/" },
      { id: 2, label: "Menu", route: "/menu" },
      { id: 3, label: "About", route: "/about" },
      { id: 4, label: "Contact", route: "/contact" },
      { id: 5, label: "Gallery", route: "/gallery" },
    ]);
    watch(route, () => {
      open.value = false;
    });

    return {
      open,
      menuItems,
    };
  },
};
</script>

<style scoped>
.book-table {
  background: var(--ffbb-00, #ffc933);
  border-radius: 0.3125rem;
  color: var(--171717, #171717);
  font-family: David Libre;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8125rem;
  padding: 0.75rem 2rem;
}

.link {
  color: #101a24;
  font-family: Times New Roman;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
}

.pi-facebook {
  color: #000000;
  font-size: 36px;
}

.router-link-active > .link {
  color: #171717 !important;
  font-weight: 700 !important;
}
</style>
