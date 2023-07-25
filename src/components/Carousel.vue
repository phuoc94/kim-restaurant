<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <div
      v-if="
        navigationEnable === true ||
        (navigationEnable === 'mobileOnly' && isMobile)
      "
      class="navigate"
    >
      <div class="toggle-page left" v-if="isMobile">
        <button @click="goToPreviousSlide">
          <span
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  d="M1 16C1 24.284 7.716 31 16 31C24.284 31 31 24.284 31 16C31 7.716 24.284 1 16 1C7.716 1 1 7.716 1 16ZM15.1525 13.4285H24.5L24.5 18.5715L15.1525 18.5715V24L7.5 16L15.1525 8L15.1525 13.4285Z"
                  fill="#FAFAFA"
                  fill-opacity="0.980392"
                />
              </g>
            </svg>
          </span>
        </button>
      </div>
      <div class="toggle-page right" v-if="isMobile">
        <button @click="goToNextSlide">
          <span
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  d="M31 16C31 7.716 24.284 1 16 1C7.716 1 1 7.716 1 16C1 24.284 7.716 31 16 31C24.284 31 31 24.284 31 16ZM16.8475 18.5715H7.5V13.4285L16.8475 13.4285V8L24.5 16L16.8475 24V18.5715Z"
                  fill="#FAFAFA"
                  fill-opacity="0.980392"
                />
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>

    <div v-if="paginationEnable" class="pagination">
      <span
        v-for="(slide, index) in getSlideCount"
        @click="goToSpecificSlide(index)"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
        class="dot"
      >
      </span>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";

export default {
  props: ["autoPlay", "duration", "navigation", "pagination", "sliderCount"],
  setup(props) {
    const windowWidth = ref(window.innerWidth);
    const isMobile = computed(() => windowWidth.value <= 768); // Or whatever size you consider to be "mobile"

    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener("resize", updateWindowWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateWindowWidth);
    });

    const currentSlide = ref(1);
    const getSlideCount = ref(props.sliderCount);
    const autoPlayEnable = ref(
      props.autoPlay === undefined ? true : props.autoPlay
    );
    const timeoutDuration = ref(
      props.duration === undefined ? 10000 : props.duration
    );
    const intervalId = ref(null);

    const paginationEnable = ref(props.pagination === undefined ? true : false);
    const navigationEnable = ref(
      props.navigation === undefined ? true : props.navigation
    );

    const goToNextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
      } else {
        currentSlide.value += 1;
      }
      resetSlideTimer();
    };

    const goToPreviousSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value;
      } else {
        currentSlide.value -= 1;
      }
      resetSlideTimer();
    };

    const goToSpecificSlide = (index) => {
      currentSlide.value = index + 1;
      resetSlideTimer();
    };

    const startSlideShow = () => {
      intervalId.value = setInterval(() => {
        goToNextSlide();
      }, timeoutDuration.value);
    };

    const resetSlideTimer = () => {
      clearInterval(intervalId.value);
      if (autoPlayEnable.value) {
        startSlideShow();
      }
    };

    if (autoPlayEnable.value) {
      startSlideShow();
    }

    return {
      isMobile,
      currentSlide,
      goToNextSlide,
      goToPreviousSlide,
      getSlideCount,
      goToSpecificSlide,
      paginationEnable,
      navigationEnable,
    };
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  height: 100%;
}

.navigate {
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  padding: 0 16px;
  width: 100%;
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
  border-radius: 50%;
  color: #fff;
  font-size: 32px;
  font-weight: bolder;
  cursor: pointer;
}

.pagination {
  position: relative;
  bottom: 1.5rem;
  width: 100%;
  display: flex;
  gap: 1.62rem;
  justify-content: center;
  align-items: center;
}

.dot {
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
