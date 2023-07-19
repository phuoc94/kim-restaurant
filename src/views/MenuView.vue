<template>
  <div class="bg-zinc-700">
    <div class="container">
      <div class="flex flex-wrap justify-center gap-5 py-5">
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
      <div
        v-if="currentTab === 'tab1'"
        class="flex flex-wrap justify-center gap-y-12 py-8 sm:px-12"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="basis-full px-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
        >
          <Card
            :title="card.title"
            :description="card.description"
            :price="card.price"
            :image="card.image"
          />
        </div>
      </div>
      <div v-else-if="currentTab === 'tab2'" class="p-5">Content for Tab 2</div>
      <div v-else-if="currentTab === 'tab3'" class="p-5">Content for Tab 3</div>
      <div v-else class="p-5"><FrameFour /></div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import FrameFour from "@/components/FrameFour.vue";
import Card from "@/components/BestSellerCard.vue";

export default {
  components: { FrameFour, Card },
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

    const cards = reactive([
      {
        title: "Gỏi cuốn",
        description:
          "Sekoitus salaattia, paprikaa, kurkkua, riisinuudeleita, hoisin-kastiketta ja maapähkinöitä",
        price: "7,50",
        image: require("@/assets/mihoanhthanh.png"),
      },
      {
        title: "Rapeat katkaravut",
        description:
          "Friteerattu katkarapu salaatin, tomaatin ja hapanimeläkastikkeen kera",
        price: "13,50",
        image: require("@/assets/mihoanhthanh.png"),
      },
      {
        title: "Phở",
        description:
          "Perinteisiä vietnamilaisia nuudeleita kanan ja naudanlihan kera",
        price: "13,50",
        image: require("@/assets/mihoanhthanh.png"),
      },
      {
        title: "Hủ tiếu xào",
        description: "Riisinuudeliwokki vihannesten kera",
        price: "7,50",
        image: require("@/assets/mihoanhthanh.png"),
      },
      {
        title: "Curry",
        description:
          "Keltainen curry/ Punainen curry/ Vihreä curry/ Massaman-curry/ Tom kha",
        price: "13,50",
        image: require("@/assets/mihoanhthanh.png"),
      },
      {
        title: "Gỏi cuốn",
        description:
          "Sekoitus salaattia, paprikaa, kurkkua, riisinuudeleita, hoisin-kastiketta ja maapähkinöitä",
        price: "7,50",
        image: require("@/assets/mihoanhthanh.png"),
      },
      {
        title: "Gỏi cuốn",
        description:
          "Sekoitus salaattia, paprikaa, kurkkua, riisinuudeleita, hoisin-kastiketta ja maapähkinöitä",
        price: "7,50",
        image: require("@/assets/mihoanhthanh.png"),
      },
    ]);

    return {
      cards,
      tabs,
      currentTab,
      changeTab,
    };
  },
};
</script>

<style scoped></style>
