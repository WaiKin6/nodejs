import {getUrl, postUrl} from "../untils/http"

//这是添加试题类型接口
export const addQuestions = (addObj) =>{
    return getUrl("/exam/insertQuestionsType", addObj)
}

export const getQuestions = () =>{
    return getUrl("/exam/getQuestionsType")
}

// 这才是添加试题的接口
export const addQuestionsTest = () =>{
    return postUrl("/exam/questions")
}

//获取所有考试类型的接口
export const examType = () =>{
    return getUrl("/exam/examType")
}
