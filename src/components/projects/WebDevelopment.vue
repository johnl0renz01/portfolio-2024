<script setup>
import pia_thumbnail from '@/assets/projects/pia/thumbnail.png';
import adaptive_thumbnail from '@/assets/projects/adaptive/thumbnail.png';
import turo_thumbnail from '@/assets/projects/turo/thumbnail.png';

import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = routePath => {
  const route = useRoute();
  return route.path === routePath;
};

const project = [
  {
    image: pia_thumbnail,
    title: 'Personal Instructive Agent',
    description:
      "The website enhances algebra learning by an emotional agent that responds to students' progress with expressions like happiness or sadness.",
  },

  {
    image: adaptive_thumbnail,
    title: 'Adaptive Sensei',
    description:
      'A website to help students learn and practice linear equations for academic research.',
  },

  {
    image: turo_thumbnail,
    title: 'Turo Food Finder',
    description:
      'This website recommends restaurants based on user preferences to help users make informed meal choices.',
  },
];
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
        to="/details"
        target="_blank"
        class="mt-2 text-[1rem] font-montserrat font-semibold underline"
        >Explore</RouterLink
      >
    </div>
  </div>
</template>
