<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <div v-if="navigationEnable" class="navigate">
      <div class="toggle-page left">
        <button @click="prevSlide">&lt;</button>
      </div>
      <div class="toggle-page right">
        <button @click="nextSlide">></button>
      </div>
    </div>

    <div v-if="paginationEnable" class="pagination">
      <span
        v-for="(slide, index) in getSlideCount"
        @click="goToSlice(index)"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: ["autoPlay", "duration", "navigation", "pagination"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnable = ref(
      props.autoPlay === undefined ? true : props.autoPlay
    );
    const timeoutDuration = ref(
      props.duration === undefined ? 5000 : props.duration
    );

    const paginationEnable = ref(props.pagination === undefined ? true : false);
    const navigationEnable = ref(props.navigation === undefined ? true : false);

    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlice = (index) => {
      currentSlide.value = index + 1;
    };

    const fnAutoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlayEnable.value) {
      fnAutoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
      console.log(getSlideCount.value);
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlice,
      paginationEnable,
      navigationEnable,
    };
  },
};
</script>

<style scoped>
.navigate {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle-page {
  display: flex;
  flex: 1;
}

.right {
  justify-content: flex-end;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: red;
  color: #fff;
  font-size: 32px;
  font-weight: bolder;
  cursor: pointer;
}

.pagination {
  position: absolute;
  bottom: 2.19rem;
  width: 100%;
  display: flex;
  gap: 1.62rem;
  justify-content: center;
  align-items: center;
}

span {
  cursor: pointer;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #ffffff;
}

.active {
  background-color: #ffbb00;
}
</style>
