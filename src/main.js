import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import router from './router';

import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';
import 'primeicons/primeicons.css';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import * as ViIcons from 'oh-vue-icons/icons/vi';
const Vi = Object.values({ ...ViIcons });
addIcons(...Vi);

import * as FaIcons from 'oh-vue-icons/icons/fa';

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

import * as SiIcons from 'oh-vue-icons/icons/si';

const Si = Object.values({ ...SiIcons });
addIcons(...Si);

import * as CoIcons from 'oh-vue-icons/icons/co';

const Co = Object.values({ ...CoIcons });
addIcons(...Co);

import * as MdIcons from 'oh-vue-icons/icons/md';
const Md = Object.values({ ...MdIcons });
addIcons(...Md);

const app = createApp(App);

app.use(router);
app.component('v-icon', OhVueIcon);
app.mount('#app');
