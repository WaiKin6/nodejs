// import { postUrl} from "../untils/http"
// import { putUrl } from "../untils/http"
import { getUrl, postUrl, delUrl } from "../untils/http"

// export const addClassExam = (userMsg) =>{
//     return postUrl("/manger/grade", userMsg)
// }

// export const putClassExam = (userMsg) =>{
//     return putUrl("/manger/grade/update", userMsg)
// }
export const getClassRoom = () =>{
    return getUrl("/manger/room")
}

export const addClassRoom = (classNum) =>{
    return postUrl("/manger/room", classNum)
}

// 删除教室号的接口
export const delClassRoom = (classNum) =>{
    return delUrl("/manger/room/delete", classNum)
}
