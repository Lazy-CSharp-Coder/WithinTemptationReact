

export type PlayState = "Play" | "Stop" | "Pause";

// interface PlayTrackInfo 
// {
//     audioObject :  HTMLAudioElement,
//     state : PlayState,
//     // set : (stateToSet : PlayState) => void

// }

export function playTrack(audioObject : HTMLAudioElement, state : PlayState)
{
    if(audioObject)
    {
        switch(state)
        {
            case "Play" : audioObject.play();
                          break;

            case "Pause" : audioObject.pause();
                            break;

            case "Stop" : audioObject.pause();          
                          audioObject.currentTime = 0;
                          break;
        }
    }
}