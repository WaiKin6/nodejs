const initState={
    name:"King",
    age:26,
    height:175
}

function TwoReducer(state=initState,action){
    
    switch (action.type) {
        case "CHANGE_AGE":
            console.log(action);
            return {
                ...state,
                height:400
            }
            case "ADD_COUNT":
                console.log(action);
                return {
                    ...state,
                    height:action.data
                }
        default:
            return state;
    }
}

export default TwoReducer;