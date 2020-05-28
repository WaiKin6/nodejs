import axios from "./axiosToken"


export const getUrl = (url, params) =>{
    return axios.get(url, params)
}

export const postUrl = (url, params) =>{
    console.log(params);
    
    return axios.post(url, {...params})
}

export const delUrl = (url, data) =>{
    return axios.delete(url, data)
}

export const putUrl = (url, data) =>{
    return axios.put(url, {...data})
}
