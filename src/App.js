import React, {createContext} from 'react';
import Header from "./pages/Header";
import AppRouter from "./components/AppRouter";
<<<<<<< HEAD
import "./App.css"
const AuthContext = createContext(null)
=======
import './App.css'
import Racing from './pages/Racing';
import ProfessorProfile from './pages/ProfessorProfile';
import Album from './pages/StudentProfile';
>>>>>>> vlad

const App = () => {
    return (
        <AuthContext.Provider value={null}>
            <Header/>
            <AppRouter/>
<<<<<<< HEAD
        </AuthContext.Provider>
=======
            <Racing/>
        </>
>>>>>>> vlad
    );
};

export default App;