<template>
  <div class="bg-neutral-900/80">
    <div class="pt-16 md:flex md:px-0 md:py-0">
      <div class="px-4 md:basis-2/3">
        <img
          class="aspect-video w-full rounded-bl-[10px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[10px] object-cover md:min-h-screen md:rounded-none"
          src="@/assets/slice2.webp"
        />
      </div>

      <div
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
            <Slide v-for="(slide, index) in slides" :key="index">
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

<script>
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";
import ReviewContent from "@/components/ReviewContent.vue";

export default {
  name: "FrameThree",
  components: {
    Carousel,
    Slide,
    ReviewContent,
  },
  setup() {
    const slides = [
      {
        rating: 5,
        text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
        reviewer: "Ama Ampomah, Google Review",
      },
      {
        rating: 4,
        text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
        reviewer: "Ama Ampomahsss, Google Review",
      },
    ];

    const slideLen = slides.length;

    return { slideLen, slides };
  },
};
</script>
