import React from 'react';
import Main from "./pages/Main.js";
import Login from "./pages/Login";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import SignUp from './pages/SignUp.js';
import Upload  from './pages/Upload.js';

export default function App(){

    return(
        //Paths
        <BrowserRouter> <Routes>
            <Route path ='/' element ={<Main/>}/>
            <Route path ='/Login' element ={<Login/>}/>
            <Route path ='/SignUp' element ={<SignUp/>}/>
            <Route path ='/Upload' element ={<Upload/>}/>
        </Routes>
        </BrowserRouter>
       
    )
}