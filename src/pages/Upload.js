import React,  { useRef, ChangeEvent, Component, useState } from 'react';
import Style from '../css/main.css';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { Button } from 'style-components';
import TopBar from '../components/TopBar';



export default function Upload(){
    const Navigate = useNavigate();
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});
    const uri = process.env.REACT_APP_UPLOAD;
    const [data, setData] = useState({});
    const [artwork, setArtwork] = useState(null);
    const [audio, setAudio] = useState(null)


    function onInput(event){

      
     
        const {name, value} = event.target;
        setData(prevData =>{
          return {...prevData, [name] : value}
      })

     

    }

    function onImg(event){

      const {name, files} = event.target;
      setArtwork( files[0]);

    }

    function onAudio(event){
      const {name, files} = event.target;
      setAudio(files[0]);
    }

    function onButton(event){
      const formData = new FormData();

      formData.append('files', data.title);
      formData.append('files', data.album);
      formData.append('files', artwork);
      formData.append('files', data.artist);
      formData.append('files',  audio);
      event.preventDefault()
      uploadFiles(formData);

    }

      async function uploadFiles(formdata){
        console.log(formdata)
        await axios.post( uri,  formdata, {headers: {'Content-Type': 'multipart/form-data'}}).then((response)=>{
          
          if (response.data === "Complete"){

              return Navigate(  '/Main',{replace : true})
          }
          
      })
      .catch(error =>{
          console.log(error);
      })


      }




    return(
      
  <div className='upload-wrapper'>
   
  <TopBar/>


<form  onSubmit={onButton} className='uploadForm' enctype="multipart/form-data">
      <label>Artwork
  <input className='fileInput' type="file" onChange ={onImg} name='artwork'  placeholder='Artwork'></input>
  </label>
  <input type="text" onChange={onInput} name='title' placeholder='Title'></input>

  <input type="text" onChange={onInput}  name='album'  placeholder='Album'></input>

  <input type="text" onChange={onInput}  name='artist' placeholder='Artist'></input>
  <label>Audio
  <input className='fileInput' type="file" name='audio'  onChange = {onAudio} placeholder='Audio'></input>
  </label>
  <Button onSubmit={onButton}>Upload</Button>


</form>

            </div>

            

  
    
      
    )







}
