<template>
  <div
    v-if="content && !loading"
    class="flex min-h-screen flex-col justify-center bg-zinc-700 text-center"
  >
    <h1 class="h1 mb-5 mt-8 font-serif font-bold text-white">
      {{ content.title }}
    </h1>
    <p class="font-inter text-white">{{ content.paragraph[0] }}</p>

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

    <p class="mb-8 font-inter text-white">{{ content.paragraph[1] }}</p>

    <div class="mb-12">
      <router-link :to="{ path: content.buttons[0].path }">
        <button class="button">{{ content.buttons[0].label }}</button>
      </router-link>
    </div>
  </div>
  <div
    v-else-if="loading"
    class="flex min-h-screen items-center justify-center"
  >
    <p>Loading...</p>
  </div>
  <div v-else class="flex min-h-screen items-center justify-center">
    <p>An error occurred: {{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Card from "@/components/BestSellerCard.vue";
import axios from "axios";
import { getBrowserLanguage } from "@/utils/languageUtils";
const API_URL = process.env.VUE_APP_API_URL;

const cards = ref([]);
const content = ref();
const loading = ref(true);
const error = ref(null);

const fetchData = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
        query($locales: [Locale!]!){
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
          contents(where: {contentId: "Best-Seller-Slider"}, locales: $locales) {
            title
            paragraph
            buttons{
              path
              label
            }
          }
        }
      `,
      variables: {
        locales: [getBrowserLanguage()],
      },
    });

    if (response.data.errors) {
      console.log("GraphQL errors:", response.data.errors);
      error.value = "GraphQL errors occurred";
    } else {
      cards.value = response.data.data.menus;
      content.value = response.data.data.contents[0];
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchData);
</script>
