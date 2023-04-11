import axios from "axios";

export const base = axios.create({
    baseURL: "http://localhost:5000/"
})

export const AuthAPI = {
    loginUser: async (login, password) => {
        try {
            const a = await base.post('login', {
                login, password
            })
            console.log(a)
        } catch (e) {

        }
    },
    registrUser: async (login, password, gender, role) => {
        try {
            
        } catch (e) {
            
        }
    }
}