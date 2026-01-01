import { useState, useEffect, type KeyboardEventHandler } from 'react'

// mine moduler som jeg prøver meg på import { VideoPlay, type Video} from "./components/Video.tsx"
import { VideoPlay, type Video} from "./Video.tsx"
import { CoverReleaseDateDiv } from './CoverReleaseDateDiv.tsx'
import { AlbumAndArtistDiv } from "./AlbumAndArtistDiv.tsx"
import {  type record } from './../audio.tsx'
import { NavSideMenu, type SocialMediaItem, type ListMenuItem } from './NavSideMenu.tsx'
import { Header } from "./Header.tsx"
import { PlayButton, ShareButton } from './Buttons.tsx'
import { PlayingNow } from "./PlayRecord.tsx"
import { playTrack } from './PlayAudio.tsx'


// video stuff

const supernova : Video = 
{
    width : "560",
    height : "315",
    title : "YouTube video player",
    src :"https://www.youtube.com/embed/Z3nb_r18ug0?si=raLyWybJKEYxMm9i" ,
    cssClass : "iframeCSS",
   

}

const socialMediaItemsArray : SocialMediaItem[] =
[
    { id: 1,  url : "/icons/tik-tokwhite.png", cssClass : "socialMediaIcon" },
    { id: 2,  url : "/icons/twitterwhite.png", cssClass : "socialMediaIcon" },
    { id: 3,  url : "/icons/facebookwhite.png", cssClass : "socialMediaIcon" },
    { id: 4,  url : "/icons/twitchwhite.png", cssClass : "socialMediaIcon" },
    { id: 5,  url : "/icons/discordwhite.png", cssClass : "socialMediaIcon" },
    // { id: 6,  url : "", cssClass : "socialMediaIcon" },

];

const  placeHolderClick = ()=> { console.log("ikke implementert ennå ") };

const navMenuItemsArray :  ListMenuItem[]  =
[
    { id : 1, name : "STUDIO ALBUMS", handleClick : placeHolderClick, cssClass :"hamburgerListItem"  },
    { id : 2, name : "MEMBERS", handleClick : placeHolderClick ,  cssClass :"hamburgerListItem"  },
    { id : 3, name : "TOURS", handleClick : placeHolderClick,  cssClass :"hamburgerListItem"  },
    { id : 4 ,name : "NEWS" , handleClick : placeHolderClick , cssClass :"hamburgerListItem"  },
    { id : 5, name : "EVENTS" , handleClick : placeHolderClick , cssClass :"hamburgerListItem"  }

];

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
    const [displayHamburger, setDisplayHamburger] = useState<boolean>(false);

    // useStates for playing tracks

    const [playMode, setPlayMode] = useState<PlayMode>("Not Started");
    const [currentTrack, setCurrentTrackToPlay] = useState<number>(0);
    

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


    const handleHamburgerClick = () => {
        console.log("handeling click:");
        setDisplayHamburger((prev) => !prev); 
    }

    return(
        <>
        <Header hamburgerClick={handleHamburgerClick}  />
        <main>
        <section className='coverSection'>
            <div className="uppperSectionContainerDiv">
            <div className="coverTextWrapper flex">
                <CoverReleaseDateDiv albumName={albumName} coverFile={coverFileName} releaseDate={release} />
                <div className='albumInfoPlayWrapper flex'>
                     <AlbumAndArtistDiv albumName={albumName} albumArtist={artistName}/>
             
                    <div className='playingNowButtonWrapper flex'>
                         <PlayingNow trackName={playMode != "Not Started" ? albumChosen.tracks[currentTrack].title : ""} playing={playMode === "Playing" ? true : false}/>
                   <div className='albumButtonWrapper flex'>
                     <PlayButton isPlaying={playMode === "Playing" ? true : false} handleButtonClick={handlePlayAlbumClick}/>
                    <ShareButton/>
                   </div>
                    
                    </div>
                    
                    </div>
           
          
            </div>
            </div>
            
        </section>
        {/* <div className="videoPlayDiv">
            {!shallIPlayVideo || !isButtonGone ? <button className={!shallIPlayVideo ? 'videoPlayButton flipInYAnim' : "videoPlayButton flipOutYAnim"}  onClick={() => setShallIPlay(true)} onAnimationEnd={handleAnimationEnd} >
            <img className='superNovaImg' src="/images/supernovaPoster2.jpg"/><div className='flex'><span className='wannaText'>Wanna watch <span className='supernovaText'>SUPERNOVA</span> ?</span> </div></button> :
            <VideoPlay width={supernova.width} height={supernova.height} title={supernova.title} src={supernova.src} cssClass={supernova.cssClass} videoStoppedSignal={() => setShallIPlay(false) }/> }
            </div>   */}
        </main>
        {displayHamburger  &&
            <NavSideMenu navMenuItems={navMenuItemsArray} socialMediaItems={socialMediaItemsArray} handleExit={handleHamburgerClick}/> 
        
           }   
        </>
    );
}