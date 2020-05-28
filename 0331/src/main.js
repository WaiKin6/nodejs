import Vue    from  "vue"
import App    from  "./App.vue"
import router from  "./router"
import store  from  "./store"
import              "./ele/ele"
import http   from  "./untils/http"
import "element-ui/lib/theme-chalk/index.css";
import {loginUser} from "./api/login"
import {addClassExam, putClassExam, getClassExam, delClassExam} from "./api/classExam"
import {getClassRoom, addClassRoom, delClassRoom} from "./api/classRoom"
import {getStudents, delStudent} from "./api/students"
import {getSubject} from "./api/subject"
import Cookie from "js-cookie"


Vue.prototype.$loginUser = loginUser;
Vue.prototype.$addClassExam = addClassExam;
Vue.prototype.$putClassExam = putClassExam;
Vue.prototype.$getClassExam = getClassExam;
Vue.prototype.$getClassRoom = getClassRoom;
Vue.prototype.$getStudents = getStudents;
//获取所有课程的接口
Vue.prototype.$getSubject = getSubject;
//删除班级的接口
Vue.prototype.$delClassExam = delClassExam;
//添加教室的接口
Vue.prototype.$addClassRoom = addClassRoom;
//删除教室号的接口
Vue.prototype.$delClassRoom = delClassRoom;
//删除学生的接口
Vue.prototype.$delStudent = delStudent;
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
