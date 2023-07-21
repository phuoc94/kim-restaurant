<template>
  <div class="bg-zinc-700">
    <div class="container flex flex-wrap justify-center gap-5 py-5">
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :to="{ name: tab.id }"
        class="mx-3 cursor-pointer rounded border border-yellow-500 px-4 py-1 font-serif text-xl"
        :class="{
          'bg-yellow-500 font-bold text-black': currentTab === tab.id,
          'text-white': currentTab !== tab.id,
        }"
      >
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
  <transition name="fade">
    <router-view></router-view>
  </transition>
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
