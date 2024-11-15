<script setup>
const experiences = [
  {
    title: 'Full Stack Developer',
    location: 'Remote',
    type: 'Freelance',
    date: 'May 2024 - Jul 2024',
    details: [
      {
        item: 'Created a web-based system dedicated for students to learn linear equations, designed specifically for academic research purposes.',
      },
      {
        item: 'Utilized Figma to create multiple mobile designs of the proposed system.',
      },
      {
        item: 'Designed an appealing mobile responsive web design UI/UX using Tailwind CSS custom styles.',
      },
      {
        item: 'Created a custom algorithm using JavaScript to solve linear equations and to produce equation steps accordingly.',
      },
      {
        item: 'Utilized PHP and JavaScript for backend connections to perform CRUD through REST API.',
      },
    ],
  },
  {
    title: 'SAP/ABAP Trainee',
    location: 'Accenture Philippines',
    type: 'Internship',
    date: 'Jun 2023 - Oct 2023',
    details: [
      {
        item: 'Trained SAP/ABAP for implementing and managing business transactions.',
      },
      {
        item: 'Practiced coding techniques to improve efficiency and optimize code in OOP.',
      },
      {
        item: 'Basic SQL CRUD operations and usage of BAPI (Business Application Programming Interface).',
      },
    ],
  },
];
</script>

<template>
  <section
    class="flex flex-col bg-transparent text-white sm:px-6 lg:px-[23rem] pt-10"
  >
    <div class="mb-10 text-center">
      <p
        class="inline-block px-4 py-2 bg-normalbeige font-montserrat text-white text-2xl font-bold"
      >
        Experience
      </p>
    </div>

    <div v-for="(experience, index) in experiences" :key="experience.id">
      <div class="lg:grid lg:grid-cols-2 h-full text-[1.1rem] font-bold">
        <div
          v-if="index % 2 == 0"
          class="relative pr-10 font-montserrat text-[1.5rem] font-bold drop-shadow text-right pl-[25%]"
        >
          <ul>
            <li>
              <ul>
                <li class="text-gray-100 leading-8">{{ experience.title }}</li>
                <li
                  class="text-[1.25rem] text-gray-100 font-semibold font-nunito italic"
                >
                  {{ experience.location }}
                </li>
                <li
                  class="text-[1rem] text-gray-100 font-normal font-nunito italic"
                >
                  {{ experience.type }}
                </li>
                <li
                  class="text-[1.1rem] text-gray-100 font-normal font-kanit italic"
                >
                  {{ experience.date }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          v-else
          class="relative pr-10 pb-16 text-gray-100 text-right pl-[25%]"
        >
          <ul class="space-y-2 drop-shadow">
            <li
              class=""
              v-for="(details, indexDetails) in experience.details"
              :key="details.id"
            >
              <div v-if="indexDetails == 0">
                <span class="text-[1.3rem] font-nunito text-white">{{
                  details.item.substring(0, 1)
                }}</span>
                <span>{{ details.item.substring(1) }} </span>
              </div>
            </li>
            <details>
              <summary
                class="font-nunito drop-shadow-none underline font-bold shadow-xs mb-2"
                data-open="Minimize"
                data-close="Expand"
              ></summary>

              <li
                class=""
                v-for="(details, indexDetails) in experience.details"
                :key="details.id"
              >
                <div v-if="indexDetails > 0" class="mb-2">
                  <span class="text-[1.3rem] font-nunito text-white">{{
                    details.item.substring(0, 1)
                  }}</span
                  ><span>{{ details.item.substring(1) }} </span>
                </div>
              </li>
            </details>
          </ul>
        </div>
        <div
          v-if="index % 2 == 0"
          class="relative pl-10 border-l-2 border-l-gray-100/40 pb-16 text-gray-100 pr-[25%]"
        >
          <ul class="space-y-2 drop-shadow">
            <li
              class=""
              v-for="(details, indexDetails) in experience.details"
              :key="details.id"
            >
              <div v-if="indexDetails == 0">
                <span
                  v-if="indexDetails == 0"
                  class="text-[1.3rem] font-nunito text-white"
                  >{{ details.item.substring(0, 1) }}</span
                >
                <span> {{ details.item.substring(1) }}</span>
              </div>
            </li>
            <details>
              <summary
                class="font-nunito drop-shadow-none underline font-bold shadow-xs mb-2"
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

        <div
          v-else
          class="relative pl-10 border-l-2 border-l-gray-100/40 font-montserrat text-[1.5rem] font-bold drop-shadow text-left pr-[25%]"
        >
          <ul>
            <li>
              <ul>
                <li class="text-gray-100 leading-8">{{ experience.title }}</li>
                <li
                  class="text-[1.25rem] text-gray-100 font-semibold font-nunito italic"
                >
                  {{ experience.location }}
                </li>
                <li
                  class="text-[1rem] text-gray-100 font-normal font-nunito italic"
                >
                  {{ experience.type }}
                </li>
                <li
                  class="text-[1.1rem] text-gray-100 font-normal font-kanit italic"
                >
                  {{ experience.date }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

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
</style>
