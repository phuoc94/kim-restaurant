<script>
export default {
  name: "PageFooter",
};
</script>

<template>
  <div class="bg-[rgba(23,23,23,0.80)] shrink-0 w-[1512px] h-[387px] relative">
    <div class="absolute" style="inset: 0">
      <div
        class="flex flex-row gap-[57px] items-start justify-start absolute left-[133px] top-[calc(50%_-_78.93px)]"
      >
        <div class="shrink-0 w-[155px] h-[158px] static">
          <div
            class="text-[#f0f0f0] text-left absolute left-0 top-[42px]"
            style="font: var(--text, 400 16px/29px 'Montserrat', sans-serif)"
          >
            Ma 11:00 - 14:30<br />Ti - Pe 11:00 - 21:00<br />La 12:00 - 21:00<br />Su
            12:00 - 20:30
          </div>

          <div
            class="text-[#f0f0f0] text-left absolute left-px top-0"
            style="
              font: var(--textbold, 700 16px/29px 'Montserrat', sans-serif);
            "
          >
            Open hours
          </div>
        </div>

        <div class="shrink-0 w-[92px] h-[123px] static">
          <div
            class="text-[#f0f0f0] text-left absolute left-[212px] top-9"
            style="font: var(--text, 400 16px/29px 'Montserrat', sans-serif)"
          >
            Menu<br />About us<br />Contact us
          </div>

          <div
            class="text-[#f0f0f0] text-left absolute left-[212px] top-0"
            style="
              font: var(--textbold, 700 16px/29px 'Montserrat', sans-serif);
            "
          >
            Navigation
          </div>
        </div>

        <div class="shrink-0 w-[139px] h-[29px] static">
          <div class="w-[102px] h-[29px] static">
            <div
              class="text-[#f0f0f0] text-left absolute left-[361px] top-0"
              style="
                font: var(--textbold, 700 16px/29px 'Montserrat', sans-serif);
              "
            >
              FOLLOW US
            </div>
          </div>

          <svg
            class="absolute left-[471px] top-0 overflow-visible"
            style=""
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5833 14.632C26.5833 7.96204 21.17 2.54871 14.5 2.54871C7.82996 2.54871 2.41663 7.96204 2.41663 14.632C2.41663 20.4804 6.57329 25.35 12.0833 26.4737V18.257H9.66663V14.632H12.0833V11.6112C12.0833 9.27912 13.9804 7.38204 16.3125 7.38204H19.3333V11.007H16.9166C16.252 11.007 15.7083 11.5508 15.7083 12.2154V14.632H19.3333V18.257H15.7083V26.655C21.8104 26.0508 26.5833 20.9033 26.5833 14.632Z"
              fill="#F0F0F0"
            />
          </svg>
        </div>
      </div>

      <div class="w-[459px] h-[100px] static">
        <div
          class="text-[#ffbb00] text-left absolute left-[922px] top-[calc(50%_-_32.93px)]"
          style="font: var(--h-1, 700 60px/65px 'Times New Roman', sans-serif)"
        >
          See you at Kim
        </div>

        <img
          class="w-[62px] h-[85px] absolute left-[calc(50%_-_-563px)] top-[125.57px]"
          src="@/assets/image-5.png"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
