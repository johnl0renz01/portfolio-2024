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
      'lg:grid lg:grid-cols-2 h-full lg:gap-x-6 gap-y-20  py-20',
      index == project.length - 1 ? '' : 'border-b-white border-b-[1px]',
    ]"
  >
    <div class="relative">
      <img class="h-full w-full object-cover" :src="item.image" />
    </div>
    <div class="relative">
      <h1
        class="xs:text-[1.25rem] lg:text-[1.5rem] xs:pt-4 lg:pt-0 font-bold font-montserrat"
      >
        {{ item.title }}
      </h1>
      <p
        class="xs:text-[0.925rem] xs:leading-[1.25rem] lg:text-base py-[0.75rem]"
      >
        {{ item.description }}
      </p>
<<<<<<< HEAD
      <div class="relative group inline-block">
        <RouterLink
          :to="'/details/' + item.name"
          target="_blank"
          class="mt-2 xs:text-[0.9rem] lg:text-[1rem] font-montserrat font-semibold inline-block"
          ><span class="pr-1">Explore</span>
          <v-icon name="md-openinnew" scale="0.9"></v-icon>
        </RouterLink>
        <span
          :class="[
            'absolute -bottom-1 left-0 w-0 h-1  transition-all duration group-hover:w-full z-[1] ' +
              item.color,
          ]"
        ></span>
        <span
          class="absolute -bottom-[0.12rem] left-0 h-[0.05rem] bg-white w-full"
        ></span>
      </div>
=======
      <RouterLink
        :to="'/details/' + item.name"
        target="_blank"
        class="mt-2 xs:text-[0.9rem] lg:text-[1rem] font-montserrat font-semibold inline-block"
        ><span class="underline pr-1">Explore</span>
        <v-icon name="md-openinnew" scale="0.9"></v-icon>
      </RouterLink>
>>>>>>> parent of d3bd033 (updated)
    </div>
  </div>
</template>
