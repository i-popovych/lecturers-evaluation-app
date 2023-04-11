import React, {createContext} from 'react';
import Header from "./pages/Header";
import AppRouter from "./components/AppRouter";
import "./App.css"
const AuthContext = createContext(null)

const App = () => {
    return (
        <AuthContext.Provider value={null}>
            <Header/>
            <AppRouter/>
        </AuthContext.Provider>
    );
};

export default App;