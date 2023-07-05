<script>
export default {
  name: "FrameOneCopu",
};
</script>

<template>
  <div
    class="bg-[#111b24] shrink-0 w-[1512px] h-[892px] relative overflow-hidden"
  >
    <img
      class="w-[1520px] h-[892px] absolute left-0 top-0"
      src="@/assets/banner-1.png"
    />

    <div
      class="text-[#ffffff] text-center absolute left-[calc(50%_-_171px)] top-[316px]"
      style="font: var(--h-1, 700 60px/65px 'Times New Roman', sans-serif)"
    >
      Lunch Buffet
    </div>

    <div
      class="text-[#ffffff] text-center absolute left-[calc(50%_-_193px)] top-[calc(50%_-_41px)] w-[376px] h-[65px]"
      style="font: 400 16px/29px 'Inter', sans-serif"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt
    </div>

    <div
      class="flex flex-row gap-[26px] items-start justify-start absolute left-[calc(50%_-_37px)] top-[850px]"
    >
      <div
        class="bg-[#ffffff] rounded-[50%] shrink-0 w-[7px] h-[7px] relative"
      ></div>

      <div
        class="bg-[#ffbb00] rounded-[50%] shrink-0 w-[7px] h-[7px] relative"
      ></div>

      <div
        class="bg-[#ffffff] rounded-[50%] shrink-0 w-[7px] h-[7px] relative"
      ></div>
    </div>

    <div
      class="bg-ffbb-00 rounded-[5px] pt-3 pr-8 pb-3 pl-8 flex flex-col gap-4 items-center justify-start absolute left-[calc(50%_-_72px)] top-[504px]"
    >
      <div
        class="text-_171717 text-left relative navigation-button"
        style="font: 700 16px/29px 'David Libre', sans-serif"
      >
        Buffet menu
      </div>
    </div>
  </div>
</template>

<style scoped>
.navigation-button {
  background: var(--ffbb-00, #ffc933);
  border-radius: 5px;
  padding: 12px 32px 12px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}
</style>
