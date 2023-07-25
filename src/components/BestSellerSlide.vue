<template>
  <div
    class="flex min-h-screen flex-col justify-center bg-zinc-700 text-center"
  >
    <h1 class="h1 mb-5 mt-8 font-serif font-bold text-white">Our Bestseller</h1>
    <p class="font-inter text-white">Lorem ipsum dolor sit amet, consectetur</p>

    <div class="container my-8 flex flex-wrap justify-center gap-y-12 px-14">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="basis-full px-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/4"
      >
        <Card
          :title="card.title"
          :description="card.description"
          :price="card.price"
          :image="card.image"
        />
      </div>
    </div>

    <p class="mb-8 font-inter text-white">and more</p>

    <div class="mb-12">
      <router-link :to="{ path: '/menu/bestseller' }">
        <button class="button">Menu</button>
      </router-link>
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
    ]);

    return { cards };
  },
};
</script>
