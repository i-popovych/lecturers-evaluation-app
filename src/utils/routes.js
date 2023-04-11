import LecturesList from "../pages/LecturesList";
import LoginForm from "../components/LoginForm";
import StudentProfile from "../pages/StudentProfile";
import SignUp from "../components/SignUp"

export const lectures = 'lectures'
export const login = 'login'
export const studentProfile = 'student'
export const registr = 'registration'

export const publicRoutes = [
    {path: lectures, element: <LecturesList/>},
    {path: login, element: <LoginForm/>},
    {path: registr, element: <SignUp/>},
    {path: studentProfile, element: <StudentProfile/>},
]