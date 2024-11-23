<script setup>
import dataSkills from '@/data/skills.js';

const skills = dataSkills;

const bgColor = '#206873';
</script>

<style scoped>
.bg {
  background: rgb(7, 44, 51);
  background: linear-gradient(
    180deg,
    rgba(7, 44, 51, 1) 0%,
    rgba(7, 44, 51, 1) 70%,
    rgba(0, 19, 23, 1) 100%
  );
}

.bgColor {
  background: v-bind(bgColor);
}
</style>

<template>
  <section
    id="skills"
    class="flex flex-col min-h-screen bg-transparent text-white xs:px-6 sm:px-16 xl:px-[23rem] py-10 pb-20"
  >
    <div class="mb-10 relative w-full text-center">
      <div
        class="inline-block px-4 py-2 bg-normalshade font-montserrat text-white text-2xl font-bold"
      >
        Skills
      </div>
    </div>
    <div
      class="font-montserrat mb-6 text-[1.2rem] font-bold overflow-hidden text-center"
      v-for="skill in skills"
      :key="skill.id"
    >
      <div class="mb-8">
        <h1 class="mb-6 xs:text-[1.75rem]">
          {{ skill.type }}
        </h1>
        <div
          class="flex flex-wrap justify-center w-full h-full gap-x-0 xs:gap-y-4 lg:gap-y-16 xs:scale-90 lg:scale-100"
        >
          <div class="flex" v-for="details in skill.tool" :key="details.id">
            <div :class="['border-b-[0.5rem] ' + details.border]">
              <v-icon :name="[details.img]" scale="5" :fill="[details.fill]" />
              <p
                :class="[
                  details.color,
                  details.name == 'phpMyAdmin' ? ' mt-1' : 'mt-0 ',
                  'text-[1rem]',
                ]"
              >
                {{ details.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
