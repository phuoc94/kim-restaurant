<template>
  <div
    class="relative flex min-h-screen items-center justify-center bg-cover bg-center"
  >
    <img
      src="@/assets/banner-1.webp"
      alt="Lunch Buffet"
      class="absolute inset-0 z-0 h-full max-h-screen w-full object-cover"
    />
    <div class="relative z-10 mx-14 text-center text-white">
      <h1 class="h1 mb-6 font-serif font-bold">Lunch Buffet</h1>
      <p class="mb-8 font-inter">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
      <router-link :to="{ path: '/menu/lunchbuffet' }">
        <button class="button">Buffet menu</button>
      </router-link>
    </div>
  </div>
</template>
