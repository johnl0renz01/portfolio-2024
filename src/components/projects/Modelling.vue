<script setup>
import dining_thumbnail from '@/assets/models/dining/thumbnail.png';
import chess_thumbnail from '@/assets/models/chess/thumbnail.png';
import tower_thumbnail from '@/assets/models/tower/thumbnail.png';
import landscape_thumbnail from '@/assets/models/landscape/thumbnail.png';

const project = [
  {
    image: dining_thumbnail,
    title: 'Castle Dining Set',
  },

  {
    image: chess_thumbnail,
    title: 'Wood Chess Set',
  },

  {
    image: tower_thumbnail,
    title: 'Minecraft Tower',
  },

  {
    image: landscape_thumbnail,
    title: 'Landscape',
  },
];
</script>

<template>
  <div class="lg:grid lg:grid-cols-2 h-full gap-x-10 gap-y-10 py-20">
    <div v-for="(item, index) in project" :key="item.id" class="relative">
      <div class="">
        <img class="h-full" :src="item.image" />
        <div class="mt-2 flex justify-between items-center">
          <h1 class="text-[1.2rem] font-bold font-montserrat">
            {{ item.title }}
          </h1>
          <a href="" class="text-[0.9rem] font-montserrat underline">Album</a>
        </div>
      </div>
    </div>
  </div>
</template>
