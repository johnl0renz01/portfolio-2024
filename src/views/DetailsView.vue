<script setup>
import Desktop from '@/components/walkthrough/Desktop.vue';
import Mobile from '@/components/walkthrough/Mobile.vue';

import { reactive, defineProps, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';

import dataProjects from '@/data/projects.js';

const projects = dataProjects;

const route = useRoute();

const projectName = route.params.name;

const state = reactive({
  walkthrough: false,
  project: [],
});

const toggleWalkthrough = () => {
  state.walkthrough = !state.walkthrough;
};

const scrollDown = () => {
  var scrollDiv = document.getElementById('walkthrough').offsetTop - 30;
  window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
};

onMounted(async () => {
  for (let i = 0; i < projects.length; i++) {
    if (projectName == projects[i].name) {
      state.project = projects[i];
      break;
    }
  }

  document.title = 'Project - ' + state.project.title;

  const element = document.getElementById('details');
  element.style.background =
    'linear-gradient(200deg, ' +
    state.project.bgColor +
    ' 0%, rgb(0, 0, 0) 100%)';
});
</script>

<template>
  <section
    id="details"
    class="flex flex-col min-h-screen text-white xs:px-10 sm:px-16 lg:px-24 xl:px-[18rem] xs:py-10 lg:py-20 pb-[10rem]"
  >
    <div class="">
      <h1 class="xs:text-[1.5rem] lg:text-[2rem] font-bold font-montserrat">
        {{ state.project.title }}
      </h1>
      <div class="xs:text-sm lg:text-base mt-1">{{ state.project.date }}</div>
    </div>
    <div class="lg:grid lg:grid-cols-3 h-full gap-y-10 py-4">
      <div class="relative lg:col-span-2 lg:pr-10 xl:pr-20">
        <img class="h-full w-full object-cover" :src="state.project.image" />
      </div>
      <div
        class="relative flex flex-col gap-y-3 lg:pl-10 xl:pl-20 xs:mt-10 lg:mt-0"
      >
        <h1 class="xs:text-[1.1rem] lg:text-[1.3rem] font-bold font-montserrat">
          Objective
        </h1>
        <p class="xs:text-sm lg:text-base whitespace-pre-wrap">
          {{ state.project.objective }}
        </p>
      </div>

      <div class="col-span-2 lg:pr-10 xl:pr-20 pb-10 xs:mt-10 lg:mt-0">
        <h1
          class="xs:text-[1.1rem] lg:text-[1.3rem] mb-3 font-semibold font-montserrat"
        >
          Tech Stack
        </h1>
        <div class="flex flex-wrap gap-x-2 gap-y-2">
          <div
            v-for="item in state.project.techstack"
            :key="item.id"
            class="xs:text-sm lg:text-base inline-block py-1 px-3 bg-gray-700"
          >
            {{ item.tech }}
          </div>
        </div>
      </div>
      <div class="lg:pl-10 xl:pl-20">
        <h1
          class="xs:text-[1.1rem] lg:text-[1.3rem] mb-3 font-semibold font-montserrat"
        >
          {{ state.project.type }} Link
        </h1>
        <a
          v-if="state.project.link != ''"
          :href="state.project.link"
          target="_blank"
          ><button
            :class="[
              'w-full xs:text-[0.8rem] lg:text-[0.95rem] text-left py-1 px-3  font-montserrat truncate bg-opacity-100 hover:bg-opacity-80 ' +
                state.project.color,
            ]"
          >
            {{ state.project.link }}
          </button>
        </a>
        <div
          v-else
          class="mt-1 w-full xs:text-[0.8rem] lg:text-[0.95rem] text-left py-1 px-3 text-gray-400 bg-gray-700 font-montserrat"
        >
          Not Available
        </div>
        <div v-if="state.project.link != ''">
          <div v-if="state.project.username != ''">
            <div
              class="mt-1 w-full xs:text-[0.8rem] lg:text-[0.95rem] text-left py-1 px-3 bg-gray-700 font-montserrat"
            >
              username: {{ state.project.username }}
            </div>
            <div
              class="mt-1 w-full xs:text-[0.8rem] lg:text-[0.95rem] text-left py-1 px-3 bg-gray-700 font-montserrat"
            >
              password: {{ state.project.password }}
            </div>
          </div>
          <div
            v-else
            class="mt-1 w-full xs:text-[0.8rem] lg:text-[0.95rem] text-left py-1 px-3 text-gray-400 bg-gray-700 font-montserrat"
          >
            {{ state.project.linkType }} Mode
          </div>
        </div>
      </div>
    </div>
    <div id="walkthrough" class="xs:mt-10 lg:mt-0">
      <a href="#walkthrough" @click.prevent="scrollDown">
        <button
          @click="toggleWalkthrough"
          class="w-full xs:text-[1.3rem] lg:text-[1.5rem] font-bold font-montserrat mb-4 active:scale-100"
        >
          <div class="flex items-center">
            <h1>Walkthrough</h1>

            <div
              v-if="!state.walkthrough"
              class="grow mx-2 border-b-2 border-white"
            ></div>

            <v-icon
              v-if="!state.walkthrough"
              class="xs:scale-80 sm:scale-90 lg:scale-100"
              name="fa-plus"
              scale="1"
              fill="white"
            />
          </div>
        </button>
      </a>
      <div :class="[state.walkthrough ? 'visible' : 'hidden']">
        <Desktop
          v-if="state.project.walkthrough == 'desktop'"
          :projectName="projectName"
        />
        <Mobile
          v-if="state.project.walkthrough == 'mobile'"
          :projectName="projectName"
        />
      </div>
    </div>
  </section>
</template>
