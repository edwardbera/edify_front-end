import React, { Component, useEffect } from 'react';
import Style from '../css/main.css';
import { faPlay, faForward, faBackward, faShuffle, faRepeat , faVolumeHigh, faPause} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BottomBar(props){

    const [playState, setPlaystate] = React.useState(faPlay);
    const player =  document.getElementById("audioplayer");
    const volumeSlider = document.getElementById("volume");
    const [seek, setSeek] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [playtime, setPlaytime] = React.useState("");

        //Updating seek bar
        function updateDuration(){
            setSeek(player.currentTime)
            var temp = (duration-seek).toFixed(2)
               var minutes = Math.floor(temp/60)
               var seconds = (temp%60).toFixed(0)

            setPlaytime(minutes + ':' + seconds)

        }
        //Handling play/pause state
        function handleChange(){
            setPlaystate(faPause);
            setDuration(player.duration);
        }
        //Updating volume change
        function handleVolume(){

           const v =  volumeSlider.value/10

           //console.log(v)


           player.volume = v;

        }      

        //Handle play button
        function handlePlay(){
              
           if (player.paused){
            player.play();
            
           }else{
            player.pause();
            setPlaystate(faPlay);
           }



        }
        
    return(
        //Bottom Controls Menu
        <div className='bottom-bar'>

            {/* Seek bar */}
            <div className='title'>

            <p > {props.audio.title}</p>
            <div>
            <input  type="range" min="0" max={duration} class="slider" id="seekBar" value={seek}/>
            <small className='duration'>{playtime}</small>
            </div>
            </div>
            {/** Media Control Buttons */}
            <div className='controls'>
            <div className='control_button' id ='shuffle-button'>

                <p name ="shuffle-button" className='shuffle-button' ><FontAwesomeIcon icon={faShuffle}   /></p>
                </div>
            <div className='control_button' id ='backward-button'>

                <p name ="backward-button" ><FontAwesomeIcon icon={faBackward}  /></p>
                </div>
                <button name ="play-button" id ='play-button' onClick={handlePlay} className='control_button'>
                <audio name ="audio-player" onTimeUpdate={updateDuration} onPlay = {handleChange} id='audioplayer' src ={props.audio.url} controls autoPlay hidden />
                <p><FontAwesomeIcon icon={playState}  /></p> 
                </button>
                <div className='control_button' id ='forward-button'>

                <p name ="forward-button"><FontAwesomeIcon icon={faForward}  /></p>
                </div>
                <div className='control_button' id ='repeat-button'>

                <p name ="repeat-button"><FontAwesomeIcon icon={faRepeat}  /></p>
                </div>
                            </div>
                        <div className='volume_control'>
                            <div className='control_button'>

           <p><FontAwesomeIcon icon={faVolumeHigh}  /></p>
           
           </div>
           <input name ="volume-slider" onChange={handleVolume} type="range" min="0" max="10"  class="slider" id="volume"/>
           </div>
                            
           
        </div>
    )
}