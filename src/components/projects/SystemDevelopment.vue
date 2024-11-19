<script setup>
import { RouterLink, useRoute } from 'vue-router';
import data from '@/data/projects/systemdevelopment.js';

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
      <h1
        class="xs:text-[1.25rem] lg:text-[1.5rem] xs:pt-4 lg:pt-0 font-bold font-montserrat"
      >
        {{ item.title }}
      </h1>
      <p class="xs:text-[0.925rem] xs:leading-[1.25rem] lg:text-base">
        {{ item.description }}
      </p>
      <RouterLink
        :to="'/details/' + item.name"
        target="_blank"
        class="mt-2 xs:text-[0.9rem] lg:text-[1rem] font-montserrat font-semibold underline"
        >Explore</RouterLink
      >
    </div>
  </div>
</template>
