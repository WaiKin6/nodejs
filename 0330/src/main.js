import Vue    from  "vue"
import App    from  "./App.vue"
import router from  "./router"
import store  from  "./store"
import              "./ele/ele"
import http   from  "./untils/http"
import "element-ui/lib/theme-chalk/index.css";
import {loginUser} from "./api/login"
import {addClassExam, putClassExam} from "./api/classExam"
import Cookie from "js-cookie"

Vue.prototype.$loginUser = loginUser;
Vue.prototype.$addClassExam = addClassExam;
Vue.prototype.$putClassExam = putClassExam;
Vue.prototype.$http = http;
Vue.prototype.$Cookie = Cookie;
Vue.config.productionTip = false

//  定义长度为10的过滤器
Vue.filter("length10", (e) =>{
    return e.slice(0, 10) + "..."
})
//  定义转大小写的过滤器
Vue.filter("toUpperCase", (e)=>{
    return  e.toUpperCase()
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app")
