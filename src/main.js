import "babel-polyfill";
import Vue from 'vue/dist/vue.esm.js'
import router from './router'
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
