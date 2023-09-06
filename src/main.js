import { createApp } from 'vue'

import App from './App.vue'

//IMPORTO ROUTER DAL FILE ROUTER.JS

import { router } from './router.js';

createApp(App).use(router).mount('#app');




