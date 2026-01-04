

export interface PlayButtonOptions 
{
    isPlaying : boolean,
    handleButtonClick : () => void,
    handleSkipTrack : (skipmode : SkipTrackMode ) => void,
    canSkipForwards : boolean,
    canSkipBackwards : boolean
}
export type SkipTrackMode = "Forwards" | "Backwards";


export function PlayButton({isPlaying, handleButtonClick, handleSkipTrack, canSkipForwards, canSkipBackwards} : PlayButtonOptions)
{
  
    return( 
      
        <button className="playButton flex scaleInAnimPlay" >  
        <img onClick={()=>handleSkipTrack("Backwards")}src="/icons/backwardswhite.png" alt="skip backwards" className={`skipButton ${isPlaying && canSkipBackwards ? "show" : "greyOut"}`} /> 
        <span onClick={handleButtonClick} className="playPauseTextSpan">  {!isPlaying ? <img className="playIcon" src="/icons/playwhite.png"/> : 
            <img id="pauseIcon" className="pauseIcon" src="/icons/pause.png" alt=""/> }   
            <span>{isPlaying ? "PAUSE" : "PLAY"} </span>
        </span>
        <img onClick={()=>handleSkipTrack("Forwards")}  src="/icons/forwardswhite.png" alt="skip forwards" className={`skipButton ${isPlaying && canSkipForwards ? "show" : "greyOut"}`} /></button>
    );
}

export function ShareButton()
{
    return(
        <button className="shareButton flex scaleInAnimShare"> <img className="shareIcon defaultImage" 
            src="icons/sharewhite.png" alt="shareIcon"/>SHARE</button>

    );
}
