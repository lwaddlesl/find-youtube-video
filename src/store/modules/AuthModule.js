import { DefaultAPIInstance } from "@/api"
import { AuthAPI } from "@/api/AuthApi"

export const AuthModule = {
    namespaced: true,
    state() {
        return {
            credential: {
                token: localStorage.getItem('token') || null,
                userRole: localStorage.getItem('userRole') || null,
            }
        }
    },
    getters: {
        getUserRole: (state) => state.credential.userRole
    },
    mutations: {
        setToken(state, token) {
            state.credential.token = token
            localStorage.setItem('token', token)
        },
        setUserRole(state, userRole) {
            state.credential.userRole = userRole
            localStorage.setItem('userRole', userRole)
        },
        deleteToken(state) {
            state.credential.token = null
            localStorage.removeItem('token')
        },
        deleteUserRole(state) {
            state.credential.userRole = null
            localStorage.removeItem('userRole')
        },
    },
    actions: {
        onLogin({ commit }, { login, password }) {
            AuthAPI.login({ login, password }).then((res) => {
                commit('setToken', res.data.token)
                commit('setUserRole', res.data.userRole)

            })
        },
        onLogout({ commit }) {
            commit('deleteToken')
            commit('deleteUserRole')
            delete DefaultAPIInstance.defaults.headers['authorization']
        }
    },
}
