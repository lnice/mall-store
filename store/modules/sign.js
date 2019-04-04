const state = () => ({
    isPopUp: {
        basic: false,
        login: false
    }
})

const mutations = {
    login (state) {
        state.isPopUp.basic = true;
        state.isPopUp.login = true;
    },
    register (state) {
        state.isPopUp.basic = true;
        state.isPopUp.login = false;
    },
    close (state) {
        state.isPopUp.basic = false;
        state.isPopUp.login = false;
    }
}

const actions = {
    login ({ commit }) {
        commit('login')
    },
    register ({ commit }) {
        commit('register')
    },
    close ({ commit }) {
        commit('close')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}