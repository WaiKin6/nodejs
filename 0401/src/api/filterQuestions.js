import { getUrl } from "../untils/http"

export const getfilterQuestions = () =>{
    //按条件获取试题
    return getUrl("/exam/questions/condition")
}
