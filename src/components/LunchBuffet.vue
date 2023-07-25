<template>
  <div>
    <div class="bg-zinc-700">
      <div class="container bg-zinc-800 pb-16">
        <img src="@/assets/lounasbuffet.webp" />
        <h1
          class="h1 -translate-y-12 text-center font-serif font-bold text-[#FFBB00] md:-translate-y-20 lg:-translate-y-32"
        >
          12,70€
        </h1>
        <div
          v-for="dayMenu in menu"
          :key="dayMenu.day"
          class="mx-auto max-w-xl px-4 pb-8"
        >
          <h1 class="h1 font-serif font-bold text-white">{{ dayMenu.day }}</h1>
          <div
            v-for="dish in dayMenu.dish"
            :key="dish.title"
            class="flex w-full font-montserrat text-white sm:px-8"
          >
            <span>{{ dish.title }}</span>
            <span
              class="mx-1 flex-1 -translate-y-1 border-b-2 border-dotted border-white"
            ></span>
            <span class="w-10">{{ dish.dietary }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const menu = ref([
      {
        day: "MA",
        dish: [
          {
            title: "Punainen curry kana",
            dietary: "L, G",
          },
          {
            title: "Naudanliha bambunversojen ja sienten kera",
            dietary: "L",
          },
          {
            title: "Friteerattu kananrinta",
            dietary: "L, G",
          },
          {
            title: "Paistettua tofua ja inkivääri vihanneksia",
            dietary: "L, G",
          },
          {
            title: "Porsaanlihaa pekingin kastikkella",
            dietary: "L, G",
          },
          {
            title: "Sipulirenkaat",
            dietary: "L, G",
          },
          {
            title: "Riisinuudeli wokk",
            dietary: "L, G",
          },
          {
            title: "Paitettua nuudelia ja vihanneksia",
            dietary: "L, G",
          },
        ],
      },
      {
        day: "TI",
        dish: [
          {
            title: "Punainen curry kana",
            dietary: "L, G",
          },
          {
            title: "Naudanliha bambunversojen ja sienten kera",
            dietary: "L, G",
          },
          {
            title: "Friteerattu kananrinta",
            dietary: "L, G",
          },
          {
            title: "Paistettua tofua ja inkivääri vihanneksia",
            dietary: "L, G",
          },
          {
            title: "Porsaanlihaa pekingin kastikkella",
            dietary: "L, G",
          },
          {
            title: "Sipulirenkaat",
            dietary: "L, G",
          },
          {
            title: "Riisinuudeli wokk",
            dietary: "L, G",
          },
          {
            title: "Paitettua nuudelia ja vihanneksia",
            dietary: "L, G",
          },
        ],
      },
      {
        day: "KE",
        dish: [
          {
            title: "Punainen curry kana",
            dietary: "L, G",
          },
          {
            title: "Naudanliha bambunversojen ja sienten kera",
            dietary: "L, G",
          },
          {
            title: "Friteerattu kananrinta",
            dietary: "L, G",
          },
          {
            title: "Paistettua tofua ja inkivääri vihanneksia",
            dietary: "L, G",
          },
          {
            title: "Porsaanlihaa pekingin kastikkella",
            dietary: "L, G",
          },
          {
            title: "Sipulirenkaat",
            dietary: "L, G",
          },
          {
            title: "Riisinuudeli wokk",
            dietary: "L, G",
          },
          {
            title: "Paitettua nuudelia ja vihanneksia",
            dietary: "L, G",
          },
        ],
      },
      {
        day: "TO",
        dish: [
          {
            title: "Punainen curry kana",
            dietary: "L, G",
          },
          {
            title: "Naudanliha bambunversojen ja sienten kera",
            dietary: "L, G",
          },
          {
            title: "Friteerattu kananrinta",
            dietary: "L, G",
          },
          {
            title: "Paistettua tofua ja inkivääri vihanneksia",
            dietary: "L, G",
          },
          {
            title: "Porsaanlihaa pekingin kastikkella",
            dietary: "L, G",
          },
          {
            title: "Sipulirenkaat",
            dietary: "L, G",
          },
          {
            title: "Riisinuudeli wokk",
            dietary: "L, G",
          },
          {
            title: "Paitettua nuudelia ja vihanneksia",
            dietary: "L, G",
          },
        ],
      },
      {
        day: "PE",
        dish: [
          {
            title: "Punainen curry kana",
            dietary: "L, G",
          },
          {
            title: "Naudanliha bambunversojen ja sienten kera",
            dietary: "L, G",
          },
          {
            title: "Friteerattu kananrinta",
            dietary: "L, G",
          },
          {
            title: "Paistettua tofua ja inkivääri vihanneksia",
            dietary: "L, G",
          },
          {
            title: "Porsaanlihaa pekingin kastikkella",
            dietary: "L, G",
          },
          {
            title: "Sipulirenkaat",
            dietary: "L, G",
          },
          {
            title: "Riisinuudeli wokk",
            dietary: "L, G",
          },
          {
            title: "Paitettua nuudelia ja vihanneksia",
            dietary: "L, G",
          },
        ],
      },
    ]);

    return { menu };
  },
};
</script>

<style></style>
