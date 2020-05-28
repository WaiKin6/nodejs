import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        setList(state, payload) {
            state.list = payload
        }
    },
    actions: {
        getList({ commit }) {
            axios.post("/list").then(res => {
                let value = res.data.value;
                commit("setList", value)
            })
        }
    }
})