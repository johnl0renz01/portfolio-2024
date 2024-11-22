<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/logo.png';
</script>

<template>
  <nav
    class="bg-transparent mx-auto sm:px-6 lg:px-12 absolute top-0 left-0 right-0 overflow-hidden"
  >
    <div class="flex h-24 items-center justify-between">
      <div
        class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
      >
        <div
          class="group hidden md:flex justify-center items-center relative overflow-hidden hover:scale-110 transition duration-200 ease-linear"
        >
          <RouterLink class="flex flex-shrink-0 items-center" to="/">
            <div class="flex items-center bg-darkshade">
              <img :src="logo" class="h-14" />
            </div>
          </RouterLink>
          <div
            class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine"
          ></div>
        </div>

        <div class="md:ml-auto">
          <div class="flex space-x-2 font-bold">
            <RouterLink
              to="/about"
              class="text-darkshade xs:px-1.5 sm:px-3 py-2 rounded-md no-underline transition duration-100 hover:scale-110"
              >About</RouterLink
            >
            <a
              href="#background"
              class="text-darkshade xs:px-1.5 sm:px-3 py-2 rounded-md no-underline hover:scale-110"
              >Background</a
            >

            <a
              href="#skills"
              class="text-darkshade xs:px-1.5 sm:px-3 py-2 rounded-md no-underline hover:scale-110"
              >Skills</a
            >
            <a
              href="#projects"
              class="text-darkshade xs:px-1.5 sm:px-3 py-2 rounded-md no-underline hover:scale-110"
              >Projects</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
