<script setup>
import { reactive, defineProps, onMounted } from 'vue';

import fisherman from '@/assets/parallax/fisherman.png';
import sky from '@/assets/parallax/sky2.png';
import mountains from '@/assets/parallax/mountains.png';
import ocean from '@/assets/parallax/oceanplain.png';
import fish_1 from '@/assets/parallax/fish1.png';
import fish_2 from '@/assets/parallax/fish2.png';
import fish_3 from '@/assets/parallax/fish3.png';
import fish_4 from '@/assets/parallax/fish4.png';
import corals_1 from '@/assets/parallax/corals1.png';
import corals_2 from '@/assets/parallax/corals2.png';
import corals_3 from '@/assets/parallax/corals3.png';
import corals_4 from '@/assets/parallax/corals4.png';

onMounted(() => {
  let sky = document.getElementById('sky');
  let fisherman = document.getElementById('fisherman');
  let mountains = document.getElementById('mountains');

  let corals1 = document.getElementById('corals1');
  let corals2 = document.getElementById('corals2');
  let corals3 = document.getElementById('corals3');
  let corals4 = document.getElementById('corals4');

  let text2 = document.getElementById('text2');
  let fish1 = document.getElementById('fish1');
  let fish2 = document.getElementById('fish2');
  let fish3 = document.getElementById('fish3');
  let fish4 = document.getElementById('fish4');

  sky.style.marginLeft = 0 + 'px';

  fisherman.style.top = -100 + 'px';
  fisherman.style.scale = 0.5;

  mountains.style.bottom = -50 + 'px';
  mountains.style.scale = 1;

  text2.style.bottom = -500 + 'px';
  corals1.style.bottom = 50 + 'px';
  corals2.style.bottom = -500 + 'px';
  corals3.style.bottom = -1100 + 'px';
  corals4.style.bottom = -2550 + 'px';

  fish1.style.right = -600 + 'px';
  fish2.style.left = -300 + 'px';
  fish3.style.left = -800 + 'px';
  fish4.style.right = -300 + 'px';

  window.addEventListener('scroll', function () {
    let value = window.scrollY;

    sky.style.marginLeft = 0 - value * 10 + 'px';

    fisherman.style.top = -100 + value * 0.02 + 'px';
    fisherman.style.scale = 0.5 + value * 0.00075;

    mountains.style.bottom = -50 - value * 0.05 + 'px';
    mountains.style.scale = 1 + value * 0.00005;

    text2.style.bottom = -500 + value * 1 + 'px';

    corals1.style.bottom = 50 + value * 0.1 + 'px';
    corals2.style.bottom = -500 + value * 0.35 + 'px';
    corals3.style.bottom = -1100 + value * 0.85 + 'px';
    corals4.style.bottom = -2550 + value * 1.15 + 'px';

    fish1.style.right = -600 + value * 1 + 'px';
    fish2.style.left = -300 + value * 0.4 + 'px';
    fish3.style.left = -800 + value * 1 + 'px';
    fish4.style.right = -300 + value * 0.3 + 'px';
  });
});

/**
 *  <h1 class="text-[4rem] leading-[4rem] font-kanit uppercase font-bold">
          Super Long Text&nbsp;Here<br />
          Another Text...
        </h1>
        <h6 class="text-[1.5rem]">Medium super long subtext here...</h6>
        
 */
</script>

<style scoped>
.bg-color {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(0, 168, 171, 1) 0%,
    rgba(0, 168, 171, 1) 90%,
    rgba(0, 70, 70, 1) 91%,
    rgba(0, 70, 70, 1) 100%
  );
}
</style>

<template>
  <div
    :class="['z-0 relative w-full sm:px-6 lg:px-12  pb-24 text-darkshade  ']"
  >
    <img
      id="sky"
      class="absolute scale-x-[10] h-full w-full object-cover"
      :src="sky"
    />

    <div
      class="relative min-h-[calc(100vh-20vh)] max-h-[calc(100vh-10vh)] flex items-center justify-center"
    >
      <div class="text-center">
        <h1
          class="text-[4rem] leading-[4rem] font-kanit uppercase font-semibold"
        >
          I'M John Lorenz Dela Cruz
        </h1>
        <h6 class="text-[1.5rem] mt-2 font-bold">welcome to my portfolio :)</h6>
        <div class="mt-3">
          <a href="#center">
            <button class="bg-normalshade px-3 py-2 text-white">Explore</button>
          </a>
        </div>
      </div>
    </div>

    <img
      id="mountains"
      class="absolute m-auto right-0 left-0"
      :src="mountains"
    />
  </div>
  <div
    id="main"
    class="bg-color relative w-full h-full flex justify-center items-center -mt-10 pb-[10rem]"
  >
    <img
      id="fisherman"
      class="absolute m-auto right-0 left-5 h-[200px] z-[1]"
      :src="fisherman"
    />
    <img id="ocean" :src="ocean" />

    <img id="corals1" :src="corals_1" class="object-cover absolute" />

    <img id="corals2" :src="corals_2" class="object-cover absolute" />
    <div id="text2" class="text-center text-white absolute z-10">
      <h1 class="text-[4rem] leading-[4rem] font-kanit uppercase font-bold">
        "Rise with the Tide,<br />
        Endure waves"
      </h1>
      <h6 class="text-[1.5rem] font-bold">
        Never fear the storm, embrace the challenge...
      </h6>
    </div>
    <img id="corals3" :src="corals_3" class="object-cover absolute" />
    <div id="center" class="absolute top-[14rem]"></div>
    <img id="fish1" :src="fish_1" class="object-cover absolute top-[17.5rem]" />
    <img id="fish2" :src="fish_2" class="object-cover absolute top-[20rem]" />
    <img
      id="fish3"
      :src="fish_3"
      class="object-cover absolute bottom-[20rem]"
    />
    <img
      id="fish4"
      :src="fish_4"
      class="object-cover absolute bottom-[20rem]"
    />
    <img id="corals4" :src="corals_4" class="object-cover absolute" />
  </div>
</template>
