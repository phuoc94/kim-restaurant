<template>
  <div class="card min-h-full rounded bg-zinc-50 text-neutral-900">
    <div class="relative">
      <img :src="image" :alt="title" class="card-image aspect-video px-3" />
      <div
        class="absolute bottom-[-28px] right-3 h-14 w-14 rounded-full bg-yellow-500"
      >
        <p class="card-price text-center">
          <span class="text-xs">from</span> <br />
          <span class="text-sm">{{ price }}</span>
        </p>
      </div>
    </div>

    <div class="card-body px-3 py-10">
      <h2 class="card-title mb-2 text-center font-serif text-xl font-bold">
        {{ title }}
      </h2>
      <p class="card-description text-center font-montserrat">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
