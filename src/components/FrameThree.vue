<template>
  <div class="bg-[rgba(23,23,23,0.80)]">
    <div class="px-6 py-16 md:flex md:px-0 md:py-0">
      <div class="md:basis-2/3">
        <img
          class="rounded-tl-[50px] rounded-tr-[10px] rounded-br-[50px] rounded-bl-[10px] aspect-video w-full object-cover md:rounded-none md:min-h-[767px]"
          src="@/assets/slice2.png"
        />
      </div>

      <div
        class="relative text-center pb-14 translate-y-[-34px] mx-auto md:mr-12 md:translate-y-0 md:self-center md:absolute max-w-[600px] md:left-[55%]"
      >
        <Carousel
          :navigation="false"
          :autoPlay="false"
          :sliderCount="2"
          class="carousel"
          v-slot="{ currentSlide }"
        >
          <Slide>
            <div v-show="currentSlide === 1" class="slide-content">
              <div class="bg-white p-8 rounded-2xl mx-6 md:mx-0">
                <div class="stars flex gap-4 justify-center">
                  <i class="icon pi pi-star-fill"></i>
                  <i class="icon pi pi-star-fill"></i>
                  <i class="icon pi pi-star-fill"></i>
                  <i class="icon pi pi-star-fill"></i>
                  <i class="icon pi pi-star-fill"></i>
                </div>
                <p class="my-4">
                  Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam
                  sit. Vitae congue ultrices neque penatibus mi in quisque. Leo
                  in cursus enim magnis ante. Proin iaculis platea ipsum
                  sagittis ac eu aliquam quis. Ornare tincidunt tempus semper
                </p>
                <h4>Ama Ampomah, Google Review</h4>
              </div>
            </div>
          </Slide>
          <Slide>
            <div v-show="currentSlide === 2" class="slide-content">
              <div class="bg-white p-8 rounded-2xl mx-6">
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
    </div>
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
