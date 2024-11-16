<script setup>
import { reactive, defineProps, onMounted } from 'vue';
import dataWalkthroughMobile from '@/data/walkthrough/mobile.js';

const dataMobile = dataWalkthroughMobile;

const props = defineProps({
  projectName: String,
});

const state = reactive({
  walkthrough: [],
});

onMounted(async () => {
  for (let i = 0; i < dataMobile.length; i++) {
    if (props.projectName == dataMobile[i].name) {
      state.walkthrough = dataMobile[i];
      break;
    }
  }
});
</script>

<template>
  <div class="max-h-screen overflow-y-auto">
    <div class="relative">
      <div class="absolute left-0 right-0 bottom-[6rem] z-10">
        <div class="border-t-[2px] border-t-white/80">&nbsp;</div>
      </div>
      <div></div>
      <div class="style-1 whitespace-nowrap overflow-x-scroll pb-10">
        <div v-for="item in state.walkthrough.items" class="inline-block mr-16">
          <div class="relative max-w-[21rem]">
            <img class="h-full object-contain" :src="item.image" />
            <div class="pt-10 whitespace-normal">
              <div class="absolute left-0 right-0 bottom-[4rem] z-10">
                <div class="border-l-[5px] border-l-white/80 h-[16px]"></div>
              </div>
              <h1 class="text-[1.1rem] py-2 font-semibold font-montserrat">
                {{ item.title }}
              </h1>
              <p class="text-[0.95rem]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
