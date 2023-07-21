<template>
  <div class="bg-zinc-700">
    <div class="container flex flex-wrap justify-center gap-y-12 py-8 sm:px-12">
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
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import Card from "@/components/BestSellerCard.vue";

export default {
  components: { Card },
  setup() {
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

    return { cards };
  },
};
</script>

<style scoped></style>
