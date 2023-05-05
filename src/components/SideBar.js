import React, { Component, Suspense } from 'react';
import Style from '../css/main.css';
import {Link, useNavigate} from 'react-router-dom';
import { faHome, faUpload } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass, faBook, faAdd, faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import ContentArea from '../Views/MainView';
import { NavLink } from 'react-router-dom';
import Upload from '../pages/Upload';


export default function SideBar(props) {
    
    const [view, setView] = React.useState("Home");
    
    //function to review the view clicked
    function handleView(event){
        
        const sview = event.target;
        const n = sview.getAttribute('name')

        setView(n)
   
    }


    return(

        <Suspense fallback={<Loading />}>

        <div className='wrapper_wrapper'>
        <div className ='sidebar-containter'>
            <img className='spotify-logo' src='https://i.ibb.co/WPKDrQ4/edify-logo-2.png' alt='Sidebar Logo'></img>
            <ul className='sidebar-menu'>
                <li onClick={handleView} name = "Home"><span><FontAwesomeIcon  icon={faHome} /></span>Home</li>
                <li onClick={handleView} name = "search"><span> <FontAwesomeIcon  icon={faMagnifyingGlass } /></span>Search</li>
                <li onClick={handleView} name = "Library"><span> <FontAwesomeIcon  icon={faBook } /></span>Your Library</li>
                <li onClick={handleView} name = "Albums"><span> <FontAwesomeIcon icon={faAdd } /></span>Albums</li>
                <li onClick={handleView} name = "Liked"><span> <FontAwesomeIcon icon={faHeart } /></span>Liked Songs</li>
                <Link className = 'side-bar-link' to ={"/Login"}>
                <span> <FontAwesomeIcon icon={faUpload } /></span>Upload
        </Link>
            </ul>
        </div>

       
           {view  ? <ContentArea view = {view} selUrl = {props.selUrl}/> : ''
           


           }
</div>
</Suspense>
    )
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }