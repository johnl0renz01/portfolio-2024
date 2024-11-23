<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/logo_transparent.png';
</script>

<template>
  <footer
    class="bg-[#00080c] flex justify-center text-white xs:pt-[2.5rem] sm:pt-[3rem] lg:pt-[5rem] pb-[5rem] border-t-[1px] border-white/10 mt-20"
  >
    <div
      class="flex flex-col justify-center items-center xs:gap-y-6 lg:gap-y-10"
    >
      <img :src="logo" class="xs:w-10 sm:w-14 lg:w-16 object-contain" />
      <div class="text-center xs:text-sm lg:text-base">
        <div class="mb-4">
          Thank you for visiting my portfolio. <br />
          If you’d like to connect, feel free to reach out! <br />
          <span class="underline">johnlorenzdelacruz@gmail.com</span>
        </div>
        <p class="text-lightshade">
          &copy; 2024 JLDC Portfolio . All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
