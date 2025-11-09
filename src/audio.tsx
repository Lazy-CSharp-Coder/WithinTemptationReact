interface audioTrack 
{
    trackNumber : Number;
    trackName : String;
    trackMinutes : Number;
    trackSeconds : Number;
    audioToPlay : HTMLAudioElement;
};

const playList =  
{
    theUnforgiving : Array<audioTrack> = [ {trackNumber:  0, trackName : "Why Not Me", trackMinutes : 0, trackSeconds : 0, audioToPlay : new Audio("AudioTracks/01 - Why Not Me.mp3") },
                        {trackNumber : 1, trackName : "Shot In The Dark", trackMinutes : 0, trackSeconds : 0 , audioToPlay : new Audio("AudioTracks/02 - Shot In The Dark.mp3") } ]
};

let isPlaying : boolean = false;
let songPlaying : number = 0;

if(!isPlaying) playList.theUnforgiving[0].audioToPlay.play();
