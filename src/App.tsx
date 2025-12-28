import { useState } from 'react'

import './App.css'

// mine moduler som jeg prøver meg på 
import { Header } from "./components/Header.tsx"
import { VideoPlay, type Video} from "./components/Video.tsx"
import  BackgroundImage, {animType}   from "./components/BackgroundImage.tsx"
import { CoverReleaseDateDiv } from './components/CoverReleaseDateDiv.tsx'
import { AlbumAndArtistDiv } from "./components/AlbumAndArtistDiv.tsx"
import { albums } from './audio.tsx'

const supernova : Video = 
{
    width : "560",
    height : "315",
    title : "Within Temptation : Supernova",
    src : "https://www.youtube.com/embed/Z3nb_r18ug0?si=aWtTi0GJ4ei_t2Dh",
    cssClass : "iframeCSS flipInVideo"

}


function App() {

  // default album values
  const chosen = 0;
  const coverFileName = albums[chosen].albumCover;
  const release = albums[chosen].releaseDate;
  const albumName = albums[chosen].albumName;
  const artistName = albums[chosen].artistName;
  const backgroundImage = albums[chosen].backgroundImage;
   
  const [shallIPlayVideo, setShallIPlay] = useState<boolean>(false);
  const [isButtonGone, setButtonStatus] = useState<boolean>(false)


  const handleAnimationEnd = (event) =>
    {
       if(shallIPlayVideo)
       {
          setButtonStatus(true);
       }
    } 

  return (
    <>
      <BackgroundImage cssClassName='backgroundImage' imageFile={backgroundImage} animNumber={animType.FadeIn} animDuration={"1s"}/>
      <Header/>
     <main>
      <section className='coverSection'>
        <div className="uppperSectionContainerDiv">
          <div className="coverTextWrapper flex">
            <CoverReleaseDateDiv albumName={albumName} coverFile={coverFileName} releaseDate={release} />
            <AlbumAndArtistDiv albumName={albumName} albumArtist={artistName}/>
          </div>
        </div>
      </section>
      <div className="videoPlayDiv">
        {!shallIPlayVideo || !isButtonGone ? <button className={!shallIPlayVideo ? 'videoPlayButton flipInYAnim' : "videoPlayButton flipOutYAnim"}  onClick={() => setShallIPlay(true)} onAnimationEnd={handleAnimationEnd} >
          <img className='superNovaImg' src="src/assets/Video/supernovePoster.png"/><div className='flex'><span className='wannaText'>Wanna watch <span className='supernovaText'>SUPERNOVA</span> ?</span> </div></button> :
        <VideoPlay width={supernova.width} height={supernova.height} title={supernova.title} src={supernova.src} cssClass={supernova.cssClass} /> }
        </div>  
     </main>
    
    </>
  );
}

export default App