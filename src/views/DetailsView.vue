<script setup>
import pia_thumbnail from '@/assets/projects/pia/thumbnail.png';
import adaptive_thumbnail from '@/assets/projects/adaptive/thumbnail.png';
import turo_thumbnail from '@/assets/projects/turo/thumbnail.png';

import adaptive_landing from '@/assets/projects/adaptive/landing.png';

import WalkthroughDesktop from '@/components/WalkthroughDesktop.vue';
import WalkthroughMobile from '@/components/WalkthroughMobile.vue';

import { reactive, defineProps, onMounted } from 'vue';

import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = routePath => {
  const route = useRoute();
  return route.path === routePath;
};

const state = reactive({
  walkthrough: false,
});

const toggleWalkthrough = () => {
  state.walkthrough = !state.walkthrough;
};

const scrollDown = () => {
  var scrollDiv = document.getElementById('walkthrough').offsetTop - 30;
  window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
};

const project = [
  {
    image: adaptive_thumbnail,
    title: 'Personal Instructive Agent',
    description:
      "The website enhances algebra learning by an emotional agent that responds to students' progress with expressions like happiness or sadness. The website enhances algebra learning by an emotional agent that responds to students' progress with expressions like happiness or sadness. ",
  },
];
</script>

<style scoped>
.bg {
  background: rgb(0, 56, 69);
  background: linear-gradient(180deg, rgb(27, 27, 27) 0%, rgb(10, 10, 10) 100%);
}
</style>

<!--
NAVY COLOR

<style scoped>
.bg {
  background: rgb(0, 56, 69);
  background: linear-gradient(
    180deg,
    rgb(68, 68, 68) 0%,
    rgba(0, 18, 22, 1) 100%
  );
}
</style>
-->

<template>
  <section
    id="projects"
    class="flex flex-col bg min-h-screen text-white sm:px-6 lg:px-[25rem] py-20 pb-[10rem]"
  >
    <div class="">
      <h1 class="text-[2rem] font-bold font-montserrat">Adaptive Sensei</h1>
    </div>
    <div
      v-for="(item, index) in project"
      :key="item.id"
      :class="[
        'lg:grid lg:grid-cols-3 h-full gap-y-10  py-4',
        index == project.length - 1 ? '' : 'border-b-white border-b-[1px]',
      ]"
    >
      <div class="relative col-span-2 pr-20">
        <img class="h-full object-cover" :src="item.image" />
      </div>
      <div class="relative flex flex-col gap-y-3 pl-20">
        <h1 class="text-[1.3rem] font-bold font-montserrat">Objective</h1>
        <p class="">
          {{ item.description }}
        </p>
      </div>
      <div class="col-span-2 pr-20 pb-10">
        <h1 class="text-[1.3rem] mb-3 font-semibold font-montserrat">
          Tech Stack
        </h1>
        <div class="flex flex-wrap gap-x-4 gap-y-4">
          <div class="inline-block py-1 px-3 bg-gray-700">Web Development</div>
          <div class="inline-block py-1 px-3 bg-gray-700">Web Development</div>
          <div class="inline-block py-1 px-3 bg-gray-700">Web Development</div>
          <div class="inline-block py-1 px-3 bg-gray-700">Development</div>
        </div>
      </div>
      <div class="pl-20">
        <h1 class="text-[1.3rem] mb-3 font-semibold font-montserrat">
          Website Link
        </h1>
        <a href="https://www.pia-sfe.live" target="_blank"
          ><button
            class="w-full text-[0.95rem] text-left py-1 px-3 bg-[#86cc16c0] font-montserrat"
          >
            https://www.pia-sfe.live
          </button>
        </a>

        <div
          class="mt-3 w-full text-[0.95rem] text-left py-1 px-3 bg-gray-700 font-montserrat"
        >
          username: guest
        </div>
        <div
          class="mt-1 w-full text-[0.95rem] text-left py-1 px-3 bg-gray-700 font-montserrat"
        >
          password: 123456
        </div>
      </div>
    </div>
    <div id="walkthrough">
      <a href="#walkthrough" @click.prevent="scrollDown">
        <button
          @click="toggleWalkthrough"
          class="w-full text-[1.5rem] font-bold font-montserrat mb-4 active:scale-100"
        >
          <div class="flex items-center">
            <h1>Walkthrough</h1>

            <div
              v-if="!state.walkthrough"
              class="grow mx-2 border-b-2 border-white"
            ></div>

            <v-icon
              v-if="!state.walkthrough"
              name="fa-plus"
              scale="1"
              fill="white"
            />
          </div>
        </button>
      </a>
      <div :class="[state.walkthrough ? 'visible' : 'hidden']">
        <WalkthroughDesktop />
      </div>
    </div>
  </section>
</template>
