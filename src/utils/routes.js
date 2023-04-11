import LecturesList from "../pages/LecturesList";
import LoginForm from "../components/LoginForm";
import StudentProfile from "../pages/StudentProfile";

export const lectures = 'lectures'
export const login = 'login'
export const studentProfile = 'student'

export const publicRoutes = [
    {path: lectures, element: <LecturesList/>},
    {path: login, element: <LoginForm/>},
    {path: studentProfile, element: <StudentProfile/>},
]