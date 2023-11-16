import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage";
import {MainPage} from "../../pages/MainPage";


const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
    );
};

export default AppRouter;
