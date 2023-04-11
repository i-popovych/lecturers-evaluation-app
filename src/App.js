import React from 'react';
import Header from "./pages/Header";
import AppRouter from "./components/AppRouter";
import ProfessorProfile from './pages/ProfessorProfile';

const App = () => {
    return (
        <>
            <Header/>
            <AppRouter/>
            <ProfessorProfile/>
        </>
    );
};

export default App;