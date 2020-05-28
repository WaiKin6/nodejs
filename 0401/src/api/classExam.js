import { postUrl, getUrl, putUrl, delUrl} from "../untils/http"

export const addClassExam = (userMsg) =>{
    return postUrl("/manger/grade", userMsg)
}
export const putClassExam = (userMsg) =>{
    return putUrl("/manger/grade/update", userMsg)
}
export const getClassExam = () =>{
    return getUrl("/manger/grade")
}
export const delClassExam = (data) =>{
    console.log(data);
    return delUrl("/manger/grade/delete", data)
}


