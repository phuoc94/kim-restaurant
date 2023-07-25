<template>
  <div>
    <Carousel
      :autoPlay="false"
      :sliderCount="2"
      :navigation="mobileOnly"
      v-slot="{ currentSlide }"
    >
      <Slide v-show="currentSlide === 1">
        <div
          class="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        >
          <img
            src="@/assets/banner-1.webp"
            alt="Lunch Buffet"
            class="absolute inset-0 z-0 h-full max-h-screen w-full object-cover"
          />
          <div class="relative z-10 mx-14 text-center text-white">
            <h1 class="h1 mb-6 font-serif font-bold">Lunch Buffet</h1>
            <p class="mb-8 font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <router-link :to="{ path: '/menu/lunchbuffet' }">
              <button class="button">Buffet menu</button>
            </router-link>
          </div>
        </div>
      </Slide>
      <Slide v-show="currentSlide === 2">
        <BestSellerSlide />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";
import BestSellerSlide from "@/components/BestSellerSlide.vue";

export default {
  name: "FrameOne",
  components: {
    Carousel,
    Slide,
    BestSellerSlide,
  },
};
</script>

<style scoped></style>
