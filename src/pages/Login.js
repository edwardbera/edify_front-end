import React,{ Component } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Style from '../css/main.css';
import axios from "axios";
import bcrypt from "bcryptjs";
const lurl = "https://edify-back-end.onrender.com/login";
const salt = bcrypt.genSaltSync(10);


export default function Login(){
    
    const [credentials, setCredentials] = React.useState({ email : '', password : ''})

    const Navigate = useNavigate();

    async function login(user, pw){
        await axios.post(lurl, {
            username : user,
            password : pw
        }, )
        .then((response)=>{
         
            if (response.data === "Successfull"){

                return Navigate(  '/Upload',{replace : true})
            }
            
        })
        .catch(error =>{
            console.log(error);
        })
    }


    function getCredentials(event){
        const {name, value} =  event.target
    setCredentials(prevData =>{
        return {...prevData, [name] : value}
    })
        
        

    }

    function handleSubmit(event){
        event.preventDefault()
        login(credentials.email, credentials.password);
    
    }


    return(
        //login Page
        <div className='login_page'>
       {/*Login form */}
       <form onSubmit={handleSubmit} className='login_form'>
       <img className='spotify-logo' src='https://i.ibb.co/WPKDrQ4/edify-logo-2.png' alt ="login-logo"></img>
        <input onChange={getCredentials} name='email' type="text"></input>
        <input onChange={getCredentials} name = 'password'type="password"></input>
        <button onSubmit={handleSubmit}>Login</button>
         {/*Link to Signup form*/}
        <Link className='Signup' to ={"./SignUp"}>
        Sign up
        </Link>
       
       </form>


       </div> 
    )
}