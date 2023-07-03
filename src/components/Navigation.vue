<script>
export default {
  name: "NavigationSection",
};
</script>

<template>
  <div
    class="pt-1.5 pr-[126px] pb-1.5 pl-[126px] shrink-0 w-[1512px] h-[122px] relative"
  >
    <div
      class="flex flex-row gap-12 items-center justify-center absolute left-32 top-[calc(50%_-_14px)]"
    >
      <div
        class="text-[#171717] text-left relative"
        style="
          font: var(--h-2-bold, 700 24px/29px 'Times New Roman', sans-serif);
        "
      >
        Menu
      </div>

      <div
        class="text-[#101a24] text-left relative"
        style="font: var(--h-2, 400 24px/29px 'Times New Roman', sans-serif)"
      >
        About
      </div>

      <div
        class="text-[#101a24] text-left relative"
        style="font: var(--h-2, 400 24px/29px 'Times New Roman', sans-serif)"
      >
        Contact
      </div>

      <div
        class="text-[#101a24] text-left relative"
        style="font: var(--h-2, 400 24px/29px 'Times New Roman', sans-serif)"
      >
        Gallery
      </div>
    </div>

    <img
      class="w-[214px] h-[85px] absolute left-[calc(50%_-_107px)] top-1.5"
      src="@/assets/logo.png"
    />

    <div
      class="bg-ffbb-00 rounded-[5px] pt-2 pr-4 pb-2 pl-4 flex flex-col gap-4 items-center justify-start absolute left-[1267px] top-[calc(50%_-_22px)]"
    >
      <button
        class="navigation-button"
        style="font: 700 16px/29px 'David Libre', sans-serif"
      >
        Book a table
      </button>
    </div>

    <svg
      class="absolute left-[1193px] top-[calc(50%_-_17px)] overflow-visible"
      style=""
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.0834 17.5001C32.0834 9.45008 25.5501 2.91675 17.5001 2.91675C9.45008 2.91675 2.91675 9.45008 2.91675 17.5001C2.91675 24.5584 7.93341 30.4355 14.5834 31.7917V21.8751H11.6667V17.5001H14.5834V13.8542C14.5834 11.0397 16.873 8.75008 19.6876 8.75008H23.3334V13.1251H20.4167C19.6147 13.1251 18.9584 13.7813 18.9584 14.5834V17.5001H23.3334V21.8751H18.9584V32.0105C26.323 31.2813 32.0834 25.0688 32.0834 17.5001Z"
        fill="black"
      />
    </svg>
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
