import {base} from "./AuthAPI";


export const RatingAPI = {
    getRating: async (id) => {
        return await base.get(`lecturer/getmarks/${id}`)
    },
    setRating: async (studentId, lecture_id, quality, matherial, fair) => {
        debugger
        const li = String(lecture_id)
        const q = String(quality)
        const m = String(matherial)
        const f = String(fair)
        try {
            return await base.post(`setmarks/${studentId}`, {
                lecturer_id: li, quality: q, matherial: m, fair: f
            })
        } catch (e) {
            console.log(e)
        }
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
    },
    getRaitnedLectures: async (id) => {
        return await base.get(`student/${id}/getlecturers`)
    }
}
