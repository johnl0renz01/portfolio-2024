<script setup>
import { reactive, defineProps, onMounted } from 'vue';

import fisherman from '@/assets/parallax/fisherman.png';
import sky from '@/assets/parallax/sky2.png';
import oceanmountains from '@/assets/parallax/oceanmountains.png';
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
  let fisherman = document.getElementById('fisherman');
  let oceanmountains = document.getElementById('oceanmountains');

  let corals1 = document.getElementById('corals1');
  let corals2 = document.getElementById('corals2');
  let corals3 = document.getElementById('corals3');
  let corals4 = document.getElementById('corals4');

  let text1 = document.getElementById('text1');
  let text2 = document.getElementById('text2');
  let text3 = document.getElementById('text3');

  let fish1 = document.getElementById('fish1');
  let fish2 = document.getElementById('fish2');
  let fish3 = document.getElementById('fish3');
  let fish4 = document.getElementById('fish4');

  setParallax();
  window.addEventListener('resize', setParallax);
  function setParallax() {
    const baseWidth = 1920;
    const currentWidth = window.innerWidth;

    const basis = currentWidth / baseWidth;

    const text1_pos = -275;
    const text2_pos = -400;
    const text3_pos = -300;

    const fish1_speed = basis;
    const fish2_speed = 0.4 * basis;
    const fish3_speed = basis;
    const fish4_speed = 0.3 * basis;

    const fish1_pos = -600 * fish1_speed;
    const fish2_pos = -400 * fish2_speed;
    const fish3_pos = -800 * fish3_speed;
    const fish4_pos = -300 * fish4_speed;

    const corals1_pos = 100;
    const corals2_pos = -450;
    const corals3_pos = -1025;
    const corals4_pos = -2500;

    corals1.style.bottom = corals1_pos + 'px';
    corals2.style.bottom = corals2_pos + 'px';
    corals3.style.bottom = corals3_pos + 'px';
    corals4.style.bottom = corals4_pos + 'px';

    fisherman.style.top = -100 + 'px';
    fisherman.style.scale = 0.5;

    oceanmountains.style.top = 400 + 'px';

    let text1_msg = document.getElementById('text1_msg');
    let text1_container = document.getElementById('text1_container');
    text1_container.style.perspective = '100px';

    const text1_deg = 60;
    text1_msg.style.transform = 'rotateX(' + text1_deg + 'deg)';

    let text2_msg = document.getElementById('text2_msg');
    let text2_container = document.getElementById('text2_container');
    text2_container.style.perspective = '100px';

    const text2_deg = 60;
    text2_msg.style.transform = 'rotateX(' + text2_deg + 'deg)';

    const text1_scale = 0.05;
    const text2_scale = 0.01;

    const text1_opacity = -0.4;
    const text2_opacity = -0.5;
    const text3_opacity = 0;

    text1.style.opacity = text1_opacity;
    text2.style.opacity = text2_opacity;
    text3.style.opacity = text3_opacity;

    text1.style.scale = text1_scale;
    text2.style.scale = text2_scale;

    text1.style.top = text1_pos + 'px';
    text2.style.top = text2_pos + 'px';
    text3.style.top = text3_pos + 'px';

    fish1.style.right = fish1_pos + 'px';
    fish2.style.left = fish2_pos + 'px';
    fish3.style.left = fish3_pos + 'px';
    fish4.style.right = fish4_pos + 'px';
    setSpeed();

    window.removeEventListener('scroll', setSpeed);
    window.addEventListener('scroll', setSpeed);

    function setSpeed() {
      let value = window.scrollY;

      fisherman.style.top = -100 + value * 0.02 + 'px';
      fisherman.style.scale = 0.5 + value * 0.00075;

      oceanmountains.style.top = 400 + value * 0.05 + 'px';

      const text1_deg_speed = 0.09;
      const text1_scale_speed = 0.0015;
      const text1_scale_limit = 1.379;
      const text1_pos_speed = 0.8;
      const text1_pos_limit = 650;

      if (text1_deg - value * text1_deg_speed <= -0) {
        text1.style.opacity = text1_opacity + value * 0.002; //multiplier
        text1_msg.style.transform = 'rotateX(' + 0 + 'deg)';

        if (text1_pos + value * text1_pos_speed >= text1_pos_limit) {
          text1.style.scale = text1_scale_limit - (value - 1155) * 0.005; //1122 limit when to collapse,   0.005 custom multiplier
          text1_msg.style.transform =
            'rotateX(' + (0 - Math.abs(value - 1161) * 0.25) + 'deg)';
        } else if (
          text1_scale + value * text1_scale_speed >= text1_scale_limit &&
          text1_pos + value * text1_pos_speed < text1_pos_limit
        ) {
          text1.style.scale = text1_scale_limit;
        } else {
          text1.style.scale = text1_scale + value * text1_scale_speed;
        }
      } else {
        text1.style.opacity = text1_opacity + value * 0.001; //multiplier
        text1.style.scale = text1_scale + value * text1_scale_speed;
        text1_msg.style.transform =
          'rotateX(' + (text1_deg - value * text1_deg_speed) + 'deg)';
      }

      const text2_deg_speed = 0.075;
      const text2_scale_speed = 0.00125;
      const text2_scale_limit = 1.26;
      const text2_pos_speed = 0.95;
      const text2_pos_limit = 750;

      if (text2_deg - value * text2_deg_speed <= -0) {
        text2.style.opacity = text2_opacity + value * 0.002;
        text2_msg.style.transform = 'rotateX(' + 0 + 'deg)';
        text3.style.opacity = 0;
        if (text2_pos + value * text2_pos_speed >= text2_pos_limit) {
          text2.style.scale = text2_scale_limit - (value - 1205) * 0.0025;
          text2_msg.style.transform =
            'rotateX(' + (0 - Math.abs(value - 1215) * 0.2) + 'deg)';
        } else if (
          text2_scale + value * text2_scale_speed >= text2_scale_limit &&
          text2_pos + value * text2_pos_speed < text2_pos_limit
        ) {
          text2.style.scale = text2_scale_limit;
          text3.style.opacity = 1;
        } else {
          text2.style.scale = text2_scale + value * text2_scale_speed;
        }
      } else {
        text2.style.opacity = text2_opacity + value * 0.001;
        text2.style.scale = text2_scale + value * text2_scale_speed;
        text2_msg.style.transform =
          'rotateX(' + (text2_deg - value * text2_deg_speed) + 'deg)';
      }

      text1.style.top = text1_pos + value * 0.975 + 'px';
      text2.style.top = text2_pos + value * 1 + 'px';
      text3.style.top = text3_pos + value * 1.1 + 'px';

      corals1.style.bottom = corals1_pos + value * 0.1 + 'px';
      corals2.style.bottom = corals2_pos + value * 0.35 + 'px';
      corals3.style.bottom = corals3_pos + value * 0.85 + 'px';
      corals4.style.bottom = corals4_pos + value * 1.15 + 'px';

      fish1.style.right = fish1_pos + value * fish1_speed + 'px';
      fish2.style.left = fish2_pos + value * fish2_speed + 'px';
      fish3.style.left = fish3_pos + value * fish3_speed + 'px';
      fish4.style.right = fish4_pos + value * fish4_speed + 'px';
    }
  }
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

