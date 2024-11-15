<script setup>
import pia_thumbnail from '@/assets/projects/pia/thumbnail.png';
import adaptive_thumbnail from '@/assets/projects/adaptive/thumbnail.png';
import turo_thumbnail from '@/assets/projects/turo/thumbnail.png';

import adaptive_landing from '@/assets/projects/adaptive/landing.png';
</script>

<template>
  <div class="style-1 max-h-screen overflow-y-auto">
    <div class="relative mb-16">
      <div class="absolute left-0 right-0 top-0 lg:grid lg:grid-cols-3 z-10">
        <div class="col-span-2">
          <div class="border-r-[30px] border-r-white/80 h-[5px]">&nbsp;</div>
        </div>

        <div class="border-l-[30px] border-l-white/80 h-[5px]">&nbsp;</div>
      </div>
      <div class="lg:grid lg:grid-cols-3 h-full">
        <div class="col-span-2 pr-20 border-r-[1px] border-r-gray-100/40">
          <div class="relative col-span-2">
            <img class="object-cover" :src="pia_thumbnail" />
          </div>
        </div>
        <div class="pl-20 pr-20 border-l-[1px] border-l-gray-100/40">
          <h1
            class="text-[1.2rem] mb-3 font-semibold font-montserrat leading-[0.9rem]"
          >
            Home Page
          </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
    </div>

    <div class="relative mb-16">
      <div class="absolute left-0 right-0 top-0 lg:grid lg:grid-cols-3 z-10">
        <div class="col-span-2">
          <div class="border-r-[30px] border-r-white/80 h-[5px]">&nbsp;</div>
        </div>

        <div class="border-l-[30px] border-l-white/80 h-[5px]">&nbsp;</div>
      </div>
      <div class="lg:grid lg:grid-cols-3 h-full">
        <div class="col-span-2 pr-20 border-r-[1px] border-r-gray-100/40">
          <div class="relative col-span-2">
            <img class="h-full object-cover" :src="pia_thumbnail" />
          </div>
        </div>
        <div class="px-20 border-l-[1px] border-l-gray-100/40">
          <h1
            class="text-[1.2rem] mb-3 font-semibold font-montserrat leading-[0.9rem]"
          >
            Home Page
          </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="absolute left-0 right-0 top-0 lg:grid lg:grid-cols-3 z-10">
        <div class="col-span-2">
          <div class="border-r-[30px] border-r-white/80 h-[5px]">&nbsp;</div>
        </div>

        <div class="border-l-[30px] border-l-white/80 h-[5px]">&nbsp;</div>
      </div>
      <div class="lg:grid lg:grid-cols-3 h-full">
        <div class="col-span-2 pr-20 border-r-[1px] border-r-gray-100/40">
          <div class="relative col-span-2">
            <img class="h-full object-cover" :src="pia_thumbnail" />
          </div>
        </div>
        <div class="px-20 border-l-[1px] border-l-gray-100/40">
          <h1
            class="text-[1.2rem] mb-3 font-semibold font-montserrat leading-[0.9rem]"
          >
            Home Page
          </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
    </div>
  </div>
</template>
