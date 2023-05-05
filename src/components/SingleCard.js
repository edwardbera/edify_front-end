import React, { Component } from 'react';
import Style from '../css/main.css';


export default function Card(props){

    
    function handleClick(){

      
         props.curl({
            title : props.title,
            url : props.audio
        });
    }

    


    return(

    <div onClick={handleClick} className='card'>
        <img src={props.img} alt = "Album Art" ></img>

        <div className='description'>
        <h2>{props.title}</h2>
        <h3>{props.artist}</h3>
        <h3>{props.album}</h3>
       


        </div>
        
    </div>
    )
}