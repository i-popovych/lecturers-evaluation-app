import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "../utils/routes";

const AppRouter = () => {
    return (
            <Routes>
                {
                    publicRoutes.map(i => {
                        return <Route key={i.path} path={i.path} element={i.element}/>
                    })
                }
            </Routes>
    );
};

export default AppRouter;