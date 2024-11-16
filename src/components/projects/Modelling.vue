<script setup>
import data from '@/data/projects/modelling.js';

const project = data;
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
