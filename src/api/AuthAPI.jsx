import axios from "axios";

export const base = axios.create({
    baseURL: "http://Testing-env.eba-jequgxzt.eu-north-1.elasticbeanstalk.com"
})

export const AuthAPI = {
    loginUser: async (login, password) => {
        try {
            base.post('login', {
                login, password
            })
        } catch (e) {

        }
    },
    registrationUser: async (login, name, password, role) => {
        try {
            const res = base.post('register', {
                login, name, password, role
            });
        } catch (e) {
            
        }
    }
}

// const fakeStudentsData = [
//     {
//         login: 'Firstname Lastname',
//         role: 'Students'
//     },
//     {
//         login: 'Firstname2 Lastname2',
//         role: 'Students'
//     },
//     {
//         login: 'Firstname3 Lastname3',
//         role: 'Students'
//     }
// ]