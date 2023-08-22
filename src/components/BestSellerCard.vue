<template>
  <div class="min-h-full rounded bg-zinc-50 text-neutral-900 shadow-md">
    <div class="relative">
      <img :src="image" :alt="title" class="mx-auto aspect-video w-full" />
      <div
        class="absolute bottom-[-28px] right-3 h-14 w-14 rounded-full bg-yellow-500"
      >
        <div
          class="flex h-full flex-col items-center justify-center text-center"
        >
          <div class="text-xs">alk.</div>
          <div class="text-sm">{{ price }}</div>
        </div>
      </div>
    </div>

    <div class="px-3 py-10">
      <h2 class="mb-2 text-center font-serif text-xl font-bold">
        {{ title }}
      </h2>
      <p class="text-center font-montserrat" v-html="formattedDescription"></p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps(["title", "description", "price", "image"]);

const formattedDescription = computed(() =>
  props.description.replace(/\n/g, "<br/>")
);
</script>

<style scoped></style>
