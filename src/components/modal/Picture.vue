<script setup>
import router from '@/router';
import { reactive, defineProps, onMounted } from 'vue';
import { useCycleList } from '@vueuse/core';

const props = defineProps({
  show: Boolean,
  picture: String,
  padding: String,
  link: '',
});
</script>

<template>
  <Transition name="modal" @keyup.esc="$emit('close')">
    <div
      v-if="show"
      class="select-none fixed z-[100] top-0 left-0 right-0 h-full bg-black flex transition-opacity ease-linear duration-150"
    >
      <div :class="['mx-auto ' + props.padding]">
        <div class="relative flex justify-center items-center"></div>
        <div class="flex items-center h-full">
          <div class="relative">
            <img
              @click="$emit('close')"
              :src="props.picture"
              class="cursor-pointer"
              alt=""
            />
            <div class="absolute right-0 xs:-top-10 sm:-top-9 lg:-top-10">
              <button
                class="font-jura text-white xs:text-[2.25rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1px] font-normal w-10 h-10 text-right"
                @click="$emit('close')"
              >
                &times;
              </button>
            </div>
            <div
              v-if="props.link != ''"
              class="text-white absolute z-[10] lg:left-0 -top-8 cursor-pointer"
            >
              <a :href="props.link" target="_blank"
                ><span class="underline mr-1">Source Code</span>
                <v-icon name="md-openinnew" scale="0.8"></v-icon
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>
