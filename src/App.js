import React, {createContext, useEffect, useState} from 'react';
import Header from "./pages/Header";
import AppRouter from "./components/AppRouter";
import "./App.css"

export const AuthContext = createContext(null)

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isInitialize, setIsInitialize] = useState(true)

    useEffect(() => {

    }, [])

    if (!isInitialize) return <div>Loading...</div>

    return (
        <>
        <AuthContext.Provider value={{currentUser, setCurrentUser}}>
            <Header/>
            <AppRouter/>
        </AuthContext.Provider>
        </>
    );
};

export default App;