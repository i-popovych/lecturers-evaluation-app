import React, {createContext, useEffect, useState} from 'react';
import Header from "./pages/Header";
import AppRouter from "./components/AppRouter";
import "./App.css"
import {AuthAPI} from "./api/AuthAPI";
import {RatingAPI} from "./api/RatingAPI";
import {Alert} from "@mui/material";
export const AuthContext = createContext(null)

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isInitialize, setIsInitialize] = useState(false)
    window.currentUser = currentUser

    useEffect( () => {
        const fetch = async () => {
            const id = localStorage.getItem('id')
            if (id) {
                let res;
                try {
                    res = await RatingAPI.getStudentItem(id)
                } catch (e) {
                    res = await RatingAPI.getLectureItem(id)
                }
                setCurrentUser(res.data)
            }
            setIsInitialize(true)
        }
        fetch()
    }, [])

    if (!isInitialize) return <Alert>Loading...</Alert>

    return (
        <>
            <AuthContext.Provider value={{ currentUser, setCurrentUser, isInitialize }}>
                <Header />
                <AppRouter />
            </AuthContext.Provider>
        </>
    );
};

export default App;