<script setup>
import dataExperiences from '@/data/experiences.js';

const experiences = dataExperiences;
</script>

<style scoped>
.bg {
  background: rgb(0, 71, 87);
  background: linear-gradient(
    180deg,
    rgba(0, 71, 87, 1) 0%,
    rgba(0, 71, 87, 1) 70%,
    rgba(1, 61, 74, 1) 100%
  );
}

details[open] summary::after {
  content: attr(data-open);
}

details:not([open]) summary::after {
  content: attr(data-close);
}

details > summary {
  list-style: none;
}

details > summary::marker, /* Latest Chrome, Edge, Firefox */ 
details > summary::-webkit-details-marker /* Safari */ {
  display: none;
}
</style>

<template>
  <section class="flex flex-col text-white sm:px-16 xl:px-[23rem] pt-10">
    <div class="mb-10 text-center">
      <p
        class="inline-block px-4 py-2 bg-normalshade font-montserrat text-2xl font-bold"
      >
        Background
      </p>
    </div>
    <div
      v-for="(experience, index) in experiences"
      :key="experience.id"
      class="relative"
    >
      <div
        class="absolute left-0 right-0 top-3.5 xs:hidden lg:grid lg:grid-cols-2 h-[5px]"
      >
        <div class="border-r-[10px] border-r-white/80"></div>
        <div class="border-l-[10px] border-l-white/80"></div>
      </div>
      <div class="lg:grid lg:grid-cols-2 h-full text-[1rem] xs:px-4 lg:px-0">
        <div
          class="relative border-r-[1px] xs:border-l-[1px] lg:border-l-0 border-gray-100/40 font-montserrat text-[1.4rem] font-bold drop-shadow xs:text-center lg:text-right lg:pl-[25%] lg:pr-20 xs:px-4 lg:px-0"
        >
          <ul>
            <li>
              <ul>
                <li class="leading-8">{{ experience.title }}</li>
                <li class="text-[1.1rem] font-semibold font-nunito italic">
                  {{ experience.location }}
                </li>
                <li class="text-[1rem] font-normal font-nunito italic">
                  {{ experience.type }}
                </li>
                <li class="text-[1.1rem] font-normal font-kanit italic">
                  {{ experience.date }}
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div
          class="relative xs:text-center lg:text-left lg:pl-20 xs:pt-10 lg:pt-0 pb-16 lg:pr-[45%] lg:border-l-[1px] border-gray-100/40"
        >
          <ul class="space-y-2 drop-shadow xs:px-10 lg:px-0">
            <li
              class=""
              v-for="(details, indexDetails) in experience.details"
              :key="details.id"
            >
              <div v-if="indexDetails == 0">
                <span
                  v-if="indexDetails == 0"
                  class="text-[1.2rem] font-nunito text-white"
                  >{{ details.item.substring(0, 1) }}</span
                >
                <span> {{ details.item.substring(1) }}</span>
              </div>
            </li>
            <details>
              <summary
                class="xs:text-center lg:text-left font-nunito drop-shadow-none underline font-bold shadow-xs mb-2"
                data-open="Minimize"
                data-close="Expand"
              ></summary>

              <li
                class=""
                v-for="(details, indexDetails) in experience.details"
                :key="details.id"
              >
                <div v-if="indexDetails > 0" class="mb-2">
                  <span
                    v-if="indexDetails > 0"
                    class="text-[1.3rem] font-nunito text-white"
                    >{{ details.item.substring(0, 1) }}</span
                  >
                  <span> {{ details.item.substring(1) }}</span>
                </div>
              </li>
            </details>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
