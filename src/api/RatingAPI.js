import axios from "axios";

export const base = axios.create({
    baseURL: "http://localhost:8080"
})

export const AuthAPI = {
    setRating: async (id, password) => {
        await base.post(`setmarks/${id}`, {
            login, password
        })
    },
    getRating: async (id) => {
        await base.get(`getmarks/${id}`)
    },
    getLecturesIds: async () => {
        await base.get('getLecturers')
    }
}
