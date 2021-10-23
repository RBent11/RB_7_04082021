import Vue from 'vue';
import VueRouter from 'vue-router';
import PostPage from './views/PostPage.vue';
import Inscription from './views/Inscription.vue';



Vue.use(VueRouter);

export default new VueRouter({
   mode:'history',
    routes : [
        {
        path: '/',
        component: Inscription,
        },  
       {
        path: '/post',
        component: PostPage,
       }  
   ] 
})