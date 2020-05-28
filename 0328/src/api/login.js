import { postUrl } from "../untils/http"

export const loginUser = (userMsg) =>{
    return postUrl("/user/login", userMsg)
}
