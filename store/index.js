import Vue from 'vue'
import Vuex from 'vuex'
import sign from './modules/sign'
import users from './modules/users'
import axios from 'axios'
import Cookie from 'js-cookie'

Vue.use(Vuex)

function cookieToJson(str='') {
    let cookieArr = str.split("; ");
    let obj = {} 
    cookieArr.forEach((i) => {
        let arr = i.split("=");
        obj[arr[0]] =arr[1];
    });
    return obj
}

const store = () => new Vuex.Store({
    modules: {
        sign,
        users,
    },
    state: {
        authUser: null
    },
    mutations: {
        SET_USER (state, user) {
            state.authUser = user;
        }
    },
    actions: {
        async nuxtServerInit({ commit }, { req }) {
            let { token, uid } = cookieToJson(req.headers.cookie);
            if(token) {
                const user = await axios.post('/userInfo', {token, uid});
                if (user && user.data) {
                    commit('SET_USER', user.data);
                }
            }
        },
        async login ({ commit }, datainfo) {
            try {
                let { data } = datainfo;
                if(data && data.code === 200) {
                    let utils = data.data;
                    Cookie.set('token', utils.token)
                    Cookie.set('uid', utils.uid)
                    const user = await axios.post('/userinfo', utils)
                    if(user && user.data.code === 200) {
                        commit('SET_USER', user.data)
                        this.$router.push('/users/')
                    }
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    throw new Error('Bad credentials')
                }
                throw error
            }
        },
        async logout({ commit }, datainfo) {
            let { data } = await axios.post('/loginOut', {
                uid: datainfo
            })
            if(data.code === 200) {
                Cookie.remove('token')
                Cookie.remove('uid')
                commit('SET_USER', null)
                this.$router.push('/')
            }
        }
    }
})

export default store