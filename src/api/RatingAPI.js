import {base} from "./AuthAPI";


export const RatingAPI = {
    getRating: async (id) => {
        return await base.get(`lecturer/getmarks/${id}`)
    },
    getLecturesIds: async () => {
        return await base.get('getLecturers')
    },
    getLectureItem: async (id) => {
        return await base.get(`lecturer/${id}`)
    },
    getStudentItem: async (id) => {
        return await base.get(`student/${id}`)
    },
    getStudentRatingHistory: async (id) => {
        return await base.get(`/student/getmarks/${id}`)
    }
}
