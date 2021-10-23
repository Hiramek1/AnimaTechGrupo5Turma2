import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/*import Home from '@/pages/Home';*/
import Cursos from '@/pages/Cursos';
import Interno from '@/pages/Interno';
import Interno2 from '@/pages/Interno2';
import Interno3 from '@/pages/Interno3';
import Formulario from '@/pages/Formulario';
import Painel from '@/pages/Painel';


const routes = [

    {
        path:'/',
        component: Cursos
    },

    {
        path:'/formulario',
        component: Formulario
    },

    {
        path:'/painel',
        component: Painel
    },

    {
        path:'/interno',
        component: Interno
    },

    {
        path:'/interno2',
        component: Interno2
    },

    {
        path:'/interno3',
        component: Interno3
    },

];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;