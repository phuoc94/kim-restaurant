<template>
  <div>
    <img class="max-h-screen w-full" src="@/assets/about_img.webp" />
    <div class="bg-custom-gradient py-24 md:py-32 lg:py-40">
      <h1 class="h1 text-center font-serif font-bold text-amber-400">
        Kim Ravintola
      </h1>
      <div
        class="mx-auto mt-8 flex max-w-5xl flex-col gap-8 px-4 text-justify md:flex-row"
      >
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Bibendum purus vitae justo
            ultrices cras a. Feugiat pharetra dictum orci ac elementum. Nulla
            nec suspendisse tellus ante quam nisl montes vivamus. Aliquet urna
            porta volutpat nibh nunc sagittis nisi. Nisi imperdiet arcu gravida
            nullam. Integer euismod at morbi viverra semper enim. Sed hac risus
            elementum auctor venenatis. Mauris pellentesque ultrices elit eget
            id sed donec. Tristique feugiat etiam viverra enim.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Bibendum purus vitae justo
            ultrices cras a. Feugiat pharetra dictum orci ac elementum. Nulla
            nec suspendisse tellus ante quam nisl montes vivamus. Aliquet urna
            porta volutpat nibh nunc sagittis nisi. Nisi imperdiet arcu gravida
            nullam. Integer euismod at morbi viverra semper enim. Sed hac risus
            elementum auctor venenatis. Mauris pellentesque ultrices elit eget
            id sed donec. Tristique feugiat etiam viverra enim.
          </p>
        </div>
      </div>
    </div>
    <FrameFour />
  </div>
</template>

<script lang="ts">
import FrameFour from "@/components/FrameFour.vue";

export default {
  components: { FrameFour },
};
</script>
