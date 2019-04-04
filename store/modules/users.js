const state = () => ({
    isPtc: false
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