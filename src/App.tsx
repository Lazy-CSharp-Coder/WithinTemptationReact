
import  BackgroundImage, {animType}   from "./components/BackgroundImage.tsx"
import { HeroPage } from "./components/HeroPage.tsx";
import { albums, type record } from "./audio.tsx";
import { useState, useEffect, useRef } from "react"

import "./App.css"
import { IntroPage } from "./components/IntroPage.tsx";
import { NavSideMenu } from "./components/NavSideMenu.tsx";
import { type ListMenuItem } from './components/ListItem.tsx'
import { type SocialMediaItem } from "./components/NavSideMenu.tsx";
import { Header } from "./components/Header.tsx";
import { type MenuListOptions } from "./components/MenuList.tsx";
import { YoutubeInfoButton } from "./components/YoutubeInfoButton.tsx";
import { type YoutubeSuggestion, VideoPlay } from "./components/Video.tsx";



const socialMediaItemsArray : SocialMediaItem[] =
[
    { id: 1,  url : "/icons/tik-tokwhite.png", cssClass : "socialMediaIcon" },
    { id: 2,  url : "/icons/twitterwhite.png", cssClass : "socialMediaIcon" },
    { id: 3,  url : "/icons/facebookwhite.png", cssClass : "socialMediaIcon" },
    { id: 4,  url : "/icons/twitchwhite.png", cssClass : "socialMediaIcon" },
    { id: 5,  url : "/icons/discordwhite.png", cssClass : "socialMediaIcon" },
    // { id: 6,  url : "", cssClass : "socialMediaIcon" },

];


  const navMenuItemsArray :  ListMenuItem[]  =
    [
        { id : 1, text : "STUDIO ALBUMS",  cssClass :"hamburgerListItem",  },
        { id : 2, text : "MEMBERS",   cssClass :"hamburgerListItem"},
        { id : 3, text : "TOURS",   cssClass :"hamburgerListItem" , },
        { id : 4 ,text : "NEWS" ,  cssClass :"hamburgerListItem" ,  },
        { id : 5, text : "EVENTS" ,  cssClass :"hamburgerListItem"}

    ];
type MetaDataAsyncStatus = "loading" | "finished" | "not started" ;


// gir tid som string
function getTrackTime(timeInSeconds : number)
{
    const minutes = Math.floor(timeInSeconds/60);

    let seconds = Math.floor(timeInSeconds - (minutes * 60));
    const secondsStr : string = seconds < 10 ? `0${seconds}` : seconds.toLocaleString();

    return `${minutes} : ${secondsStr}`;

}


