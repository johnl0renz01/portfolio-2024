<script setup>
import { RouterLink, useRoute } from 'vue-router';
//import logo from '@/assets/img/logo.png';

const isActiveLink = routePath => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-transparent">
    <div class="mx-auto sm:px-6 lg:px-12">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo 
           
          
          -->

          <RouterLink class="flex flex-shrink-0 items-center" to="/">
            <span class="hidden md:block text-darkshade text-2xl font-bold"
              >Logo</span
            >
          </RouterLink>

          <div class="md:ml-auto">
            <div class="flex space-x-2 font-bold">
              <RouterLink
                to="/about"
                :class="[
                  isActiveLink('/about')
                    ? 'bg-darkshade text-white'
                    : 'text-darkshade hover:scale-110',
                  'text-darkshade px-3 py-2 rounded-md no-underline transition duration-100',
                ]"
                >About</RouterLink
              >
              <RouterLink
                to="/education"
                :class="[
                  isActiveLink('/education')
                    ? 'bg-darkshade text-white'
                    : 'text-darkshade hover:scale-110',
                  'text-darkshade px-3 py-2 rounded-md no-underline',
                ]"
                >Education</RouterLink
              >
              <RouterLink
                to="/experience"
                :class="[
                  isActiveLink('/experience')
                    ? 'bg-darkshade text-white'
                    : 'text-darkshade hover:scale-110',
                  'text-darkshade px-3 py-2 rounded-md no-underline',
                ]"
                >Experience</RouterLink
              >
              <RouterLink
                to="/skills"
                :class="[
                  isActiveLink('/skills')
                    ? 'bg-darkshade text-white'
                    : 'text-darkshade hover:scale-110',
                  'text-darkshade px-3 py-2 rounded-md no-underline',
                ]"
                >Skills</RouterLink
              >
              <RouterLink
                to="/projects"
                :class="[
                  isActiveLink('/projects')
                    ? 'bg-darkshade text-white'
                    : 'text-darkshade hover:scale-110',
                  ' px-3 py-2 rounded-md no-underline',
                ]"
                >Projects</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
