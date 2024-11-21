<script setup>
import WebDevelopment from './projects/WebDevelopment.vue';
import SystemDevelopment from './projects/SystemDevelopment.vue';
import WebDesign from './projects/WebDesign.vue';
import Modelling from './projects/Modelling.vue';

import { reactive, defineProps, onMounted } from 'vue';

const state = reactive({
  projectType: '',
  previous: '',
});

const scrollDown = () => {
  //@click.prevent="scrollDown" removed from HTML

  var scrollDiv = document.getElementById('projects').offsetTop;
  window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
};

const toggleProject = value => {
  state.projectType = value;
  if (state.previous != state.projectType) {
    state.previous = state.projectType;
  } else {
    state.projectType = '';
    state.previous = '';
  }
};
</script>

<template>
  <section
    id="projects"
    class="flex flex-col bg-transparent text-white lg:px-[5rem] xl:px-[23rem] py-10 pb-[10rem]"
  >
    <div class="mb-10 text-center">
      <p
        class="inline-block px-4 py-2 bg-normalshade font-montserrat text-white text-2xl font-bold"
      >
        Projects
      </p>
    </div>
    <div class="xs:px-16 sm:px-52">
      <div
        class="xs:grid xs:grid-cols-2 sm:flex xs:justify-center lg:justify-between gap-x-2 gap-y-3 font-montserrat xs:text-[0.8rem] sm:text-[1rem] lg:text-[1.1rem]"
      >
        <a href="#projects">
          <button
            @click="toggleProject('web_development')"
            :class="[
              'py-1 px-3 transition duration-50 h-full w-full',
              state.projectType == 'web_development'
                ? 'bg-gray-400'
                : 'bg-gray-700 hover:bg-gray-500',
            ]"
          >
            Web Development
          </button>
        </a>
        <a href="#projects">
          <button
            @click="toggleProject('system_development')"
            :class="[
              'py-1 px-3 transition duration-50 h-full w-full',
              state.projectType == 'system_development'
                ? 'bg-gray-400'
                : 'bg-gray-700 hover:bg-gray-500',
            ]"
          >
            System Development
          </button>
        </a>
        <a href="#projects">
          <button
            @click="toggleProject('web_design')"
            :class="[
              'py-1 px-3 transition duration-50 h-full w-full',
              state.projectType == 'web_design'
                ? 'bg-gray-400'
                : 'bg-gray-700 hover:bg-gray-500',
            ]"
          >
            Web Design
          </button>
        </a>
        <a href="#projects">
          <button
            @click="toggleProject('modelling')"
            :class="[
              'py-1 px-3 transition duration-50 h-full w-full',
              state.projectType == 'modelling'
                ? 'bg-gray-400'
                : 'bg-gray-700 hover:bg-gray-500',
            ]"
          >
            3D Modelling
          </button></a
        >
      </div>
      <WebDevelopment v-if="state.projectType == 'web_development'" />
      <SystemDevelopment v-if="state.projectType == 'system_development'" />
      <WebDesign v-if="state.projectType == 'web_design'" />
      <div :class="[state.projectType == 'modelling' ? 'visible' : 'hidden']   ">
        <Modelling />
      </div>
    </div>
  </section>
</template>
