import { getUrl, postUrl, putUrl } from "../untils/http"

export const getUserList = () =>{
    //获取所有用户接口
    return getUrl("/user/user");
}

//展示api接口权限数据
export const getApiInterfaceList = () =>{
    return getUrl("/user/api_authority");
}

//展示身份和api权限关系
export const getRelationshipList = () =>{
    return getUrl("/user/identity_api_authority_relation");
}

//获取展示身份数据的接口
export const getIdentity = () =>{
    return getUrl("/user/identity");
}


//获取视图权限数据
export const getviewAauthorityList = () =>{
    return getUrl("/user/view_authority");
}

//获取展示身份和视图权限关系的数据
export const getvaRelationList = () =>{
    return getUrl("/user/identity_view_authority_relation");
}

//添加用户的接口
export const addUser = (userMsg) =>{
    // console.log(userMsg)
    return postUrl("/user", userMsg);
}
//更新用户信息(用户名，用户密码，用户身份)
export const putUser = (userMsg) =>{
    return putUrl("/user/user", userMsg);
}
//添加身份的接口
//user/identity/edit
export const addIdentity = (userMsg) =>{
    console.log(userMsg);
    return getUrl("/user/identity/edit", userMsg);
}

//添加api接口权限
// /user/authorityApi/edit
export const addauthorityApi = (userMsg) =>{
    // console.log(userMsg);
    return getUrl("/user/authorityApi/edit", userMsg);
}

//添加视图权限接口
// /user/authorityView/edit
export const authorityView = (userMsg) =>{
    // console.log(userMsg);
    return getUrl("/user/authorityView/edit", userMsg);
}

// 给身份设定api接口权限
// /user/setIdentityApi
export const setIdentityApi = (userMsg) =>{
    // console.log(userMsg);
    return getUrl("/user/setIdentityApi", userMsg);
}

// 给身份设定视图权限
// /user/setIdentityView
export const setIdentityView = (userMsg) =>{
    // console.log(userMsg);
    return getUrl("/user/setIdentityView", userMsg);
}

//获取当前用户信息的接口
export const getUserInfo = () =>{
    return getUrl("/user/userInfo");
}

