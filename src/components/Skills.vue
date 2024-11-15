<script setup>
const bgColor = '#206873';

const skills = [
  {
    type: 'Front-End',
    tool: [
      {
        name: 'HTML5',
        img: 'vi-file-type-html',
        border: 'border-[#f1682e]',
        color: 'text-[#f1682e]',
      },
      {
        name: 'CSS3',
        img: 'vi-file-type-css',
        border: 'border-[#37a9d6]',
        color: 'text-[#37a9d6]',
      },
      {
        name: 'React',
        img: 'vi-file-type-reactjs',
        border: 'border-[#02d7ff]',
        color: 'text-[#02d7ff]',
      },
      {
        name: 'Vue',
        img: 'vi-file-type-vue',
        border: 'border-[#41b983]',
        color: 'text-[#41b983]',
      },
      {
        name: 'Tailwind',
        img: 'vi-file-type-tailwind',
        border: 'border-[#43a8b2]',
        color: 'text-[#43a8b2]',
      },
      {
        name: 'Bootstrap',
        img: 'fa-bootstrap',
        border: 'border-[#9d41fa]',
        color: 'text-[#9d41fa]',
        fill: '#9d41fa',
      },
    ],
  },

  {
    type: 'Back-End',
    tool: [
      {
        name: 'Laravel',
        img: 'fa-laravel',
        border: 'border-[#f64d3a]',
        color: 'text-[#f64d3a]',
        fill: '#f64d3a',
      },
      {
        name: 'Java',
        img: 'fa-java',
        border: 'border-[#e76f00]',
        color: 'text-[#e76f00]',
        fill: '#e76f00',
      },

      {
        name: 'Python',
        img: 'vi-file-type-python',
        border: 'border-[#dba10d]',
        color: 'text-[#dba10d]',
      },

      {
        name: 'Javascript',
        img: 'si-javascript',
        border: 'border-[#f8e026]',
        color: 'text-[#f8e026]',
        fill: '#f8e026',
      },
      {
        name: 'MySQL',
        img: 'si-mysql',
        border: 'border-[#04a1c4]',
        color: 'text-[#04a1c4]',
        fill: '#04a1c4',
      },
      {
        name: 'PHP',
        img: 'vi-file-type-php',
        border: 'border-[#637fb9]',
        color: 'text-[#637fb9]',
      },
    ],
  },

  {
    type: 'Tools',
    tool: [
      {
        name: 'Git',
        img: 'vi-file-type-git',
        border: 'border-[#df4c34]',
        color: 'text-[#df4c34]',
      },
      {
        name: 'phpMyAdmin',
        img: 'si-phpmyadmin',
        border: 'border-[#fa9c17]',
        color: 'text-[#fa9c17]',
        fill: '#fa9c17',
      },
      {
        name: 'Jira',
        img: 'fa-jira',
        border: 'border-[#2d84f8]',
        color: 'text-[#2d84f8]',
        fill: '#2d84f8',
      },

      {
        name: 'VS Code',
        img: 'vi-file-type-vscode',
        border: 'border-[#1f9cf0]',
        color: 'text-[#1f9cf0]',
      },
      {
        name: 'Figma',
        img: 'co-figma',
        border: 'border-[#fe7cbb]',
        color: 'text-[#fe7cbb]',
        fill: '#fe7cbb',
      },
      {
        name: 'Github',
        img: 'fa-github',
        border: 'border-[#ffffff]',
        color: 'text-[#ffffff]',
        fill: '#ffffff',
      },
    ],
  },

  {
    type: 'Others',
    tool: [
      {
        name: 'Blender',
        img: 'co-blender',
        border: 'border-[#ed7908]',
        color: 'text-[#ed7908]',
        fill: '#ed7908',
      },

      {
        name: 'Photoshop',
        img: 'co-adobe-photoshop',
        border: 'border-[#08cafc]',
        color: 'text-[#08cafc]',
        fill: '#08cafc',
      },
      {
        name: 'Premiere',
        img: 'co-adobe-premiere',
        border: 'border-[#e97bff]',
        color: 'text-[#e97bff]',
        fill: '#e97bff',
      },
      {
        name: 'VB.NET',
        img: 'si-visualstudio',
        border: 'border-[#9f1bc4]',
        color: 'text-[#9f1bc4]',
        fill: '#9f1bc4',
      },
      {
        name: 'Aseprite',
        img: 'si-aseprite',
        border: 'border-[#ffffff]',
        color: 'text-[#ffffff]',
        fill: '#ffffff',
      },
    ],
  },
];
</script>

<style scoped>
.bg {
  background: rgb(7, 44, 51);
  background: linear-gradient(
    180deg,
    rgba(7, 44, 51, 1) 0%,
    rgba(7, 44, 51, 1) 70%,
    rgba(0, 19, 23, 1) 100%
  );
}

.bgColor {
  background: v-bind(bgColor);
}
</style>

<template>
  <section
    class="flex flex-col min-h-screen bg-transparent text-white sm:px-6 lg:px-[23rem] py-10 pb-20"
  >
    <div class="mb-10 relative w-full text-center">
      <div
        class="inline-block px-4 py-2 bg-normalshade font-montserrat text-white text-2xl font-bold"
      >
        Skills
      </div>
    </div>
    <div
      class="font-montserrat mb-6 text-[1.2rem] font-bold overflow-hidden text-center"
      v-for="skill in skills"
      :key="skill.id"
    >
      <div class="mb-8">
        <h1 class="mb-6 text-[2rem]">{{ skill.type }}</h1>
        <div
          class="flex flex-wrap justify-center w-full h-full gap-x-0 gap-y-16"
        >
          <div class="flex" v-for="details in skill.tool" :key="details.id">
            <div :class="['border-b-[0.5rem] ' + details.border]">
              <v-icon :name="[details.img]" scale="5" :fill="[details.fill]" />
              <p
                :class="[
                  details.color,
                  details.name == 'phpMyAdmin' ? ' mt-1' : 'mt-0 ',
                  'text-[1rem]',
                ]"
              >
                {{ details.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
