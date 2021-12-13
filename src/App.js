import React from 'react';
import "./App.scss";
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/LogIn';
 import {
     BrowserRouter as Router,
     Routes,
     Route,
     Navigate
   } from "react-router-dom";
export const App = ()=>{
    return(
        <div className='container'>
            <Router>
            <Routes>
            <Route exact path="/" element={true && <Navigate to="/login" />}>
            
            </Route>
                <Route path="/login" element={<LogIn/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
            </Routes> 
            </Router>
        </div>
        
    );
}