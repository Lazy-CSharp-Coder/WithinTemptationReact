export function PlayButton({isplaying} : {isplaying : boolean})
{
    return( 
      
        <button  className="playButton flex"> {!isplaying ? <img className="playIcon" src="/icons/playwhite.png"/> : 
                            <img id="pauseIcon" className="pauseIcon" src="/icons/pause.png" alt=""/>}
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
