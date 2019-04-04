const state = () => ({
    isPtc: false // 是否签到
})

const mutations = {
    ptc (state) {
        state.isPtc = true
    }
}

const actions = {
    ptc ({ commit }) {
        commit('ptc')
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}