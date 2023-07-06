<template>
  <div v-show="isVisible" class="slide-content">
    <div class="bg-white p-8 rounded-2xl mx-6 md:mx-0">
      <div class="stars flex gap-4 justify-center">
        <i class="icon pi pi-star-fill" v-for="i in slide.rating" :key="i"></i>
      </div>
      <p class="my-4">{{ slide.text }}</p>
      <h4>{{ slide.reviewer }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewContent",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    slide: {
      type: Object,
      required: true,
    },
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
