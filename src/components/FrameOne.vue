<template>
  <Carousel
    :navigation="false"
    :autoPlay="true"
    class="caroucel"
    v-slot="{ currentSlide }"
  >
    <Slide>
      <div v-show="currentSlide === 1" class="slide-content">
        <img src="@/assets/banner-1.png" />
      </div>
    </Slide>
    <Slide>
      <div v-show="currentSlide === 2" class="slide-content">
        <img src="@/assets/slice.png" />
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
  setup() {
    const slideLen = 2;

    return { slideLen };
  },
};
</script>

<style scoped>
.caroucel {
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
}

img {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
