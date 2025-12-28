import { useState } from 'react'

// mine moduler som jeg prøver meg på import { VideoPlay, type Video} from "./components/Video.tsx"
import { VideoPlay, type Video} from "./Video.tsx"
import { CoverReleaseDateDiv } from './CoverReleaseDateDiv.tsx'
import { AlbumAndArtistDiv } from "./AlbumAndArtistDiv.tsx"
import {  type record } from './../audio.tsx'

const supernova : Video = 
{
    width : "560",
    height : "315",
    title : "Within Temptation : Supernova",
    src : "https://www.youtube.com/embed/Z3nb_r18ug0?si=aWtTi0GJ4ei_t2Dh",
    cssClass : "iframeCSS flipInVideo"

}


export function HeroPage({ albumChosen } : { albumChosen : record }) 
{  
     // default album values

    const coverFileName = albumChosen.albumCover;
    const release = albumChosen.releaseDate;
    const albumName = albumChosen.albumName;
    const artistName = albumChosen.artistName;
       
    const [shallIPlayVideo, setShallIPlay] = useState<boolean>(false);
    const [isButtonGone, setButtonStatus] = useState<boolean>(false)

    const handleAnimationEnd = (event) =>
    {
        if(shallIPlayVideo)
        {
            setButtonStatus(true);
        }
    } 

    return(
        <>
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