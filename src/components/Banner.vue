<template>
  <div class="banner">
    <img src="@/assets/suljettu.jpg" alt="Banner Image" />
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner {
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner img {
  max-width: 100%;
  max-height: 100%;
}
</style>
