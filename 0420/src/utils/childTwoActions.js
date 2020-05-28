export const changeHeight = (num) => {
    return {
        type: "ChildTwoReducer/height",
        data: num
    }
}
export const changeName = (name) => {
    return {
        type: "CHANGE_NAME",
        data: name
    }
}
export const changeAge = (age) => {
    return {
        type: "CHANGE_AGE",
        data: age
    }
}