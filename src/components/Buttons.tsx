interface PlayButton 
{
    isPlaying : boolean,
    handleButtonClick : () => void
}



export function PlayButton({isPlaying, handleButtonClick} : PlayButton)
{
    return( 
      
        <button  className="playButton flex" onClick={handleButtonClick}> {!isPlaying ? <img className="playIcon" src="/icons/playwhite.png"/> : 
                            <img id="pauseIcon" className="pauseIcon" src="/icons/pause.png" alt=""  />}
        PLAY NOW</button>
    );
}

export function ShareButton()
{
    return(
        <button className="shareButton flex"> <img className="shareIcon defaultImage" 
            src="icons/sharewhite.png" alt="shareIcon"/>SHARE</button>

    );
}
