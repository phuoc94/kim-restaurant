<template>
  <div class="bg-custom-gradient">
    <div v-if="error" class="p-64 text-center">
      An error occurred: {{ error }}
    </div>

    <div v-else-if="loading" class="p-64 text-center">Loading...</div>

    <div v-else v-for="(dishes, category) in groupedDishes" :key="category">
      <div class="container px-4 pb-24 pt-6 font-serif">
        <h1 class="h1 mb-12 text-center font-bold lg:text-left">
          {{ category }}
        </h1>

        <div v-for="(dish, index) in dishes" :key="index">
          <div
            class="mx-auto mb-4 grid max-w-screen-lg grid-cols-[44px_auto_70px] gap-2 lg:grid-cols-[60px_auto_minmax(50px,100px)_190px]"
          >
            <div class="grid-feature row-span-3 lg:row-span-2">
              <span v-if="dish.bestSellerIcon">
                <img src="@/assets/featured-icon.webp" />
              </span>
            </div>
            <div class="grid-title">
              <h3 class="text-xl md:text-2xl lg:font-bold">
                <span v-if="dish.dishNumber">{{ dish.dishNumber }}.</span>
                {{ dish.title }}
              </h3>
            </div>
            <div
              class="grid-description col-span-2 lg:col-start-2 lg:row-start-2"
            >
              <p class="text-sm font-normal md:text-base">
                {{ dish.description }}
              </p>
            </div>
            <div
              class="grid-dietary col-start-3 row-start-1 lg:col-start-3 lg:row-start-1"
            >
              <div class="absolute flex">
                <div
                  v-if="dish.vegan"
                  class="relative ml-[-24px] mt-[1px] md:mt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15 11.063C12.53 13.65 10.059 20 10.059 20C10.059 20 6.529 11.062 3 9"
                      stroke="#629614"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.4958 5.57701L20.9218 10.001C21.1978 12.871 19.0468 15.426 16.1768 15.703C13.3608 15.973 10.8098 13.915 10.5388 11.099C10.4742 10.4294 10.5422 9.75361 10.7389 9.11026C10.9355 8.46691 11.257 7.86861 11.6849 7.34951C12.1128 6.83041 12.6387 6.4007 13.2327 6.0849C13.8267 5.76911 14.4771 5.57342 15.1468 5.50901L19.8628 5.05501C19.9386 5.0477 20.0152 5.05541 20.088 5.07769C20.1609 5.09997 20.2286 5.13639 20.2874 5.18486C20.3462 5.23334 20.3949 5.29292 20.4306 5.36021C20.4664 5.4275 20.4885 5.50117 20.4958 5.57701Z"
                      stroke="#629614"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p class="text-xl md:text-2xl lg:font-bold">
                  {{ dish.dietary }}
                </p>
                <div v-if="dish.hot" class="relative mt-[1px] md:mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 10V22C16 22 8 20 8 11V10C8 9.27 8.4 8.63 9 8.28L10.25 9L12 8L13.75 9L15 8.28C15.6 8.63 16 9.27 16 10ZM12 6.5L13.75 7.5L15.27 6.63C14.72 5.66 13.91 4.94 12.97 4.65C12.8853 3.92126 12.5361 3.24894 11.9887 2.7605C11.4413 2.27206 10.7336 2.00146 10 2V4C10.44 4 10.8 4.29 10.94 4.69C10.03 5 9.26 5.7 8.73 6.63L10.25 7.5L12 6.5Z"
                      fill="#D30000"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              class="grid-price col-span-2 col-start-2 row-start-2 font-bold md:text-xl lg:col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-1"
            >
              <div v-for="(price, priceIndex) in dish.prices" :key="priceIndex">
                <p v-if="dish.prices.length > 1">
                  {{ price.type }}: {{ price.price.toFixed(2) }}
                </p>
                <p v-else>{{ price.price.toFixed(2) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

const dishes = ref([]);
const category = ref([]);
const loading = ref(true);
const error = ref(null);

const sortedCategory = computed(() => {
  return [...category.value].sort((a, b) => a.sequence - b.sequence);
});

const groupedDishes = computed(() => {
  let grouped = {};
  sortedCategory.value.forEach((cat) => {
    grouped[cat.title] = dishes.value.filter(
      (dish) => dish.category === cat.categoryKey
    );
  });
  return grouped;
});

const fetchDishes = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await axios.post(API_URL, {
      query: `
        {
          menus(where: {hiddenInMenu: false}, orderBy: dishNumber_ASC, first: 100) {
            dishNumber
            title
            description
            prices {
              price
              type
            }
            dietary
            category
            displayHome
            bestSeller
            image {
              url
            }
            bestSellerIcon
            hot
            vegan
            hiddenInMenu
          }
          categorynames{
            categoryKey
            title
            sequence
          }
        }
      `,
    });

    if (response.data.errors) {
      console.log("GraphQL errors:", response.data.errors);
    } else {
      dishes.value = response.data.data.menus;
      category.value = response.data.data.categorynames;
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchDishes);
</script>

<style scoped></style>
