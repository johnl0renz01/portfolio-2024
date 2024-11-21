<script setup>
import About from '@/views/AboutView.vue';
import Landing from '@/components/Landing.vue';
import Education from '@/components/Education.vue';
import Experience from '@/components/Experience.vue';
import Projects from '@/components/Projects.vue';
import Skills from '@/components/Skills.vue';
</script>

<style scoped>
.bg {
  background: rgb(0, 85, 105);
  background: linear-gradient(180deg, rgb(66, 66, 66) 0%, rgb(14, 14, 14) 100%);
}

.bg2 {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(1, 64, 79, 1) 100%
  );
}
</style>

<template>
  <div class="bg">
    <Landing />
    <Experience />
    <Education />

    <Skills />
    <Projects />
  </div>
</template>
