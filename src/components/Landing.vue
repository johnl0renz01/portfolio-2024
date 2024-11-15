<script setup>
import fisherman from '@/assets/fisherman.png';
</script>

<style scoped>
.bg2 {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 56, 69, 1) 100%
  );
}
</style>

<template>
  <div
    class="relative w-full sm:px-6 lg:px-12 bg-white text-darkshade min-h-[calc(100vh-10vh)] max-h-[calc(100vh-10vh)]"
  >
    <div
      class="min-h-[calc(100vh-20vh)] max-h-[calc(100vh-10vh)] flex items-center justify-center"
    >
      <div class="text-center">
        <h1 class="text-[4rem] leading-[4rem] font-kanit uppercase font-bold">
          Super Long Text&nbsp;Here<br />
          Another Text...
        </h1>
        <h6 class="text-[1.5rem]">Medium super long subtext here...</h6>
      </div>
    </div>
    <img
      class="absolute m-auto right-0 left-0 bottom-0 h-[200px]"
      :src="fisherman"
    />
  </div>
  <div class="bg2 h-screen"></div>
</template>
