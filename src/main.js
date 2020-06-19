// import module
import Vue from 'vue';
import Store from './config/store.js';
import {DevelopMode} from './config/config.js';
import App from './App.vue';
import '@/assets/scss/bootstrap.scss';
import '@/assets/scss/style.scss';

// import VConsole  from 'vconsole';
// new VConsole();

Vue.config.productionTip = true;

Vue.mixin(require('@/components/abstract/pea-rule.vue'));

new Vue({
    store :Store,
    el :'#app',
    render :CE => CE(App),
});


