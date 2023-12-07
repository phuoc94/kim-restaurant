<template>
  <div
    class="card-container mt-12 h-80 min-h-full rounded-lg rounded-br-[36px] rounded-tl-[36px] bg-[#FFE7CF] text-neutral-900 shadow-md lg:h-60"
  >
    <div class="relative">
      <img
        :src="image"
        :alt="title"
        class="image-container mx-auto aspect-video w-full translate-y-[-70px] px-8"
        @load="calculateTranslate"
        ref="imageRef"
      />
      <div
        class="absolute bottom-[-28px] right-3 h-14 w-14 translate-y-[-70px] rounded-full bg-yellow-500"
      >
        <div
          class="flex h-full flex-col items-center justify-center text-center"
        >
          <div class="text-xs font-bold">alk.</div>
          <div class="text-sm">{{ price }}</div>
        </div>
      </div>
    </div>

    <div class="translate-y-[-70px] px-3 py-10">
      <h2 class="mb-2 text-center font-serif text-xl font-bold">
        {{ title }}
      </h2>
      <p class="text-center font-montserrat" v-html="formattedDescription"></p>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, onMounted, ref } from "vue";

const props = defineProps(["title", "description", "price", "image"]);
const imageRef = ref(null);
const translateValue = ref(0);

const formattedDescription = computed(() =>
  props.description.replace(/\n/g, "<br/>")
);
const calculateTranslate = () => {
  if (imageRef.value) {
    translateValue.value = imageRef.value.clientHeight / 2;
  }
};

onMounted(() => {
  if (imageRef.value && imageRef.value.complete) {
    calculateTranslate();
  }
});
</script>

<style scoped>
.image-container {
  margin-top: -50%;
}

.card-container {
  padding-top: 50%;
}
</style>
