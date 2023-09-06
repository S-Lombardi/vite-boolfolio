//IMPORTIAMO I METODI createRouter e createWebHistory da vue-router
import { createRouter, createWebHistory} from 'vue-router';

//IMPORTIAMO LE COMPONENTI CHE RAPPRESENTANO LE PAGINE
import HomePage  from './pages/HomePage.vue';
import AppMain  from './pages/AppMain.vue';


//CREIAMO IL ROUTER
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'home',
            component: HomePage,
        },

        {
            path:'/portfolio',
            name: 'main',
            component: AppMain,
        }
    ]
});

export{ router}
