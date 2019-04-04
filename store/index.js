import Vue from 'vue'
import Vuex from 'vuex'
import sign from './modules/sign'
import users from './modules/users'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        sign,
        users
    },
    state: {

    },
    mutations: {
        
    },
    actions: {
        
    }
})

export default store