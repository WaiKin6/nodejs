export const childTwoDispatch=(actions,dispatch)=>{
    //console.log(actions,dispatch);
    let obj = {};
    for(let key in actions){
        obj[key] = function(...args){
            dispatch(actions[key](...args))
        }
        //console.log("obj",obj); 
        return obj
    }
    // return ()=>{
    //     actions.changeHeight(dispatch)
    // }
}