function App() 
{
  const [shownIntro, setShownIntro] = useState<boolean>(false);
  const [albumChosen, setAlbumChosen] = useState<record>(albums[5]);
  const initRef = useRef(false);
  const [displayHamburger, setDisplayHamburger] = useState<boolean>(false);
  const [navMenu, setNavMenu] = useState<MenuListOptions>(
    { 
      id : "Hamburger Nav Menu",
      listItems : navMenuItemsArray,
      handleMenuClick : () => {}
    });

  const [metadataAsyncStatus, setMetadataAsyncStatus] = useState<MetaDataAsyncStatus>("not started");
  const [shallIPlayVideo, setShallIPlay] = useState<boolean>(false);
    // const [isButtonGone, setButtonStatus] = useState<boolean>(false);
  const [youtubeExited, setYoutubeExitStatus] = useState<boolean>(false)

    useEffect(() =>
      {
          let mounted = true;
          // const abortController = new AbortController();
    
          async function getMetaDataFromMP3Files()
          {
              
            setMetadataAsyncStatus("loading");
              const promises = [];
             
              console.log("at least I'm here");

          
            for(let j = 0; j < albums.length; ++j)
            {
                const currTracks = albums[j].tracks;                

              for(let i = 0; i < currTracks.length; ++i)
              {
                  promises.push(new Promise((resolve) =>
                  { 
  
                     const currTrack = currTracks[i];
                      const setTime = () =>
                      {
                          currTrack.time = getTrackTime(currTrack.audio.duration);
                          console.log("set time called width : " +currTrack.time);
                          resolve(`Track number : ${i+1} metadata loaded from file`); 
  
                      }
                     
                      if(currTrack.audio.readyState >= 1 && currTrack.time == "0:0")
                      { setTime();}
                      else 
                      {
                          currTrack.audio.addEventListener("loadedmetadata", setTime, {once: true});
                          currTrack.audio.load();  
                      }
                  }));
              } 
            }

            await Promise.all(promises);
            
          }

          /* from ai
        (async () => {
          try {
            await getMetaDataFromMP3Files();
          } finally {
            if (mounted) setMetadataAsyncStatus("finished");
          }
        })();
*/ 
        return () => { mounted = false; }
      }, []);
  
      
  const handleHamburgerClick =() => 
    {
        console.log("handeling click:");
        setDisplayHamburger((prev) => !prev); 
    }

  const handleMenuListItemClick =  (id : number, text : string) =>
    {
        console.log("You've clicked " + id + " " + text);
        setShallIPlay(false);
        setYoutubeExitStatus(false);
        setAlbumChosen(albums[id]);
      
    }

   
    useEffect( () =>
    {
        if(initRef.current) return;
        initRef.current = true;
        const subAlbumMenu : MenuListOptions = { id : "STUDIO ALBUMS" , listItems : [], handleMenuClick : handleMenuListItemClick, cssClass : "subMenuList"};

        albums.forEach((item, index) =>
        {            
            subAlbumMenu.listItems.push({id : index, text : item.albumName,  cssClass : "subMenuListItem scaleInAnim"});

        });
      console.log("updating table with defined function handleMenuListItemClick. Should appear once in console") ;

    /* obsolete...keep for reference...shall only put function in MenuListOptions
      setNavMenu(prevItems => {return {...prevItems, listItems : prevItems.listItems.map((item) =>
      {  return { ...item, handleClick : handleMenuListItemClick} })  } }); */

      setNavMenu((prev) => ( { ...prev, handleMenuClick: handleMenuListItemClick, listItems : prev.listItems.map((item) => 
        
        {
              console.log("setting new stuff. should run sometimes");
               if(item.text == subAlbumMenu.id) {console.log("setting studio album - should happen once"); return {...item, subMenu : {...subAlbumMenu}  } }
                else return item;

          
        })}));
          
    },[]);

   



     const video : YoutubeSuggestion | undefined = albumChosen.youtubeSuggestions ? albumChosen.youtubeSuggestions[0] : undefined;;
    
 
   if(!shownIntro)   return(<IntroPage exitPage={() => setShownIntro(true)}/>)   // show intro page if it has not been displayed
  return (
    <>
      {metadataAsyncStatus === "finished" ? 
      <>
      <Header hamburgerClick={handleHamburgerClick}/>
      <BackgroundImage key={albumChosen.backgroundImage}  cssClassName='backgroundImage' imageFile={albumChosen.backgroundImage} animNumber={animType.FadeIn} animDuration={"1s"}/>
      <HeroPage albumChosen={albumChosen}/>    
      {displayHamburger  &&
      <NavSideMenu key={navMenu.id} navMenu={navMenu} socialMediaItems={socialMediaItemsArray} handleExit={handleHamburgerClick}/> }
      
      { !youtubeExited && video &&
        <div className="videoPlayDiv">
            {albumChosen.youtubeSuggestions && video && !shallIPlayVideo ?

            <YoutubeInfoButton key={video.id} id={video.id} songTitle={video.songTitle} 
                                imageurl={video.imageurl}
                                released={video.released} 
                                description={video.description}
                                videoInfo={video.videoInfo}
                                cssClass={video.cssClass}
                                handleClick={() => setShallIPlay(true)} />
            : 
            <div>
                {albumChosen.youtubeSuggestions  &&
                <VideoPlay key={albumChosen.albumName} width={video.videoInfo.width} 
                height={video.videoInfo.height} 
                title={video.videoInfo.title} 
                src={video.videoInfo.src} cssClass={video.videoInfo.cssClass} videoStoppedSignal={() => setYoutubeExitStatus(true)}/> 
                }
            </div>
            }
        </div>  
      
    } 
  
      </> : <p key={metadataAsyncStatus}>loading</p>}

    </>
  );
}

export default App