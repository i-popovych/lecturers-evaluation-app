import React from 'react';
import Header from "./pages/Header";
import AppRouter from "./components/AppRouter";
import './App.css'
import Racing from './pages/Racing';
import ProfessorProfile from './pages/ProfessorProfile';
import Album from './pages/StudentProfile';

const App = () => {
    return (
        <>
            <Header/>
            <AppRouter/>
            <Racing/>
        </>
    );
};

export default App;