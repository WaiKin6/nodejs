import { getUrl } from "../untils/http"

export const getSubject = () =>{
    //获取所有学科的接口
    return getUrl("/exam/subject")
}
