import React, { Component } from 'react';
import Style from '../css/main.css';


export default function Card(props){
    const [toggle, setToggle] = React.useState(false);
    const [tracks, setTracks] = React.useState([]);
    const [artwork, setArtwork] = React.useState('');
    const [artist, setArtist] = React.useState('');
    const albm = props.tracks;
    const title = props.title;

    //Function to set the current track in the album to be played
    function handleClick(event){

        const title = event.target.getAttribute("name")
        const audio = event.target.getAttribute("value")
       //console.log(audio)
        
         props.curl({
       title : title,
            url : audio,
        });
    }

    //Styling
    const carsStyle = {
        display: "flex",
        flexDirection : "column",
        justifyContent: "center",
        height : "auto",
        width: "250px",
        backgroundColor: "#121212",
        borderRadius: "10px",
        fontSize: "0.8rem"
    }
    const descriptionStyle = {

        
            paddingTop: "0.8rem" ,
            position: "relative",
            paddingLeft: "1rem"
          
      
        
        
      
        
    }
     const h2Style = {
        fontSize: "15px"
     }

     const h3Style = {
        fontSize: "12px",
            color: "#b3b3b3"
     }

    const imgStyle = {
        marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            borderRadius:"10px",
            width: "220px",
            height: "auto"
    }

    const drawerAnimation = {

       
    }
     
    const drawerStyle = {
       visibility : toggle ? "visible" : "hidden",
       height : toggle ? "auto": "0px",
       maxHeight : "80px",
       overflowY : "scroll",
       marginTop : "5px",
       padding : "2px",
       borderTop : "Solid white 1px",
       backgroundColor : "grey",
       borderRadius : "5px",
       Animation : drawerAnimation,
       AnimationDuration : "5s"
    }

    const listStyle = {
        listStyleType : "none"   ,
        borderBottom : "Solid 1px white",
        padding : "2px"
    }


    function handleAnimation(){
    if (toggle){


        setToggle(false)
    } else{
        setToggle(true)
    }        
    }

    //Function to group single tracks by album
    function getTracks(){

        const size = albm[title].length;
        const tracks = [];
        setArtwork(albm[title][0].artwork)
        setArtist(albm[title][0].artist)
   
        for (let i = 0; i < size; i++){

           // console.log()
        const a = albm[title][i].audio;
          const track = <li value={albm[title][i].audio}  style = {listStyle}  className='track' onClick={handleClick} name ={albm[title][i].title}>{albm[title][i].title}</li>
          tracks.push(track);     
        }

        setTracks(tracks);


    }



    React.useEffect(() => {
     getTracks()
       
    }, []);
    
    return(

    <div  id = "card" style ={carsStyle} className='Acard' >
        <img name="album-art"  onClick={handleAnimation} src={artwork}   alt = "Album Art" ></img>
        <div style={descriptionStyle} className='description'>
        <h2 name="album-title" style={h2Style}>{title}</h2>
        <h3 style={h3Style}>{artist}</h3>
       { /*<h3 style={h3Style}></h3>*/}
       


        </div>
        <div name="album-track-drawer"  style = {drawerStyle} className='drawer'>
            <ul className='track-list'>
                {tracks}
                </ul>
        </div>
        
    </div>
    )
}