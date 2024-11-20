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

const check = () => {
  if (state.showModal) {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
};
</script>

<template>
  <div class="lg:grid lg:grid-cols-2 h-full gap-x-10 gap-y-10 py-20">
    <div v-for="(item, index) in project" :key="item.id" class="relative">
      <div class="">
        <img
          class="h-full object-cover cursor-pointer"
          :src="item.image"
          @click="
            selectAlbum(item.name);
            state.showModal = true;
          "
        />
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
