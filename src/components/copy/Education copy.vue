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
    major: 'TVL - Information and Communications Technology (ICT)',
    university: 'Arellano University',
    date: '2017 - 2019',
    details: [
      {
        item: 'Studied programming languages C++, Java, Visual Basic .NET (VB.NET) for various application development.',
      },
      {
        item: 'Utilized VB.Net programming language, and Microsoft Access database for the development of research project.',
      },
      {
        item: 'Gained proficiency in Adobe Photoshop for graphic design and digital content creation, and Adobe Flash for creating animations and interactive games.',
      },
    ],
  },
];
</script>

<template>
  <section
    class="flex flex-col h-screen bg text-darkbeige sm:px-6 lg:px-[23rem] py-10"
  >
    <div class="mb-10">
      <p
        class="inline-block px-4 py-2 bg-darkbeige font-montserrat text-gray-100 text-2xl font-bold"
      >
        Education
      </p>
    </div>
    <div
      class="flex flex-col h-full max-h-screen"
      v-for="education in education"
      :key="education.id"
    >
      <div class="lg:grid lg:grid-cols-3 text-[1.1rem] h-full font-bold">
        <div
          class="relative pr-10 font-montserrat text-[1.5rem] font-bold drop-shadow"
        >
          <ul>
            <li>
              <ul>
                <li class="text-gray-100 leading-8">
                  {{ education.major }}
                </li>
                <li
                  class="text-[1.25rem] text-gray-100 font-semibold font-nunito italic"
                >
                  {{ education.university }}
                </li>
                <li
                  class="text-[1.1rem] text-gray-100 font-normal font-kanit italic"
                >
                  {{ education.date }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          class="col-span-2 relative pl-10 border-l-2 border-l-gray-100/40 pb-16 text-gray-100"
        >
          <ul class="list-square list-outside space-y-2 drop-shadow">
            <li v-for="details in education.details" :key="details.id" class="">
              <span class="text-[1.3rem] font-nunito text-white">{{
                details.item.substring(0, 1)
              }}</span
              >{{ details.item.substring(1) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--
    <div class="flex justify-between mt-4">
      <button
        class="flex items-center font-roboto font-bold uppercase text-gray-100"
      >
        <i
          class="pi pi-arrow-circle-up rounded-full bg-gray-100 text-color3 text-[2rem]"
        ></i>

        <span class="text-[1.25rem] drop-shadow"> Previous </span>
      </button>
      <button
        class="flex items-center font-roboto font-bold uppercase text-gray-100"
      >
        <span class="text-[1.25rem] drop-shadow"> Next </span>
        <i
          class="pi pi-arrow-circle-down rounded-full bg-gray-100 text-color3 text-[2rem] shadow-none"
        ></i>
      </button>
    </div>
  --></section>
</template>

<style scoped>
.bg {
  background: rgb(69, 173, 168);
  background: linear-gradient(
    180deg,
    rgba(69, 173, 168, 1) 0%,
    rgba(69, 173, 168, 1) 70%,
    rgba(51, 145, 156, 1) 100%
  );
}
</style>
