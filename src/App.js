<<<<<<< HEAD
import React, { createContext, useState } from 'react';
=======
import React, {createContext, useEffect, useState} from 'react';
>>>>>>> 2746550cc7f562f188f160e7434d6b46664c076b
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
            <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
                <Header />
                <AppRouter />
            </AuthContext.Provider>
        </>
    );
};

export default App;