<script setup>
import pia_thumbnail from '@/assets/projects/pia/thumbnail.png';
import adaptive_thumbnail from '@/assets/projects/adaptive/thumbnail.png';
import turo_thumbnail from '@/assets/projects/turo/thumbnail.png';

import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = routePath => {
  const route = useRoute();
  return route.path === routePath;
};

const project = [
  {
    image: pia_thumbnail,
    title: 'Personal Instructive Agent',
    description:
      "The website enhances algebra learning by an emotional agent that responds to students' progress with expressions like happiness or sadness. The website enhances algebra learning by an emotional agent that responds to students' progress with expressions like happiness or sadness. The website enhances algebra learning by an emotional agent that responds to students' progress with expressions like happiness or sadness.",
  },
];
</script>

<style scoped>
.bg {
  background: rgb(0, 56, 69);
  background: linear-gradient(
    180deg,
    rgba(0, 56, 69, 1) 0%,
    rgba(0, 18, 22, 1) 100%
  );
}
</style>

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
        'lg:grid lg:grid-cols-3 h-full gap-x-20 gap-y-16  py-4',
        index == project.length - 1 ? '' : 'border-b-white border-b-[1px]',
      ]"
    >
      <div class="relative col-span-2">
        <img class="h-full object-cover" :src="item.image" />
      </div>
      <div class="relative flex flex-col gap-y-3">
        <h1 class="text-[1.5rem] font-bold font-montserrat">Objective</h1>
        <p class="">
          {{ item.description }}
        </p>
      </div>
      <div class="col-span-2">
        <h1 class="text-[1.4rem] mb-3 font-semibold font-montserrat">
          Tech Stack
        </h1>
        <div class="flex flex-wrap gap-x-6 gap-y-4">
          <div class="inline-block py-1 px-3 bg-gray-700">Web Development</div>
          <div class="inline-block py-1 px-3 bg-gray-700">Web Development</div>
          <div class="inline-block py-1 px-3 bg-gray-700">Web Development</div>
          <div class="inline-block py-1 px-3 bg-gray-700">Development</div>
        </div>
      </div>
      <div class="">
        <h1 class="text-[1.4rem] mb-3 font-semibold font-montserrat">
          Website Link
        </h1>
        <a href="https://www.pia-sfe.live" target="_blank"
          ><button
            class="w-full text-[0.95rem] text-left py-1 px-3 bg-[#86cc16c0] font-montserrat"
          >
            https://www.pia-sfe.live
          </button>
        </a>
      </div>
      <div class="col-span-2">
        <h1 class="text-[1.4rem] mb-3 font-semibold font-montserrat">
          Walkthrough
        </h1>
        <div class="flex flex-wrap gap-x-6 gap-y-4">
          <div class="inline-block py-1 px-3 bg-gray-700">Web Development</div>
          <div class="inline-block py-1 px-3 bg-gray-700">Web Development</div>
          <div class="inline-block py-1 px-3 bg-gray-700">Web Development</div>
          <div class="inline-block py-1 px-3 bg-gray-700">Development</div>
        </div>
      </div>
      <div class="">
        <h1 class="text-[1.4rem] mb-3 font-semibold font-montserrat">
          Website Link
        </h1>
        <a href="https://www.pia-sfe.live" target="_blank"
          ><button
            class="w-full text-[0.95rem] text-left py-1 px-3 bg-[#86cc16c0] font-montserrat"
          >
            https://www.pia-sfe.live
          </button>
        </a>
      </div>
    </div>
  </section>
</template>
