<script setup>
import { reactive, defineProps, onMounted } from 'vue';
import dataWalkthroughDesktop from '@/data/walkthrough/desktop.js';

const dataDesktop = dataWalkthroughDesktop;

const props = defineProps({
  projectName: String,
});

const state = reactive({
  walkthrough: [],
});

onMounted(async () => {
  for (let i = 0; i < dataDesktop.length; i++) {
    if (props.projectName == dataDesktop[i].name) {
      state.walkthrough = dataDesktop[i];
      break;
    }
  }
});
</script>

<template>
  <div class="style-1 max-h-[calc(100vh-20vh)] overflow-y-auto">
    <div v-for="item in state.walkthrough.items" class="relative mb-16">
      <div class="absolute left-0 right-0 top-0 lg:grid lg:grid-cols-3 z-10">
        <div class="col-span-2">
          <div class="border-r-[30px] border-r-white/80 h-[5px]">&nbsp;</div>
        </div>

        <div class="border-l-[30px] border-l-white/80 h-[5px]">&nbsp;</div>
      </div>
      <div class="lg:grid lg:grid-cols-3 h-full">
        <div class="col-span-2 pr-20 border-r-[1px] border-r-gray-100/40">
          <div class="relative col-span-2">
            <img class="object-cover" :src="item.image" />
          </div>
        </div>
        <div class="pl-20 pr-20 border-l-[1px] border-l-gray-100/40">
          <h1
            class="text-[1.2rem] mb-3 font-semibold font-montserrat leading-[0.9rem]"
          >
            {{ item.title }}
          </h1>
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>
