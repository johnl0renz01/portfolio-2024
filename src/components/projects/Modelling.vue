<script setup>
import Album from '@/components/modal/Album.vue';
import data from '@/data/projects/modelling.js';
import dataAlbum from '@/data/modal/album.js';

import { reactive, defineProps, onMounted } from 'vue';

const state = reactive({
  album: [],
  showModal: false,
});

const project = data;
const albumList = dataAlbum;

const selectAlbum = albumName => {
  for (let i = 0; i < albumList.length; i++) {
    if (albumName == albumList[i].name) {
      state.album = albumList[i];
      break;
    }
  }
};
</script>

<template>
  <div class="lg:grid lg:grid-cols-2 h-full gap-x-10 gap-y-10 py-20">
    <div v-for="(item, index) in project" :key="item.id" class="relative">
      <div class="">
<<<<<<< HEAD
        <div
          class="group flex justify-center text-center relative overflow-hidden cursor-pointer"
=======
        <img
          class="h-full object-cover cursor-pointer"
          :src="item.image"
>>>>>>> parent of d3bd033 (updated)
          @click="
            selectAlbum(item.name);
            state.showModal = true;
          "
<<<<<<< HEAD
        >
          <img
            :src="item.image"
            class="h-full object-cover ease-in-out duration-500 group-hover:scale-125"
          />

          <div
            class="absolute w-full h-full opacity-10 hover:bg-white transition-opacity duration-500 group-hover:opacity-10"
          ></div>
        </div>

=======
        />
>>>>>>> parent of d3bd033 (updated)
        <div class="mt-2 flex justify-between items-center xs:pb-10 lg:pb-0">
          <h1 class="xs:text-[1rem] sm:text-[1.2rem] font-bold font-montserrat">
            {{ item.title }}
          </h1>
          <button
            @click="
              selectAlbum(item.name);
              state.showModal = true;
            "
            class="text-[0.9rem] font-montserrat underline"
          >
            Album
          </button>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <Album
      :album="state.album"
      v-if="state.showModal"
      @close="state.showModal = false"
      @keydown.esc="state.showModal = false"
    >
    </Album>
  </Teleport>
</template>
