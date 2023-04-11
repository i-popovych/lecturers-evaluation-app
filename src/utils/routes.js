import LecturesList from "../pages/LecturesList";
import LoginForm from "../components/LoginForm";

export const lectures = 'lectures'
export const login = 'login'

export const publicRoutes = [
    {path: lectures, element: <LecturesList/>},
    {path: login, element: <LoginForm/>},
]