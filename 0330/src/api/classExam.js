import { postUrl } from "../untils/http"
import { putUrl } from "../untils/http"

export const addClassExam = (userMsg) =>{
    return postUrl("/manger/grade", userMsg)
}

export const putClassExam = (userMsg) =>{
    return putUrl("/manger/grade/update", userMsg)
}
