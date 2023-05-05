import React, { Component } from 'react';
import Style from '../css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPerson } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function TopBar(){

    return(

        <div className='TopBar'>
<div>
<img className='spotify-logo-top-bar' src='https://i.ibb.co/WPKDrQ4/edify-logo-2.png' alt='Sidebar Logo'></img>

</div>
<div>1</div>
<div >
    <ul className='topbar-nav'>
        <li className='topbar-nav-item'>
            <Link className='link' to={"/"}>
            <span> <FontAwesomeIcon className='icon' icon={faHome } /></span>
            </Link></li>
            </ul>
</div>


            
        </div>



    )
}