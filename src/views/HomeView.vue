<script setup>
import Navbar from '@/components/Navbar.vue';
import Landing from '@/components/Landing.vue';
import Timeline from '@/components/Timeline.vue';
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects.vue';
import Footer from '@/components/Footer.vue';

import router from '@/router';

import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'Portfolio - John Lorenz Dela Cruz';
  router.push({ path: '/' });
});

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}
</script>

<style scoped>
.bg {
  background: rgb(0, 56, 69);
  background: linear-gradient(
    180deg,
    rgba(0, 70, 70, 1) 0%,
    rgba(1, 20, 26, 1) 100%
  );
}

.bg2 {
  background: linear-gradient(
    180deg,
    rgba(1, 20, 26, 1) 0%,
    rgb(0, 8, 12) 50%,
    rgb(0, 8, 12) 100%
  );
}
</style>

<template>
  <div class="relative select-none">
    <div class="z-[1]">
      <Landing />
      <Navbar />
    </div>
    <div class="absolute left-0 right-0 z-[20]">
      <div class="relative bg">
        <Timeline />
        <Skills />
      </div>
      <div class="bg2">
        <Projects />
        <Footer />
      </div>
    </div>
  </div>
</template>
