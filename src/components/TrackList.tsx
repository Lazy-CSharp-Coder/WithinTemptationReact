

import { type PlayMode } from "./HeroPage"
import { type TrackListItemOptions, TrackListItem } from "./TrackListItem"

interface TrackListOptions 
{
    tracks : TrackListItemOptions[]
    setTrackStatus : (trackNumber : number, state : PlayMode)  => void
}


export function TrackList({tracks,  setTrackStatus} : TrackListOptions)
{
    // const [trackList setTrackList] = useState<TrackListItem[]>([]);

    // useEffect(() =>
    // {
    //     let delay = 0;
    //     const delayInc = 300;   
    //     const timeOut = setTimeout(() =>
    //     {
            

    //     })

    // },[]);
   
    return(
    <ol className="trackList">
    { tracks.map((item) =>
        
        <TrackListItem key={item.nr} nr={item.nr} title={item.title} time={item.time} currentState={item.currentState} audio={item.audio} updateStatus={setTrackStatus} />)
    }
     </ol>
    )
}