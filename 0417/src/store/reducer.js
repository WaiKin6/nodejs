import { CHANGE_INPUTVALUE, GET_LIST, GET_MY_LIST } from "./actionTypes"


let initArr = {
    inputValue: "Write Something",
    list: [
        "早8点开晨会，分配今天的代码任务",
        "早九点和项目经理开需求沟通会议",
        "晚五点组织人员进行Peview代码"
    ]
};

export default (state = initArr, action) => {
    //Redux里值能接受state，不能改变state
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUTVALUE:
            newState.inputValue = action.value
            return newState
        case GET_LIST:
            newState.list = action.data
            return newState
        default:
            return state
    }
}

