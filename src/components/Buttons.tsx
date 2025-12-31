export function PlayButton({isplaying} : {isplaying : boolean})
{
    return( 
      
        <button  className="playButton flex"> {!isplaying ? <img className="playIcon" src="/icons/playwhite.png"/> : 
                            <img id="pauseIcon" className="pauseIcon hide" src="/icons/pause.png" alt=""/>}
        PLAY NOW</button>
    );
}

