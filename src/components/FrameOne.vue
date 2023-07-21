<template>
  <Carousel
    :navigation="false"
    :autoPlay="true"
    :sliderCount="2"
    class="carousel"
    v-slot="{ currentSlide }"
  >
    <Slide :animation="true">
      <div v-show="currentSlide === 1" class="slide-content">
        <div>
          <h1 class="h1 mb-6 font-serif font-bold text-white">Lunch Buffet</h1>
          <p class="mb-8 font-inter text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <router-link to="/menu/lunchbuffet">
            <button class="button">Buffet menu</button>
          </router-link>
        </div>
      </div>
    </Slide>
    <Slide :animation="true">
      <div v-show="currentSlide === 2" class="slide-content">
        <h1 class="h1 mb-6 font-serif font-bold text-white">Dinner Specials</h1>
        <p class="mb-8 font-inter text-white">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </p>
        <button class="button">Special menu</button>
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";

export default {
  name: "FrameOne",
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
}

.slide-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.slide-content:nth-child(1) {
  background-image: url("@/assets/banner-1.png");
  background-size: cover;
  background-position: center;
}

.slide-content:nth-child(2) {
  background-image: url("@/assets/slice2.png");
  background-size: cover;
  background-position: center;
}
</style>
