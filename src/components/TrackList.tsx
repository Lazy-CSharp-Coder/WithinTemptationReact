

import { type PlayMode } from "./HeroPage"
import { type TrackListItemOptions, TrackListItem } from "./TrackListItem"

interface TrackListOptions 
{
    tracks : TrackListItemOptions[]
    updateTrackStatus : (trackNumber : number, state : PlayMode)  => void
}


export function TrackList({tracks,  updateTrackStatus} : TrackListOptions)
{
    return(
    <ol className="trackList">
    { tracks.map((item) =>
        
        <TrackListItem nr={item.nr} title={item.title} time={item.time} currentState={item.currentState} audio={item.audio} updateStatus={updateTrackStatus} />)
    }
     </ol>
    )
}