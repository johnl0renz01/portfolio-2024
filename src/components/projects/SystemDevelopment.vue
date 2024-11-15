<script setup>
import rodeotrip_thumbnail from '@/assets/projects/rodeotrip/thumbnail.png';
import codedeity_thumbnail from '@/assets/projects/codedeity/thumbnail.png';

const project = [
  {
    image: rodeotrip_thumbnail,
    title: 'Rodeo Trip',
    description:
      'This system simplifies ticket booking, cancellations, and route inquiries, providing a quick and efficient way to secure reservations.',
  },

  {
    image: codedeity_thumbnail,
    title: 'Code Deity',
    description:
      'Adventure game where players input commands, learning basic programming concepts while exploring various possibilities.',
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
      <a
        href=""
        class="mt-2 text-[1rem] font-montserrat font-semibold underline"
        >Explore</a
      >
    </div>
  </div>
</template>
