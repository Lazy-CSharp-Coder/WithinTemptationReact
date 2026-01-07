import { type AudioTrack } from "../audio"
import type { PlayMode } from "./HeroPage";

export interface TrackListItemOptions extends AudioTrack
{   
    cssClass ? : string,
    currentState : PlayMode
}


export function TrackListItem({nr, title, time,  cssClass, currentState, updateStatus} : TrackListItemOptions & { updateStatus : (trackNumber : number, state : PlayMode) => void})
{
    const playIconUrl = "/icons/playwhite.png";
    const pauseIconUrl = "/icons/pause.png";

    return(

        <li className={`trackListItem scaleInAnim ${cssClass}`}>
            <p>{nr.toLocaleString()}</p>
            <img onClick={() => (currentState === "Playing" ? updateStatus(nr, "Pausing") : updateStatus(nr, "Playing"))} className="playIcon" src={currentState === "Playing" ? pauseIconUrl : playIconUrl} alt="play/pause icon"/>
            <p>{title}</p>
            <p>{time}</p>
        </li>

    );
}