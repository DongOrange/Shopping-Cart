import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/output.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBasketShopping,faCartShopping,faPlus,faMinus,faTrashCan,faCashRegister } from '@fortawesome/free-solid-svg-icons';

library.add(faBasketShopping,faCartShopping,faPlus,faMinus,faTrashCan,faCashRegister);

const pinia = createPinia();
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(pinia);
app.mount('#app')