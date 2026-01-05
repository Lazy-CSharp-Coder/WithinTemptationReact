import {useState} from "react"

import type { YoutubeSuggestion } from "./Video";

export function YoutubeInfoButton({id, imageurl, songTitle, released,  description, videoInfo, handleClick} :  YoutubeSuggestion & { handleClick : () => void})
{
    const [shallPlayVideo, setShallPlayVideo] = useState<boolean>(false);
 
    const handleAnimationEnd =  () =>
    {
        if(!shallPlayVideo) return;
        if(handleClick) handleClick();
    }
   return(
    <button className={!shallPlayVideo ? 'videoPlayButton flipInYAnim' : "videoPlayButton flipOutYAnim"}  onClick={() => setShallPlayVideo(true)} onAnimationEnd={handleAnimationEnd} >

            {/* <div className='flex youtubeInfoButtonDiv' > */}
                
                <div className="wannaWatchDiv flex"><p className="wannaWatchText">Wanna watch</p> <p className="songTitleYoutube scaleInAnimYoutube">{songTitle}</p>?</div>
                <img key={id} className="youtubeImage fadeInAnimYoutube" src={imageurl} alt="dangerous image"/>
                <p className="releasedYoutube"><span key={id} className="releasedYoutubeDate scaleInAnimYoutube"> {released}</span></p>
                
                <p className="descriptionYoutube fadeInAnimYoutube"> {description}</p>
                <div className="clickTextDiv">Click to watch on<img className="youtubeIcon" src="/icons/youtube.png" alt="youtube logo"/></div>
           {/* </div> */}
        
                
    </button>);
}