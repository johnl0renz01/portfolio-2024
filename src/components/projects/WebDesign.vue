<script setup>
import data from '@/data/projects/webdesign.js';

const project = data;
</script>

<template>
  <div
    v-for="(item, index) in project"
    :key="item.id"
    :class="[
      'w-full h-full py-10',
      index == project.length - 1 ? '' : 'border-b-white border-b-[1px]',
    ]"
  >
    <div class="flex justify-center gap-x-6 gap-y-16 py-4 flex-wrap">
      <div v-for="(page, indexPage) in item.pages" :key="page.id">
        <div
          :class="[
            'flex items-end',
            indexPage == 0 ? 'justify-between' : 'justify-end',
          ]"
        >
          <h1
            v-if="indexPage == 0"
            class="xs:text-[1.2rem] lg:text-[1.5rem] font-montserrat font-semibold"
          >
            {{ item.title }}
          </h1>
          <h1
            class="xs:text-[0.8rem] lg:text-[1rem] bg-normalshade inline-block xs:px-2 sm:px-3 py-1 font-montserrat"
          >
            {{ page.name }} Page
          </h1>
        </div>

        <a :href="[page.link]" target="_blank"
          ><img class="h-full object-cover" :src="page.image"
        /></a>
      </div>
    </div>
  </div>
</template>
