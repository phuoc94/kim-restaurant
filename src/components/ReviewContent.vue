<template>
  <div v-show="isVisible" class="slide-content">
    <div class="mx-6 rounded-2xl bg-white p-8 md:mx-0">
      <div class="stars flex justify-center gap-4">
        <i
          class="icon pi pi-star-fill text-yellow-500"
          v-for="i in slide.rating"
          :key="i"
        ></i>
      </div>
      <p class="my-4 font-montserrat text-gray-500">{{ slide.text }}</p>
      <h4 class="font-inter font-bold text-gray-900">{{ slide.reviewer }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewContent",
  props: {
    isVisible: {
      type: Boolean,
    },
    slide: {
      type: Object,
      required: true,
    },
  },
};
</script>
