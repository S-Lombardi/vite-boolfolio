//IMPORTIAMO I METODI createRouter e createWebHistory da vue-router
import { createRouter, createWebHistory} from 'vue-router';

//IMPORTIAMO LE COMPONENTI CHE RAPPRESENTANO LE PAGINE
import Homepage  from './pages/Homepage.vue';

//CREIAMO IL ROUTER
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'home',
            component: Homepage,
        }
    ]
});

export{ router}
