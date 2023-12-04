<template>
  <div class="bg-neutral-900/80">
    <div class="pt-16 md:flex md:px-0 md:py-0">
      <!-- Left-side image -->
      <div class="px-4 md:basis-2/3">
        <img
          class="aspect-video w-full rounded-bl-[10px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[10px] object-cover md:min-h-screen md:rounded-none"
          src="@/assets/1.png"
        />
      </div>

      <!-- Right-side carousel -->
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
import { onMounted, ref } from "vue";

import axios from "axios";

import Carousel from "@/components/Carousel.vue";
import ReviewContent from "@/components/ReviewContent.vue";
import Slide from "@/components/Slide.vue";
import { getBrowserLanguage } from "@/utils/languageUtils";

const API_URL = process.env.VUE_APP_API_URL;

// Reactive variables
const reviews = ref([]);
const loading = ref(true);
const error = ref(null);
const slideLen = ref(0);

// Fetch reviews from the server
const fetchReviews = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
        query($locales: [Locale!]!){
          reviews(locales: $locales, where: {reviewText_not: ""}) {
            reviewer
            ratingStar
            reviewText
            reviewFrom
          }
        }
      `,
      variables: {
        locales: [getBrowserLanguage()],
      },
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

// Fetch reviews when the component is mounted
onMounted(fetchReviews);
</script>

<style scoped>
/* Add custom styles if needed */
</style>
