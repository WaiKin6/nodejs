import {getUrl, postUrl, putUrl} from "../untils/http"

//获取试题列表接口
export const getTestList = () =>{
    return getUrl("/exam/exam")
}
//添加试题的接口
export const createTest = (info) =>{
    console.log(info);
    
    return postUrl("/exam/questions", info)
}

//更新试题的接口
export const  questionsUpdate = (info) =>{
    return putUrl("/exam/questions/update", info)
}
