import React, { Component, useEffect, Suspense } from 'react';
import Style from '../css/main.css';
import {Link, useNavigate} from 'react-router-dom';
import { faArrowLeft, faArrowRight, faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../components/SingleCard';
import axios, { all } from "axios";
import AlbumCard from '../components/AlbumCard';
import AboutCard from '../components/AboutCard';

export default function ContentArea( props){
    const Navigate = useNavigate();
    const [current, setCurrent] = React.useState('');
    const [albums, setAlbums] = React.useState([]);
  
    //Prop setting the current playing tract
    props.selUrl(current);
    
    //Function to set the current playing tract
    const curl = (current) => {
        setCurrent(current);
    }

   //Server request to retrieve singles from DB 
    async function getSingles(){
        
        await axios.get('http://localhost:8000/getAlbums', {
        }, )
        .then((response)=>{
           
        
            console.log(response.data);

            const albumdata = response.data.map((album)=>{
                
                return <Card img = {album.artwork} title={album.title} artist = {album.artist} album = {album.album} audio = {album.audio} curl = {curl} />
            });

            setAlbums(albumdata)
        })
        .catch(error =>{
            console.log(error);
        })

       




    }

    //Server request to retrieve Albums from DB 
    async function getAlbums(){
        //console.log('getting playlists')
        await axios.get('http://localhost:8000/getAlbums', {
        }, )
        .then((response)=>{
           
        
            //console.log(response.data);

            const albumdata = response.data.reduce((group , arr) =>{
                const {album} = arr;
                group[album] = group[album] ?? [];
                group[album].push(arr)
               
                //console.log(Object.keys(group))
                return group;
            },{});

            const abrr = [];

            const ab = Object.keys(albumdata);
           for (let i = 0 ; i < ab.length; i++){
            //console.log(albumdata[ab[i]])
            abrr.push(<AlbumCard title = {ab[i]} tracks = {albumdata} curl = {curl}/>); 
           }
           setAlbums(abrr);
           // console.log(s);
        })


        .catch(error =>{
            console.log(error);
        })
        
    } 

        //If statement to Change View based on Linked Clicked in the sidebar
    
    
  

    useEffect(() => {
       
        if (props.view === "Home"){
            getSingles()
    
        } else if (props.view === "Albums"){
            
           getAlbums()
        } else if (props.view === "About"){
            setAlbums(<AboutCard/>)
        }
       
 
    },[props.view]);
     

    return(
        <Suspense fallback={<Loading/>}>
        <div className='content-wrapper'>
           {/* Top Navigation area */}
            <div className='top-nav'>
                
               
                <div className='loggeduser'></div>
                
            </div>

            <div className='content'>
                 {/* Heading Showing the current View */}
            
                 {/* Main area where media will be displayed */}
                 <div className='header-wrapper'>
                           <h1 id='header'  className='view_name'  > {props.view}</h1>
<div className='header-text'>
<h2 className='header_title'>LORD EDWARD</h2>
                 <p>The fresh Prince of R&B</p>
</div>

                 
                 <img className='header-image' src="https://i.ibb.co/pQ3dnzc/IMG-2499.png" alt="header" />
                 
                 </div>
                 
                              <div className='content-scroll'>
                                {
                                    props.view === "Home" ?
                                        <div className='videos'>
                                        <iframe width="350" height="195" src="https://www.youtube.com/embed/tICaBbCPQr4?si=gn7iuJ2HJsQY8qM5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="350" height="195" src="https://www.youtube.com/embed/6PYkvQXMGZY?si=Bj9BUjugozLjv_nR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                         <iframe width="350" height="195"src="https://www.youtube.com/embed/Rzq-WlAAfCE?si=kmlkMqsRWliVqU2V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                        : ''
                                }
                                 { albums}       
               
                </div>
               
            </div>


        </div>
        </Suspense>
    )
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
