import React from 'react';
import './App.css';
import {Header} from "../widgets/Header/Header";
import AppRouter from "./providers/AppRoutes";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header/>
                <AppRouter/>
            </div>
        </div>
    );
}

export default App;
