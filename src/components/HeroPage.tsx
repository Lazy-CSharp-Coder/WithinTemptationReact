import { useState, useEffect, useRef } from 'react'

// mine moduler som jeg prøver meg på import { VideoPlay, type Video} from "./components/Video.tsx"

import { CoverReleaseDateDiv } from './CoverReleaseDateDiv.tsx'
import { AlbumAndArtistDiv } from "./AlbumAndArtistDiv.tsx"
import {  type record } from './../audio.tsx'
import { PlayButton, ShareButton, type SkipTrackMode} from './Buttons.tsx'
import { PlayingNow } from "./PlayRecord.tsx"
import { playTrack } from './PlayAudio.tsx'
import type { TrackListItemOptions } from './TrackListItem.tsx'

export type PlayMode = "Playing" | "Pausing" | "Not Started";



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
   

    const prevAlbum = useRef<record | null>(null);
    const prevTrackPlayed = useRef<number>(0)
  
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

    // disse to holder styr på gamle audio spilling

    useEffect(() => {
        prevTrackPlayed.current = currentTrack;

    }, [currentTrack]);

    useEffect(() => {
         if(prevAlbum.current && prevAlbum.current != albumChosen)
         {
             const formerTrackIndex = prevTrackPlayed.current ?? 0;  // switches to 0 if undefined ? Ask
             const formerTracks = prevAlbum.current.tracks;
             if(formerTracks && formerTracks[formerTrackIndex] && formerTracks[formerTrackIndex].audio)  // mye skjekking her
                playTrack(formerTracks[formerTrackIndex].audio, "Stop");
            setPlayMode("Not Started");
            setCurrentTrackToPlay(0);

         
          } prevAlbum.current = albumChosen
        }, [albumChosen]);

  const setTrackStatus = (trackNumber : number, state : PlayMode) =>
   {
        console.log("play on a specific track is clicked");
        if(playMode === "Playing" && currentTrack != trackNumber)
            {
               playTrack(albumChosen.tracks[currentTrack].audio, "Stop");
               setPlayMode("Not Started");
            }
        
        if(state === "Pausing" && currentTrack === trackNumber)
            { playTrack(albumChosen.tracks[currentTrack].audio, "Pause");
                setPlayMode("Pausing");
            }
        else if(state === "Playing" && currentTrack != trackNumber)
        {
            setCurrentTrackToPlay(trackNumber);
            setPlayMode("Playing");
       
        }  

   }; 

  
    
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

    function getTrackListWithOptions() : TrackListItemOptions[]
    {
        const tracksWithOptions : TrackListItemOptions[] = albumChosen.tracks.map((item, index) =>(
           { ...item ,  currentState : ( playMode === "Playing" && currentTrack == index) ? "Playing" : "Not Started"})
        )
        return tracksWithOptions;
    }
    

    return(
        <>
    
        <main key={albumChosen.albumName}>
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
        <section className='trackSection'>
           {/* <TrackList key={albumChosen.albumName} tracks={getTrackListWithOptions()} setTrackStatus={setTrackStatus} /> */}
     
            

        </section>
           
        </main>
      
        </>
    );
    // className={shallIPlayVideo && isButtonGone? "videoPlayDiv" : "buttonPlayYoutubeDiv"}
}