<script>
export default {
  name: "FrameTwo",
};
</script>

<template>
  <div
    class="container mx-auto grid grid-cols-1 items-center py-24 lg:grid-cols-2"
  >
    <div class="lg:margin-0 mt-16 flex basis-1/2 justify-center">
      <img class="image" src="@/assets/mihoanhthanh.png" />
    </div>
    <div class="basis-1/2 p-11">
      <h1
        class="h1 mb-8 text-center font-libre font-bold text-gray-900 lg:text-left"
      >
        Wecome to Our Restaurant
      </h1>
      <p class="mb-4 text-center font-montserrat text-gray-500 lg:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="flex flex-wrap justify-center gap-4 xl:justify-start">
        <router-link to="/menu#buffet">
          <button class="button">Buffet menu</button>
        </router-link>

        <router-link to="/menu#alacarte">
          <button class="button">A-la-carté menu</button>
        </router-link>

        <router-link to="/contact#reservation">
          <button
            class="button-second rounded-md bg-neutral-900 px-8 py-3 font-libre font-bold text-white"
          >
            Book a table
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
