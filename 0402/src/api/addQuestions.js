import {getUrl} from "../untils/http"

export const addQuestions = (addObj) =>{
    return getUrl("/exam/insertQuestionsType", addObj)
}

export const getQuestions = () =>{
    return getUrl("/exam/getQuestionsType")
}
// 

