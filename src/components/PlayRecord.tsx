export interface PlayingNow
{
    trackNumber: number,
    trackName : string,
    playing : boolean
}


export function PlayingNow({trackNumber, trackName, playing} : PlayingNow)
{
    let trackNumberStr = trackNumber.toLocaleString();
    if(trackNumber < 10) trackNumberStr = "0" + (trackNumber+1);
    return(

          <div className="nowPlayingDiv flex scaleInAnim"> 
            <img className={`recordIcon ${playing ? "playSong" : "pauseSong"}`} src="icons/record.png" alt="" />  
            <p  className="nowPlayingText"><span className="nowPlayingText">{playing ? `${trackNumberStr} - `: ""}</span>{trackName}</p>
          </div>
    )
}