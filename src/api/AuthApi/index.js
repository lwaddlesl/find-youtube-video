import { LoginAPIInstance, DefaultAPIInstance } from "@/api"
export const AuthAPI = {
    login(login, password) {
        const url = 'login'
        const data = { login, password }
        return LoginAPIInstance.post(url, data)
    },
    logout() {
        const url = 'logout'
        return DefaultAPIInstance.post(url)
    }
}