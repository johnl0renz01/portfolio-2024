<script setup>
import { reactive, defineProps, onMounted } from 'vue';
import dataWalkthroughDesktop from '@/data/walkthrough/desktop.js';
import Picture from '@/components/modal/Picture.vue';

const dataDesktop = dataWalkthroughDesktop;

const props = defineProps({
  projectName: String,
});

const state = reactive({
  walkthrough: [],
  picture: '',
  showModal: false,
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
          <div class="lg:border-r-[30px] border-white/80 h-[5px]">&nbsp;</div>
        </div>

        <div class="lg:border-l-[30px] border-white/80 h-[5px]">&nbsp;</div>
      </div>
      <div class="lg:grid lg:grid-cols-3 h-full">
        <div
          class="lg:col-span-2 xs:pr-1 lg:pr-20 lg:border-r-[1px] border-gray-100/40"
        >
          <div class="relative col-span-2">
            <div
              class="group flex justify-center text-center relative overflow-hidden cursor-pointer"
              @click="
                state.picture = item.image;
                state.showModal = true;
              "
            >
              <img
                :src="item.image"
                class="h-full object-cover ease-in-out duration-100 group-hover:scale-90"
              />

              <div
                class="absolute w-full h-full opacity-10 hover:bg-white transition-opacity duration-100 group-hover:opacity-10"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="xs:mt-4 sm:mt-5 lg:mt-0 lg:pl-20 lg:pr-20 lg:border-l-[1px] border-gray-100/40"
        >
          <h1
            class="xs:text-[1rem] lg:text-[1.2rem] xs:mb-3 xl:mb-6 font-semibold font-montserrat leading-[0.9rem]"
          >
            {{ item.title }}
          </h1>
          <p class="xs:text-sm lg:text-base">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <Picture
      :picture="state.picture"
      :padding="'xs:px-2 sm:px-10 lg:px-[5rem] xl:px-[10rem]'"
      :link="''"
      :show="state.showModal"
      @close="state.showModal = false"
    >
    </Picture>
  </Teleport>
</template>
