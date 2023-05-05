import React,{ Component } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Style from '../css/main.css';
import axios from "axios";
import bcrypt from "bcryptjs";
import { link } from 'react-router-dom';
const lurl = "http://localhost:8000/login";
const curl = "http://localhost:8000/createUser";
const salt = bcrypt.genSaltSync(10);


export default function SignUp(){

    const [credentials, setCredentials] = React.useState({ email : '', password : ''})

    const Navigate = useNavigate();

    //Sign Up server request
    async function createUser(user, pw){
        await axios.post(curl, {
            username : user,
            password : pw
        }, )
        .then((response)=>{
            console.log(response.data)
            if (response.data === "Successfull"){

                return Navigate(  '/',{replace : true})
            }
            
        })
        .catch(error =>{
            console.log(error);
        })
    }

    //Function to receive values from form input
    function getCred(event){

        const {name, value} =  event.target
    setCredentials(prevData =>{
        return {...prevData, [name] : value}
    })
        
        

    }

    //Function to handle the submit method
    function handleSubmit(event){
        event.preventDefault()
        const userpass = bcrypt.hashSync(credentials.password, salt);
    
        createUser(credentials.email, userpass);

    }


    return(
        <div className='login_page'>
            
       <form onSubmit={handleSubmit} className='login_form'>
       <h1>Spotify Sign Up</h1>
      
        <input onChange={getCred} name='email' type="text" placeholder='Email'></input>
        <input onChange={getCred} name = 'password'type="text" placeholder='Password'></input>
        <input name = 'password'type="text" placeholder='Confirm Password'></input>
        <button onSubmit={handleSubmit}>Sign Up</button>

        
       
       </form>


       </div> 
    )
}