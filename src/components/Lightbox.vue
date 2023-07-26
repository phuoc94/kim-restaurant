<template>
  <div
    class="fixed top-0 flex h-screen w-full items-center justify-center bg-black/80"
    @click.self="$emit('close')"
  >
    <div class="relative z-0 m-4 max-h-[90vh] bg-white md:max-h-[80vh]">
      <img
        :src="selectedImage"
        class="h-full max-h-[90vh] w-full object-cover md:max-h-[80vh]"
      />
      <button
        class="absolute right-4 top-4 z-10 p-2"
        @click.stop="$emit('close')"
      >
        <i class="icon pi pi-times text-xl"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedImage"],
};
</script>

<style></style>
