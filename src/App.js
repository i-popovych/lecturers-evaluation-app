import React from 'react';
import Form from "./components/LoginForm";
import Header from "./pages/Header";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <>
            <Header/>
            <Form/>
            <AppRouter/>
        </>
    );
};

export default App;