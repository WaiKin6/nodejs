import {getUrl} from "../untils/http"


//获取待批阅卷列表
export const getClassList = ()=>{
    return getUrl("/exam/student")
}

