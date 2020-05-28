import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from "vue-lazyload"
import msg from "./utils/msg"

import VueAwesomeSweiper from "vue-awesome-swiper"

import "swiper/dist/css/swiper.css"
import $Abc from "./abc"
Vue.prototype.$Abc = $Abc;
Vue.use(VueAwesomeSweiper)

Vue.use(msg)

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: "http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg",
    loading: "http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg",
    attempt: 1
})

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')