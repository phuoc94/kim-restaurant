<template>
  <div class="bg-zinc-700">
    <div
      class="container grid max-w-md grid-cols-2 justify-center gap-5 px-4 py-5 lg:max-w-4xl lg:grid-cols-4"
    >
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="col-span-1 cursor-pointer rounded border border-yellow-500 px-4 py-1 text-center font-serif text-xl"
        :class="{
          'bg-yellow-500 font-bold text-black': currentTab === tab.id,
          'text-white': currentTab !== tab.id,
        }"
      >
        <router-link :to="{ name: tab.id }">
          <span>
            <i
              class="icon pi pi-star-fill text-yellow-200"
              v-if="currentTab === tab.id"
            ></i>
          </span>
          {{ tab.label }}
        </router-link>
      </div>
    </div>
  </div>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const tabs = ref([
      { id: "bestseller", label: "Bestseller" },
      { id: "lunchbuffet", label: "Lunchbuffet" },
      { id: "alacarte", label: "A-la-carté" },
      { id: "reservation", label: "Reserve a table" },
    ]);

    const route = useRoute();
    const currentTab = ref(route.name);

    watch(route, () => {
      currentTab.value = route.name;
    });

    return {
      tabs,
      currentTab,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