#clouds {
  position: absolute;
  animation: linear infinite;
  animation-name: run;
  animation-duration: 75s;
}
@keyframes run {
  0% {
    left: 0%;
  }

  25% {
    left: 100%;
  }

  75% {
    left: -100%;
  }
  100% {
    left: 0%;
  }
}
</style>

<template>
  <div
    :class="[
      'bg-[#aff1ed] z-0 relative w-full   pb-24 text-darkshade  max-w-[100vw] overflow-hidden',
    ]"
  >
    <div
      class="absolute h-full w-full bg-[url('/src/assets/parallax/sky2.png')]"
    >
      <div id="clouds" class="flex w-full h-full">
        <img class="h-full w-full scale-x-[4] mix-blend-overlay" :src="sky" />
      </div>
    </div>
    <div
      class="relative xs:min-h-[calc(100vh-30vh)] lg:min-h-[calc(100vh-20vh)] flex items-center justify-center"
    >
      <div class="text-center">
        <h1
          class="xs:text-[3.25rem] lg:text-[4rem] xs:leading-[3.5rem] lg:leading-[4rem] font-kanit uppercase font-semibold"
        >
          I'M John&nbsp;Lorenz Dela&nbsp;Cruz
        </h1>
        <h6 class="xs:text-[1.2rem] lg:text-[1.5rem] mt-2 font-bold">
          welcome to my portfolio :)
        </h6>
        <div class="mt-3 hidden">
          <a href="#center">
            <button class="bg-normalshade px-3 py-2 text-white">Explore</button>
          </a>
        </div>
      </div>
    </div>

    <!--
    <img
      id="mountains"
      class="h-[345px] w-full object-cover absolute m-auto right-0 left-0"
      :src="mountains"
    />
    -->
  </div>
  <div id="main" class="bg-color relative max-w-[100vw] overflow-x-clip">
    <img
      id="fisherman"
      class="absolute m-auto right-0 left-5 h-[200px] z-[1]"
      :src="fisherman"
    />

    <div
      id="center"
      class="absolute xs:top-[30rem] sm:top-[33rem] lg:top-[28rem] xl:top-[17rem] max-w-[100vw] overflow-hidden"
    ></div>

    <div
      class="relative overflow-hidden w-full h-full flex justify-center items-center -mt-10 pb-[10rem]"
    >
      <div class="-top-[13rem] scale-y-50 absolute mix-blend-overlay">
        <div class="flex w-full">
          <img src="/src/assets/transparent.gif" />
          <img src="/src/assets/transparent.gif" class="scale-x-[-1]" />
          <img src="/src/assets/transparent.gif" />
          <img src="/src/assets/transparent.gif" class="scale-x-[-1]" />
          <img src="/src/assets/transparent.gif" />
          <img src="/src/assets/transparent.gif" class="scale-x-[-1]" />
        </div>
      </div>

      <img
        id="ocean"
        class="min-h-[1120px] xl:min-h-[1120px] w-full"
        :src="ocean"
      />

      <img
        id="corals1"
        :src="corals_1"
        class="h-[326px] w-full object-cover absolute z-[7]"
      />

      <img
        id="corals2"
        :src="corals_2"
        class="h-[496px] w-full object-cover absolute z-[7]"
      />

      <img
        id="oceanmountains"
        :src="oceanmountains"
        class="h-[794px] w-full object-cover absolute z-[5]"
      />

      <div
        id="text2"
        class="text-center text-white absolute z-[9] max-w-[100vw] overflow-hidden"
      >
        <div id="text2_container" class="relative">
          <h1
            id="text2_msg"
            class="xs:text-[2rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] xs:leading-[2.5rem] sm:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] font-kanit uppercase font-bold"
          >
            Rise with the Tide
          </h1>
        </div>
      </div>
      <div id="text3" class="text-center text-white absolute z-10">
        <h6
          class="mt-2 xs:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem] font-bold"
        >
          Never fear the storm, embrace&nbsp;the&nbsp;challenge...
        </h6>
      </div>

      <img
        id="fish1"
        :src="fish_1"
        class="h-[188px] w-[308px] object-cover absolute z-[8] top-[22.5rem]"
      />
      <img
        id="fish2"
        :src="fish_2"
        class="h-[217px] w-[357px] object-cover absolute z-[8] top-[25rem]"
      />
      <img
        id="fish3"
        :src="fish_3"
        class="h-[226px] w-[337px] object-cover absolute z-[8] bottom-[20rem]"
      />
      <img
        id="fish4"
        :src="fish_4"
        class="h-[282px] w-[380px] object-cover absolute z-[8] bottom-[20rem]"
      />
      <img
        id="corals3"
        :src="corals_3"
        class="h-[540px] w-full object-cover absolute z-[8]"
      />
      <img
        id="corals4"
        :src="corals_4"
        class="h-[1500px] w-full object-cover absolute z-10"
      />
      <div
        id="text1"
        class="text-center text-white absolute max-w-[100vw] overflow-hidden z-[9]"
      >
        <div id="text1_container" class="relative">
          <h1
            id="text1_msg"
            class="xs:text-[2rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] xs:leading-[2.5rem] sm:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] font-kanit uppercase font-bold"
          >
            Endure waves
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
