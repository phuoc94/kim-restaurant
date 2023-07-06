<template>
  <nav class="container mx-auto">
    <div class="flex flex-row justify-end h-[76px] md:h-[122px]">
      <div class="basis-1/3 self-center hidden md:block">
        <ul class="flex">
          <li
            v-for="item in menuItems"
            :key="item.id"
            :class="{ 'active-menu': isActive(item) }"
            class="mr-2"
          >
            <router-link
              :to="item.route"
              @click="activateItem(item)"
              class="p-2"
              >{{ item.label }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="basis-1/3 flex justify-center">
        <router-link to="/">
          <img class="h-[57px] md:h-[85px]" src="@/assets/logo.png" />
        </router-link>
      </div>
      <div
        class="basis-1/3 self-center justify-end items-center gap-[39px] hidden md:flex"
      >
        <a href="https://www.facebook.com/VietnamilainenRavintolaKim">
          <i class="icon pi pi-facebook"></i>
        </a>
        <router-link to="/contact#reservation">
          <button>Book a table</button>
        </router-link>
      </div>

      <div class="basis-1/3 self-center justify-end flex md:hidden pr-[17px]">
        <i class="icon pi pi-bars"></i>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import "primeicons/primeicons.css";

export default {
  setup() {
    const menuItems = ref([
      { id: 1, label: "Menu", route: "/menu" },
      { id: 2, label: "About", route: "/about" },
      { id: 3, label: "Contact", route: "/contact" },
      { id: 4, label: "Gallery", route: "/gallery" },
    ]);

    const route = useRoute();

    const isActive = (item) => {
      return item.route === route.path;
    };

    const activateItem = (item) => {
      menuItems.value.forEach((menuItem) => {
        menuItem.isActive = menuItem.id === item.id;
      });
    };

    return {
      menuItems,
      isActive,
      activateItem,
    };
  },
};
</script>

<style scoped>
.active-menu {
  color: #171717;
  font-weight: 700;
}
li {
  color: #101a24;
  font-size: 24px;
  font-family: Times New Roman;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
}

.pi-facebook {
  color: #000000;
  font-size: 36px;
}
.pi-bars {
  color: #000000;
  font-size: 24px;
}
button {
  padding: 0.75rem 2rem;
  border-radius: 0.3125rem;
  background: var(--ffbb-00, #ffc933);
  color: var(--171717, #171717);
  font-size: 1rem;
  font-family: David Libre;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8125rem;
}
</style>
