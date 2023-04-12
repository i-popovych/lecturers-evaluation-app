import LecturesList from "../pages/LecturesList";
import LoginForm from "../components/LoginForm";
import StudentProfile from "../pages/StudentProfile";
import SignUp from "../components/SignUp"
import ProfessorProfile from "../pages/ProfessorProfile";
import Racing from "../pages/Racing";
import AllListProfessor from "../pages/AllListProfessor";

export const lectures = 'lectures'
export const login = 'login'
export const studentProfile = 'student'
export const registr = 'registration'
// export const professorProfile = 'professor'
export const rating = 'rating'
export const allListProfessor = 'professors'

export const publicRoutes = [
    {path: lectures, element: <LecturesList/>},
    {path: login, element: <LoginForm/>},
    {path: registr, element: <SignUp/>},
    {path: studentProfile, element: <StudentProfile/>},
    {path: `${allListProfessor}/item/:id`, element: <ProfessorProfile/>},
    {path: `${allListProfessor}/${rating}` + '/:id', element: <Racing/>},
    {path: allListProfessor, element: <AllListProfessor/>}
]