import React, { Component, Suspense } from 'react';

import Style from '../css/main.css';
import BottomBar from '../components/BottomBar';
import ContentArea from '../Views/MainView';
import SideBar from '../components/SideBar';
 

export default function Main(){
    const [audio , setAudio] = React.useState("");
    const [view, setView] = React.useState("Home");

    //Function to update current audio to be played
    const selUrl = (audio) => {
        setAudio(audio);
    };


    //Function to Update the current View selection
    const changeView = (view) => {
        setView(view);
    };
    
    return(   
        
    <div className='main-container'>

     <SideBar selUrl = {selUrl} changeView = {changeView}/>
        <BottomBar audio = {audio} />
    </div>
   
    )
}

