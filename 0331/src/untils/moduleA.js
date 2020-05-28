
export default {
    state: {
        text: "moduleA"
    },
    namespaced:true,
    getters: {},
    mutations: {},
    actions: {
        getDate({state}){
            console.log(state.text);
        }
    }
}
