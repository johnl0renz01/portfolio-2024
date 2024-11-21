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

<style scoped>
.blur_img {
  filter: blur(12.5px);
}
</style>

<template>
  <div class="">
    <div class="style-1 whitespace-nowrap overflow-x-scroll pb-10">
      <div class="grid w-full">
        <div class="">
          <div
            v-for="item in state.walkthrough.items"
            class="inline-block h-full xs:max-w-[17rem] lg:max-w-[21rem] overflow-hidden mr-16"
          >
            <div class="relative h-full">
              <div class="absolute z-[1] blur_img w-full h-full">
                <img class="h-full object-cover" :src="item.image" alt="" />
              </div>
              <img
                class="h-full sticky object-contain z-[2]"
                :src="item.image"
              />
            </div>
          </div>
        </div>
        <div class="relative pt-4">
          <div
            v-for="item in state.walkthrough.items"
            class="inline-block w-full xs:max-w-[17rem] lg:max-w-[21rem] mr-16"
          >
            <div
              class="absolute top-4 border-b-2 border-l-[5px] border-white/80 h-[16px]"
            ></div>
            <div class="grid border-t-2 pt-4 border-white/80">
              <h1
                class="xs:text-[0.9rem] lg:text-[1.1rem] xs:py-1 lg:py-2 font-semibold font-montserrat"
              >
                {{ item.title }}
              </h1>
              <p class="whitespace-normal xs:text-[0.85rem] lg:text-[0.95rem]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
