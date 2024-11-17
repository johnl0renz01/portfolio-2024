<script setup>
import Navbar from '@/components/Navbar.vue';
import About from '@/views/AboutView.vue';
import Landing from '@/components/Landing.vue';
import Education from '@/components/Education.vue';
import Experience from '@/components/Experience.vue';
import Projects from '@/components/Projects.vue';
import Skills from '@/components/Skills.vue';
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

/**
.bg {
  background: rgb(0, 56, 69);
  background: linear-gradient(180deg, rgb(25, 25, 25) 0%, rgb(7, 7, 7) 100%);
}


.bg {
  background: rgb(0, 56, 69);
  background: linear-gradient(
    180deg,
    rgba(0, 56, 69, 1) 0%,
    rgba(0, 18, 22, 1) 100%
  );
}

*/
</style>

<template>
  <Navbar />
  <Landing />
  <div class="bg">
    <Experience />
    <Education />

    <Skills />
    <Projects />
  </div>
</template>
