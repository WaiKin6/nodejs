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
import {addQuestions, getQuestions} from "./api/addQuestions"
import {getSubject} from "./api/subject"
import {getfilterQuestions} from "./api/filterQuestions"
import {getUserList, getApiInterfaceList, getRelationshipList, getviewAauthorityList, getvaRelationList, addUser, putUser, addIdentity, addauthorityApi, authorityView, setIdentityApi, setIdentityView, getIdentity} from "./api/user"
import {getTestList} from "./api/testQuestions"
import {getClassList} from "./api/papers"

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

//添加试题类型的接口
Vue.prototype.$addQuestions = addQuestions;
//获取所有试题类型的接口
Vue.prototype.$getQuestions = getQuestions;
//按条件获取试题
Vue.prototype.$getfilterQuestions = getfilterQuestions;
//获取所有用户信息列表
Vue.prototype.$getUserList = getUserList;
//获取接口权限数据
Vue.prototype.$getApiInterfaceList = getApiInterfaceList;
//展示身份和api权限关系的数据
Vue.prototype.$getRelationshipList = getRelationshipList;
//获取视图权限数据
Vue.prototype.$getviewAauthorityList = getviewAauthorityList;
//获取展示身份和视图权限关系的数据
Vue.prototype.$getvaRelationList = getvaRelationList;
//添加用户的接口
Vue.prototype.$addUser = addUser;
//修改用户信息的接口
Vue.prototype.$putUser = putUser;
//添加身份的接口
Vue.prototype.$addIdentity = addIdentity;
//添加api接口权限
Vue.prototype.$addauthorityApi = addauthorityApi;
//添加视图权限接口
Vue.prototype.$authorityView = authorityView;
//给身份设置api接口权限
Vue.prototype.$setIdentityApi = setIdentityApi;
// 给身份设定视图权限
Vue.prototype.$setIdentityView = setIdentityView;
//获取展示身份的接口
Vue.prototype.$getIdentity = getIdentity;
//获取试题列表的接口
Vue.prototype.$getTestList = getTestList;
//获取待批阅卷列表
Vue.prototype.$getClassList = getClassList;

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
