export interface PlayingNow
{
    trackName : string,
    playing : boolean
}


export function PlayingNow({trackName, playing} : PlayingNow)
{
    return(

          <div className="nowPlayingDiv flex"> 
            <img className={`recordIcon ${playing ? "playSong" : "pauseSong"}`} src="icons/record.png" alt="" />  
            <p  className="nowPlayingText">{trackName}</p>
          </div>
    )
}