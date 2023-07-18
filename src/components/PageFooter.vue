<script>
export default {
  name: "PageFooter",
};
</script>

<template>
  <div class="page-footer bg-neutral-900/80">
    <div class="container mx-auto p-11 pt-16 md:flex md:py-28">
      <div class="gap-4 md:flex md:basis-1/2">
        <div class="min-w-max font-montserrat text-zinc-100 md:basis-1/3">
          <h4 class="font-bold">Open hours</h4>
          <div class="mt-3">
            <p>Ma 11:00 - 14:30</p>
            <p>Ti-Pe 11:00 - 21:00</p>
            <p>La 12:00 - 21:00</p>
            <p>Su 12:00 - 20:30</p>
          </div>
        </div>
        <div class="mt-14 font-montserrat text-zinc-100 md:mt-0 md:basis-1/3">
          <h4 class="font-bold">Navigation</h4>
          <div class="mt-3">
            <router-link to="/menu">
              <p>Menu</p>
            </router-link>
            <router-link to="/about">
              <p>About us</p>
            </router-link>
            <router-link to="/contact">
              <p>Contact us</p>
            </router-link>
          </div>
        </div>
        <div class="mt-14 md:mt-0 md:basis-1/3">
          <h4 class="font-montserrat font-bold text-zinc-100">
            FOLLOW US <i class="icon pi pi-facebook ml-2"></i>
          </h4>
        </div>
      </div>
      <div
        class="mt-14 flex items-baseline gap-1 md:mt-0 md:basis-1/2 md:justify-end"
      >
        <div class="see-you font-serif text-5xl font-bold text-yellow-500">
          See you at Kim
        </div>
        <img src="@/assets/image-5.png" />
      </div>
    </div>
  </div>
</template>
