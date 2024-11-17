<script setup>
import { reactive, defineProps } from 'vue';
import { useCycleList } from '@vueuse/core';

const props = defineProps({
  album: [],
});

const dynamic = reactive({
  imgIndex: 0,
  imgName: props.album.items[0].imageName,
  imgs: [],
});

var empty = [];
for (let i = 0; i < props.album.items.length; i++) {
  empty.push(props.album.items[i].image);
}
dynamic.imgs = empty;

const { state, next, prev, go } = useCycleList(dynamic.imgs);

const previousImage = () => {
  prev();
  if (dynamic.imgIndex == 0) {
    dynamic.imgIndex = dynamic.imgs.length - 1;
  } else {
    dynamic.imgIndex--;
  }

  dynamic.imgName = props.album.items[dynamic.imgIndex].imageName;
};

const nextImage = () => {
  next();
  if (dynamic.imgIndex == dynamic.imgs.length - 1) {
    dynamic.imgIndex = 0;
  } else {
    dynamic.imgIndex++;
  }
  dynamic.imgName = props.album.items[dynamic.imgIndex].imageName;
};

const goToImage = index => {
  go(index);
  dynamic.imgIndex = index;
  dynamic.imgName = props.album.items[index].imageName;
};

document.onkeydown = function (e) {
  switch (e.key) {
    case 'ArrowLeft':
      previousImage();
      break;
    case 'ArrowRight':
      nextImage();
      break;
    case 'Escape':
      $emit('close');
      break;
  }
};
</script>

<template>
  <Transition name="modal" class="no-doc-scroll">
    <div
      class="fixed z-[100] top-0 left-0 w-full h-full bg-black flex transition-opacity ease-linear duration-200"
    >
      <div
        class="min-h-screen max-h-screen text-center flex flex-col gap-y-2 w-full mx-[20rem] mt-6 overflow-hidden p-4 transition ease-linear shadow-[0_2px_8px_0px_rgba(0,0,0,0.3)]"
      >
        <div
          class="relative flex justify-center items-center font-montserrat text-white text-[1.5rem] font-bold"
        >
          <div>
            {{ props.album.title }}
          </div>
          <div class="absolute right-0 top-0">
            <button
              class="font-jura text-white text-3xl font-normal w-8 h-8 text-right"
              @click="$emit('close')"
            >
              &times;
            </button>
          </div>
        </div>

        <div class="">
          <div class="relative bg-gray-500 text-white">
            <button
              @click="previousImage"
              class="absolute top-0 bottom-0 left-0 block bg-black/40 h-full text-[3rem] pl-2 pr-3 font-jura font-thin opacity-[0.5] active:scale-100 hover:opacity-[1]"
            >
              <span class="flex flex-row items-center"><</span>
            </button>
            <img class="h-[40rem] w-full object-cover" :src="state" alt="" />
            <button
              @click="nextImage"
              class="absolute top-0 bottom-0 right-0 block bg-black/40 h-full text-[3rem] pl-3 pr-2 font-jura font-thin opacity-[0.5] active:scale-100 hover:opacity-[1] z-[9999]"
            >
              <span class="flex flex-row items-center h-full">></span>
            </button>
          </div>

          <!-- <div v-for="(item, index) in state" :key="item.id">
            <img v-if="index == dynamic.imgIndex" :src="[item]" />
          </div>-->

          <div class="flex items-center mt-2 mb-2">
            <div class="grow mr-2 border-b-2 border-white"></div>
            <h1 class="text-xl text-white">{{ dynamic.imgName }}</h1>
            <div class="grow ml-2 border-b-2 border-white"></div>
          </div>
        </div>
        <div class="whitespace-nowrap overflow-hidden text-white">
          <div
            v-for="(item, index) in props.album.items"
            :key="item.id"
            class="inline-block"
          >
            <img
              @click="goToImage(index)"
              :class="[
                'h-[5rem] p-1.5 cursor-pointer transition duration-50',
                index == dynamic.imgIndex
                  ? ' border-[1px] border-white '
                  : 'border-b-[1px] border-b-white/0 hover:border-b-white',
              ]"
              :src="[item.image]"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
