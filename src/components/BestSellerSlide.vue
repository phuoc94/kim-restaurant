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
          :price="card.prices[0].price.toFixed(2)"
          :image="card.image.url"
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

<script setup>
import { ref, onMounted } from "vue";
import Card from "@/components/BestSellerCard.vue";
import axios from "axios";
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
          menus(first: 8, where: {displayHome: true}) {
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
