<template>
  <div class="bg-zinc-700">
    <div class="container flex flex-wrap justify-center gap-5 py-5">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="mx-3 cursor-pointer rounded border border-yellow-500 px-4 py-1 font-serif text-xl"
        :class="{
          'bg-yellow-500 font-bold text-black': currentTab === tab.id,
          'text-white': currentTab !== tab.id,
        }"
        @click="changeTab(tab.id)"
      >
        <span>
          <i
            class="icon pi pi-star-fill text-yellow-200"
            v-if="currentTab === tab.id"
          ></i
        ></span>
        {{ tab.label }}
      </div>
    </div>
  </div>
  <div v-if="currentTab === 'tab1'"><BestSeller /></div>
  <div v-else-if="currentTab === 'tab2'">Content for Tab 2</div>
  <div v-else-if="currentTab === 'tab3'"><ALaCarte /></div>
  <div v-else><FrameFour /></div>
</template>

<script>
import { ref } from "vue";
import FrameFour from "@/components/FrameFour.vue";
import BestSeller from "@/components/BestSeller.vue";
import ALaCarte from "@/components/ALaCarte.vue";

export default {
  components: { FrameFour, BestSeller, ALaCarte },
  setup() {
    const tabs = ref([
      { id: "tab1", label: "Bestseller" },
      { id: "tab2", label: "Lunchbuffet" },
      { id: "tab3", label: "A-la-carté" },
      { id: "tab4", label: "Reserve a table" },
    ]);
    const currentTab = ref(tabs.value[0].id);

    const changeTab = (tab) => {
      currentTab.value = tab;
    };

    return {
      tabs,
      currentTab,
      changeTab,
    };
  },
};
</script>

<style scoped></style>
