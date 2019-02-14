import Vue from 'vue/dist/vue.esm.js'
import Router from 'vue-router'
Vue.use(Router);
import Foo from "../components/Foo";
import Bar from "../components/Bar";
import Index from"../components/index";
const routes = [
    {path:"/",component:Index},
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];
const router = new Router({
    routes // short for `routes: routes`
});
export default router;