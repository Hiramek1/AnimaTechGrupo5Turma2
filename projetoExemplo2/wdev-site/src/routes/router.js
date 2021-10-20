import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/*import Home from '@/pages/Home';*/
import Cursos from '@/pages/Cursos';
import Sobre from '@/pages/Sobre';
import Contato from '@/pages/Contato';


const routes = [
    /*{
        path: '/videos',
        component: Home
    },*/

    {
        path:'/',
        component: Cursos
    },

    {
        path:'/sobre',
        component: Sobre
    },

    {
        path:'/contato',
        component: Contato
    }

];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;