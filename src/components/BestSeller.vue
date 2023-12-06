<template>
  <div class="bg-custom-gradient">
    <div
      class="container flex flex-wrap justify-center gap-y-24 py-8 pb-20 sm:px-12"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="basis-full px-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
      >
        <Card
          :title="card.title"
          :description="card.description"
          :price="card.prices[0].price.toFixed(2)"
          :image="card.image.url"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";

import Card from "@/components/BestSellerCard.vue";

const API_URL = process.env.VUE_APP_API_URL;

const cards = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchDishes = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
        {
          menus(first: 8, where: {bestSeller: true}) {
          title
          description
          prices(first: 1, orderBy: price_ASC) {
            price
          }
          image {
            url(
              transformation: {document: {output: {format: webp}}, image: {resize: {width: 300}}}
              )
          }
        }
        }
      `,
    });

    if (response.data.errors) {
      console.log("GraphQL errors:", response.data.errors);
    } else {
      cards.value = response.data.data.menus;
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchDishes);
</script>

<style scoped></style>
