<template>
  <div>
    <template v-if="showAll">
      <Carousel
        :autoPlay="false"
        :sliderCount="sliderCount"
        v-slot="{ currentSlide }"
      >
        <Slide v-show="currentSlide === 1">
          <LunchBuffetSlide />
        </Slide>
        <Slide v-show="currentSlide === 2">
          <BestSellerSlide />
        </Slide>
      </Carousel>
    </template>

    <template v-else>
      <Carousel :autoPlay="false" :sliderCount="1" v-slot="{ currentSlide }">
        <Slide v-show="currentSlide === 1">
          <LunchBuffetSlide />
        </Slide>
      </Carousel>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";
import BestSellerSlide from "@/components/BestSellerSlide.vue";
import LunchBuffetSlide from "@/components/LunchBuffetSlide.vue";

const sliderCount = ref(2);
const showAll = ref(true);

const handleWindowResize = () => {
  showAll.value = window.innerWidth > 1024;
};

onMounted(() => {
  handleWindowResize();
  window.addEventListener("resize", handleWindowResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleWindowResize);
});
</script>

<style scoped></style>
