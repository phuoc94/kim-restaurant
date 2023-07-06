<template>
  <div class="flex flex-row">
    <div class="absolute self-center right-12">
      <Carousel
        :navigation="false"
        :autoPlay="true"
        :sliderCount="2"
        class="carousel"
        v-slot="{ currentSlide }"
      >
        <Slide>
          <div v-show="currentSlide === 1" class="slide-content">
            <div
              class="bg-white w-[600px] h-[366px] px-32 py-12 rounded-2xl text-center mb-14 flex flex-col justify-center"
            >
              <div class="stars flex gap-4 justify-center">
                <i class="icon pi pi-star-fill"></i>
                <i class="icon pi pi-star-fill"></i>
                <i class="icon pi pi-star-fill"></i>
                <i class="icon pi pi-star-fill"></i>
                <i class="icon pi pi-star-fill"></i>
              </div>
              <p class="my-4">
                Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam
                sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in
                cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                eu aliquam quis. Ornare tincidunt tempus semper
              </p>
              <h4>Ama Ampomah, Google Review</h4>
            </div>
          </div>
        </Slide>
        <Slide>
          <div v-show="currentSlide === 2" class="slide-content">
            <div
              class="bg-white w-[600px] h-[366px] px-32 py-12 rounded-2xl text-center mb-14 flex flex-col justify-center"
            >
              <div class="stars flex gap-4 justify-center">
                <i class="icon pi pi-star-fill"></i>
                <i class="icon pi pi-star-fill"></i>
                <i class="icon pi pi-star-fill"></i>
                <i class="icon pi pi-star-fill"></i>
                <i class="icon pi pi-star-fill"></i>
              </div>
              <p class="my-4">
                Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam
              </p>
              <h4>Ama Ampomahsss, Google Review</h4>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>

    <div class="basis-2/3">
      <img src="@/assets/slice2.png" />
    </div>
    <div class="basis-1/3 bg-[rgba(23,23,23,0.80)]"></div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";

export default {
  name: "FrameThree",
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const slideLen = 1;

    return { slideLen };
  },
};
</script>

<style scoped>
.pi-star-fill {
  color: #ffbb00;
}

p {
  color: #5c6574;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
}

h4 {
  color: #101a24;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
}
</style>
