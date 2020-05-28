// import { postUrl} from "../untils/http"
// import { putUrl } from "../untils/http"
import { getUrl, delUrl } from "../untils/http"

// export const addClassExam = (userMsg) =>{
//     return postUrl("/manger/grade", userMsg)
// }

// export const putClassExam = (userMsg) =>{
//     return putUrl("/manger/grade/update", userMsg)
// }
export const getStudents = () =>{
    return getUrl("manger/student")
}
export const delStudent = (data) =>{
    
    return delUrl(`/manger/student/${data}`)
}
