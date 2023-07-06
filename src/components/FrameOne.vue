<template>
  <Carousel
    :navigation="false"
    :autoPlay="false"
    class="carousel"
    v-slot="{ currentSlide }"
  >
    <Slide>
      <div v-show="currentSlide === 1" class="slide-content">
        <div class="w-[376px]">
          <h1 class="mb-[24px]">Lunch Buffet</h1>
          <p class="mb-[34px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <router-link to="/menu#buffet">
            <button>Buffet menu</button>
          </router-link>
        </div>
      </div>
    </Slide>
    <Slide>
      <div v-show="currentSlide === 2" class="slide-content">
        <h1>Dinner Specials</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </p>
        <button>Special menu</button>
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
  color: var(--171717, #171717);
  font-family: David Libre;
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

h1 {
  color: #fff;
  text-align: center;
  font-size: 3.75rem;
  font-family: Times New Roman;
  font-style: normal;
  font-weight: 700;
  line-height: 4.0625rem;
}

p {
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8125rem;
}

button {
  padding: 0.75rem 2rem;
  border-radius: 0.3125rem;
  align-items: center;
  background: var(--ffbb-00, #ffc933);
  color: var(--171717, #171717);
  font-size: 1rem;
  font-family: David Libre;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8125rem;
}
</style>
