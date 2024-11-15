<script setup>
import connect_login from '@/assets/designs/connectlogin.png';
import connect_home from '@/assets/designs/connecthome.png';
import connect_content from '@/assets/designs/connectcontent.png';
import connect_pricing from '@/assets/designs/connectpricing.png';
import connect_download from '@/assets/designs/connectdownload.png';
import connect_contact from '@/assets/designs/connectcontact.png';

import cyber_landing from '@/assets/designs/cyberlanding.png';
import cyber_home from '@/assets/designs/cyberhome.png';

import eldritch_home from '@/assets/designs/eldritchhome.png';

import casino_home from '@/assets/designs/casinohome.png';

import hogwarts_form from '@/assets/designs/hogwartsform.png';

const project = [
  {
    title: 'Connect Care',
    pages: [
      {
        image: connect_home,
        name: 'Home',
        link: 'https://codepen.io/johnl0renz01/full/gOZGZOW',
      },
      {
        image: connect_login,
        name: 'Login',
        link: 'https://codepen.io/johnl0renz01/full/ZEVaZqN',
      },

      {
        image: connect_content,
        name: 'Content',
        link: 'https://codepen.io/johnl0renz01/full/eYbeoPw',
      },
      {
        image: connect_pricing,
        name: 'Pricing',
        link: 'https://codepen.io/johnl0renz01/full/zYyRXeb',
      },

      {
        image: connect_download,
        name: 'Download',
        link: 'https://codepen.io/johnl0renz01/full/qBLxwvW',
      },

      {
        image: connect_contact,
        name: 'Contact',
        link: 'https://codepen.io/johnl0renz01/full/LYMQvaY',
      },
    ],
  },

  {
    title: 'Cyber Nexus Hub',
    pages: [
      {
        image: cyber_landing,
        name: 'Landing',
        link: 'https://codepen.io/johnl0renz01/full/bGOpRXa',
      },
      {
        image: cyber_home,
        name: 'Home',
        link: 'https://codepen.io/johnl0renz01/full/yLGayjQ',
      },
    ],
  },

  {
    title: 'Eldritch Chronicles',
    pages: [
      {
        image: eldritch_home,
        name: 'Home',
        link: 'https://codepen.io/johnl0renz01/full/VwqWVav',
      },
    ],
  },

  {
    title: 'Casino Fortune',
    pages: [
      {
        image: casino_home,
        name: 'Home',
        link: 'https://codepen.io/johnl0renz01/full/GRPEJEJ',
      },
    ],
  },
  {
    title: 'Hogwarts',
    pages: [
      {
        image: hogwarts_form,
        name: 'Form',
        link: 'https://codepen.io/johnl0renz01/full/LYMdGoP',
      },
    ],
  },
];
</script>

<template>
  <div
    v-for="(item, index) in project"
    :key="item.id"
    :class="[
      'w-full h-full py-10',
      index == project.length - 1 ? '' : 'border-b-white border-b-[1px]',
    ]"
  >
    <div class="flex justify-center gap-x-6 gap-y-16 py-4 flex-wrap">
      <div v-for="(page, indexPage) in item.pages" :key="page.id">
        <div
          :class="[
            'flex items-end',
            indexPage == 0 ? 'justify-between' : 'justify-end',
          ]"
        >
          <h1
            v-if="indexPage == 0"
            class="text-[1.5rem] font-montserrat font-semibold"
          >
            {{ item.title }}
          </h1>
          <h1
            class="text-[1rem] bg-normalshade inline-block px-3 py-1 font-montserrat"
          >
            {{ page.name }} Page
          </h1>
        </div>

        <a :href="[page.link]" target="_blank"
          ><img class="h-full" :src="page.image"
        /></a>
      </div>
    </div>
  </div>
</template>
