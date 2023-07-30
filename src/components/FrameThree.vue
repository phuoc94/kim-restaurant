<template>
  <div class="bg-neutral-900/80">
    <div class="pt-16 md:flex md:px-0 md:py-0">
      <div class="px-4 md:basis-2/3">
        <img
          class="aspect-video w-full rounded-bl-[10px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[10px] object-cover md:min-h-screen md:rounded-none"
          src="@/assets/slice2.webp"
        />
      </div>

      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <div
        v-else
        class="relative mx-auto max-w-xl -translate-y-28 text-center md:absolute md:left-[40%] md:mr-12 md:translate-y-0 md:self-center lg:left-[50%]"
      >
        <Carousel
          :navigation="true"
          :autoPlay="true"
          :sliderCount="slideLen"
          class="carousel"
          v-slot="{ currentSlide }"
        >
          <div class="m-8 pt-8 md:mx-16">
            <Slide v-for="(slide, index) in reviews" :key="index">
              <ReviewContent
                v-show="currentSlide === index + 1"
                :slide="slide"
              />
            </Slide>
          </div>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";
import ReviewContent from "@/components/ReviewContent.vue";

import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

const reviews = ref([]);
const loading = ref(true);
const error = ref(null);
let slideLen = ref(0);

const fetchDishes = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
        {
          reviews {
            reviewer
            ratingStar
            reviewText
          }
        }
      `,
    });

    if (response.data.errors) {
      console.log("GraphQL errors:", response.data.errors);
    } else {
      reviews.value = response.data.data.reviews;
      slideLen.value = reviews.value.length;
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchDishes);
</script>
