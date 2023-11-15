import React, { Component, Suspense } from 'react';
import Style from '../css/main.css';
import {Link, useNavigate} from 'react-router-dom';
import { faHome, faUpload } from "@fortawesome/free-solid-svg-icons";
import {  faBook, faQuestion, faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import ContentArea from '../Views/MainView';
import { NavLink } from 'react-router-dom';
import Upload from '../pages/Upload';
import { faArrowLeft, faArrowRight, faNavicon } from "@fortawesome/free-solid-svg-icons";


export default function SideBar(props) {
    
    const [view, setView] = React.useState("Home");
    const [toggleNav, setToggleNave] = React.useState();
    
    //function to review the view clicked
    const openNav = () =>{
        
        var Navstyle = {
            marginLeft : "0%"
        }
       
        if (toggleNav.marginLeft === Navstyle.marginLeft){
                
                Navstyle = {
                marginLeft : "-100%"
            }
            setToggleNave(Navstyle)
            }else{
                 Navstyle = {
                    marginLeft : "0%"
                }
                setToggleNave(Navstyle)

            }
    }
    
    function handleView(event){
        
        const sview = event.target;
        const n = sview.getAttribute('name')

        setView(n)
   
    }

    return(
        <Suspense fallback={<Loading />}>
        <div className='wrapper_wrapper'>
        <FontAwesomeIcon className='navicon' icon={faNavicon} onClick={openNav}/>
         
        <div className ='sidebar-containter' style={toggleNav}>
            <img className='edify-logo' src='https://i.ibb.co/dr2G5Bn/edify-logo-smal.png' alt='Sidebar Logo'></img>
            <ul className='sidebar-menu'>
                <li onClick={handleView} name = "Home"><span><FontAwesomeIcon  icon={faHome} /></span>Home</li>
                <li onClick={handleView} name = "Albums"><span> <FontAwesomeIcon icon={faBook } /></span>Albums</li>
                <li onClick={handleView} name = "About"><span> <FontAwesomeIcon icon={faQuestion } /></span>About</li>
               {/* <Link className = 'side-bar-link' to ={"/Login"}>
                <span> <FontAwesomeIcon icon={faUpload } /></span>Upload</Link>*/}
            </ul>
        </div>
           {view  ? <ContentArea view = {view} selUrl = {props.selUrl}/> : ''}
</div>
</Suspense>
    )
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }