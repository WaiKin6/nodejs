import axios from "axios";
import Cookie from "js-cookie"
import router from "../router/index"
import ErrorCode from  "../cofing/errorCode"
import Vue from "vue"
new Vue()
let {$message} = Vue.prototype;


axios.defaults.timeout = 5000;

axios.defaults.baseURL = "/exam";
let token = Cookie.get("token");
axios.interceptors.request.use(cofing => {
    
    if(cofing.url !== "/user/login"){
        if(!token){
            router.replace("/login")
        }
        cofing.headers.authorization = token;
    }
    return cofing
}, error => Promise.reject(error));

axios.interceptors.response.use(response => {
  
    //$message({message:response.data.msg, type: "success"})
    return Promise.resolve(response)
}, error =>{
    $message({message:ErrorCode[error.response.status], type: "warning"})
    //console.log({message:ErrorCode[error.response.status], type: "warning"});
})


export default axios;

//环境的切换 生产/开发/设置
// process.env.NODE_NEV = "producation/development/debug";

// if(process.env.NODE_NEV === "producation"){
//     axios.defaults.baseURL = "/api";
// }else if(process.env.NODE_NEV === "development"){
//     axios.defaults.baseURL = "/exam";
// }else{
//     axios.defaults.baseURL = "/debug"
// }
