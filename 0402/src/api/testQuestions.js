import {getUrl} from "../untils/http"

//获取试题列表接口
export const getTestList = () =>{
    return getUrl("/exam/exam")
}


