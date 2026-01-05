import { useState, useEffect} from 'react'

// mine moduler som jeg prøver meg på import { VideoPlay, type Video} from "./components/Video.tsx"
import { VideoPlay, type Video, type YoutubeSuggestion} from "./Video.tsx"
import { CoverReleaseDateDiv } from './CoverReleaseDateDiv.tsx'
import { AlbumAndArtistDiv } from "./AlbumAndArtistDiv.tsx"
import {  type record } from './../audio.tsx'
import { PlayButton, ShareButton, type SkipTrackMode} from './Buttons.tsx'
import { PlayingNow } from "./PlayRecord.tsx"
import { playTrack } from './PlayAudio.tsx'
import { YoutubeInfoButton } from './YoutubeInfoButton.tsx'
import type { YouTubeEvent } from 'react-youtube'



// video stuff

const supernova : Video = 
{
    width : "560",
    height : "315",
    title : "YouTube video player",
    src :"https://www.youtube.com/embed/Z3nb_r18ug0?si=raLyWybJKEYxMm9i" ,
    cssClass : "iframeCSS",
   

}

type PlayMode = "Playing" | "Pausing" | "Not Started";


export function HeroPage({ albumChosen } : { albumChosen : record }) 
{  
     // default album values

    const coverFileName = albumChosen.albumCover;
    const release = albumChosen.releaseDate;
    const albumName = albumChosen.albumName;
    const artistName = albumChosen.artistName;
    
   
    const [shallIPlayVideo, setShallIPlay] = useState<boolean>(false);
    const [isButtonGone, setButtonStatus] = useState<boolean>(false);
    const [youtubeExited, setYoutubeExitStatus] = useState<boolean>(false)
   
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

    const handleAnimationEnd = () =>
    {
        if(shallIPlayVideo)
        {
            setButtonStatus(true);
        } 
    } 

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

    const video : YoutubeSuggestion | undefined = albumChosen.youtubeSuggestions ? albumChosen.youtubeSuggestions[0] : undefined;;

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
        { !youtubeExited && video &&
        <div className="videoPlayDiv">
            {albumChosen.youtubeSuggestions && video && !shallIPlayVideo ?

            <YoutubeInfoButton key={video.id} id={video.id} songTitle={video.songTitle} 
                                imageurl={video.imageurl}
                                released={video.released} 
                                description={video.description}
                                videoInfo={video.videoInfo}
                                handleClick={() => setShallIPlay(true)} />
            : 
            <div>
                {albumChosen.youtubeSuggestions  &&
                <VideoPlay width={video.videoInfo.width} 
                height={video.videoInfo.height} 
                title={video.videoInfo.title} 
                src={video.videoInfo.src} cssClass={video.videoInfo.cssClass} videoStoppedSignal={() => setYoutubeExitStatus(true)}/> 
                }
            </div>
            }
            
        </div>  
        }
           
        </main>
      
        </>
    );
    // className={shallIPlayVideo && isButtonGone? "videoPlayDiv" : "buttonPlayYoutubeDiv"}
}