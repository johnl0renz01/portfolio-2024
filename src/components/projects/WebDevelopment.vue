<script setup>
import { RouterLink, useRoute } from 'vue-router';
import data from '@/data/projects/webdevelopment.js';

const project = data;

const isActiveLink = routePath => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <div
    v-for="(item, index) in project"
    :key="item.id"
    :class="[
      'lg:grid lg:grid-cols-2 h-full gap-x-6 gap-y-20  py-20',
      index == project.length - 1 ? '' : 'border-b-white border-b-[1px]',
    ]"
  >
    <div class="relative">
      <img class="h-full" :src="item.image" />
    </div>
    <div class="relative flex flex-col gap-y-3">
      <h1 class="text-[1.5rem] font-bold font-montserrat">
        {{ item.title }}
      </h1>
      <p class="">
        {{ item.description }}
      </p>
      <RouterLink
        :to="'/details/' + item.name"
        target="_blank"
        class="mt-2 text-[1rem] font-montserrat font-semibold underline"
        >Explore</RouterLink
      >
    </div>
  </div>
</template>
