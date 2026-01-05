import { useState, useEffect} from 'react'

// mine moduler som jeg prøver meg på import { VideoPlay, type Video} from "./components/Video.tsx"

import { CoverReleaseDateDiv } from './CoverReleaseDateDiv.tsx'
import { AlbumAndArtistDiv } from "./AlbumAndArtistDiv.tsx"
import {  type record } from './../audio.tsx'
import { PlayButton, ShareButton, type SkipTrackMode} from './Buttons.tsx'
import { PlayingNow } from "./PlayRecord.tsx"
import { playTrack } from './PlayAudio.tsx'

type PlayMode = "Playing" | "Pausing" | "Not Started";


export function HeroPage({ albumChosen } : { albumChosen : record }) 
{  
     // default album values

    const coverFileName = albumChosen.albumCover;
    const release = albumChosen.releaseDate;
    const albumName = albumChosen.albumName;
    const artistName = albumChosen.artistName;
    
 
   
    // useStates for playing tracks

    const [playMode, setPlayMode] = useState<PlayMode>("Not Started");
    const [currentTrack, setCurrentTrackToPlay] = useState<number>(0);
    
  


    
     useEffect(() =>
    {
        const handleAudioTrackEnded = () =>
        {
            if(currentTrack+1 === albumChosen.tracks.length)  setCurrentTrackToPlay(() => {playTrack(albumChosen.tracks[0].audio, "Play"); return 0} ); 
            else setCurrentTrackToPlay((prev) =>{  playTrack(albumChosen.tracks[prev+1].audio, "Play"); return prev + 1 });
            
        };

        albumChosen.tracks[currentTrack].audio.addEventListener("ended", handleAudioTrackEnded);
        return () => albumChosen.tracks[currentTrack].audio.removeEventListener("ended", handleAudioTrackEnded);
    }, [currentTrack]);


   const handlePlayAlbumClick = () =>
   {
        console.log("play clicked");
        if(playMode === "Playing") playTrack(albumChosen.tracks[currentTrack].audio, "Pause");
        else playTrack(albumChosen.tracks[currentTrack].audio, "Play");
        setPlayMode((prev) =>  prev === "Playing" ? "Pausing" : "Playing");
   }; 



   
    const skipTrack = (skipmode : SkipTrackMode) => 
    {
        console.log("handeling skip track");
        playTrack(albumChosen.tracks[currentTrack].audio, "Stop");

        if(skipmode == "Backwards")
        { 
            playTrack(albumChosen.tracks[currentTrack-1].audio, "Play");
            setCurrentTrackToPlay((prev) => prev-1); 

        }
        else if(skipmode == "Forwards")
        {
            playTrack(albumChosen.tracks[currentTrack+1].audio, "Play");
            setCurrentTrackToPlay((prev) => prev+1);
        }
    }

    return(
        <>
    
        <main>
        <section key={albumChosen.albumName} className='coverSection'>
            <div className="uppperSectionContainerDiv">
            <div className="coverTextWrapper flex">
                <CoverReleaseDateDiv albumName={albumName} coverFile={coverFileName} releaseDate={release} />
                <div className='albumInfoPlayWrapper flex'>
                     <AlbumAndArtistDiv albumName={albumName} albumArtist={artistName}/>
             
                    <div className='playingNowButtonWrapper flex'>
                         <PlayingNow trackNumber={currentTrack} trackName={playMode != "Not Started" ? albumChosen.tracks[currentTrack].title : ""} playing={playMode === "Playing" ? true : false}/>
                   <div className='albumButtonWrapper flex'>
                     <PlayButton 
                     isPlaying={playMode === "Playing" ? true : false} 
                     handleButtonClick={handlePlayAlbumClick} 
                     handleSkipTrack={skipTrack} 
                     canSkipForwards={currentTrack < albumChosen.tracks.length-1 ? true: false}
                     canSkipBackwards={currentTrack > 0 ? true: false}/>
                    <ShareButton/>
                   </div>
                    
                    </div>
                    
                    </div>
           
          
            </div>
            </div>
            
        </section>
        
           
        </main>
      
        </>
    );
    // className={shallIPlayVideo && isButtonGone? "videoPlayDiv" : "buttonPlayYoutubeDiv"}
}