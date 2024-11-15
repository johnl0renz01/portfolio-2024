<script setup>
const education = [
  {
    major: 'Bachelor of Science in Computer Science',
    university: 'University of the East',
    date: '2019 - 2024',
    details: [
      {
        item: 'Gained basic knowledge in languages such as Python, PHP, and JavaScript, which I further developed later on.',
      },
      {
        item: 'Learned arrays, linked lists, trees, graphs, sorting, and searching algorithms.',
      },
      {
        item: 'Studied the principles of software engineering, version control (e.g., Git), and agile methodologies.',
      },
      {
        item: 'Developed various web projects using the basics of HTML5, CSS3, JavaScript, and ReactJS.',
      },
      {
        item: 'Acquired skills in Blender to create 3D models and apply various techniques for efficient modeling.',
      },
    ],
  },
  {
    major: 'TVL - Information and Communications Technology',
    university: 'Arellano University',
    date: '2017 - 2019',
    details: [
      {
        item: 'Studied programming languages C++, Java, Visual Basic .NET (VB.NET) for various application development.',
      },
      {
        item: 'Utilized VB.Net language, and Microsoft Access for the development of research project.',
      },
      {
        item: 'Gained proficiency in  Photoshop for graphic design, and Flash for creating animations and interactive games.',
      },
    ],
  },
];
</script>

<style scoped>
.bg {
  background: rgb(1, 61, 74);
  background: linear-gradient(
    180deg,
    rgba(1, 61, 74, 1) 0%,
    rgba(1, 61, 74, 1) 70%,
    rgba(7, 44, 51, 1) 100%
  );
}

details[open] summary::after {
  content: attr(data-open);
}

details:not([open]) summary::after {
  content: attr(data-close);
}
</style>

<template>
  <section
    class="flex flex-col bg-transparent text-white sm:px-6 lg:px-[23rem] pb-20"
  >
    <div
      class="relative"
      v-for="(education, index) in education"
      :key="education.id"
    >
      <div
        class="absolute left-0 right-0 top-3.5 lg:grid lg:grid-cols-2 h-[5px]"
      >
        <div class="border-r-[10px] border-r-white/80"></div>
        <div class="border-l-[10px] border-l-white/80"></div>
      </div>
      <div class="lg:grid lg:grid-cols-2 text-[1rem] h-full">
        <div
          class="relative pr-20 border-r-[1px] border-r-gray-100/40 font-montserrat text-[1.4rem] font-bold drop-shadow text-right pl-[40%]"
        >
          <ul>
            <li>
              <ul>
                <li class="leading-8">
                  {{ education.major }}
                </li>
                <li class="text-[1.1rem] font-normal italic">
                  {{ education.university }}
                </li>
                <li class="text-[1.1rem] font-normal font-kanit italic">
                  {{ education.date }}
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div
          class="relative pl-20 border-l-[1px] border-l-gray-100/40 pb-16 pr-[45%]"
        >
          <ul class="space-y-3 drop-shadow">
            <li
              class=""
              v-for="(details, indexDetails) in education.details"
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
                class="drop-shadow-none underline font-bold shadow-xs mb-2"
                data-open="Minimize"
                data-close="Expand"
              ></summary>

              <li
                class=""
                v-for="(details, indexDetails) in education.details"
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
