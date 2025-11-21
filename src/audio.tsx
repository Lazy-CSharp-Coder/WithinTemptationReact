interface audioTrack 
{
    nr : Number;
    title : String;
    time : String;
    audio : HTMLAudioElement;
};

interface record 
{
    albumName : string;
    albumCover : string;
    releaseDate : Date;
    tracks : audioTrack[]
};
 
const albums : record[] =
[
    {
       albumName : "The Unforgiving",
       albumCover : "/Album/theunforgiving.jpg",
       releaseDate : new Date(2011, 4, 24),
       tracks : 
       [ 
            { nr : 1, title : "Why Not Me", audio : new Audio("AudioTracks/theUnforgiven/01 - Why Not Me.mp3"),  time : "0:0" },
            { nr : 2, title : "Shot In The Dark" ,audio :  new Audio("AudioTracks/theUnforgiven/02 - Shot In The Dark.mp3"), time : "0:0" },
            { nr : 3, title : "In The Middle Of The Night", audio :  new Audio("AudioTracks/theUnforgiven/03 - In The Middle Of The Night.mp3"), time : "0:0"},
            { nr : 4,  title : "Faster", audio :  new Audio("AudioTracks/theUnforgiven/04 - Faster.mp3"),  time : "0:0" },
            { nr : 5,  title : "Fire And Ice", audio :  new Audio("AudioTracks/theUnforgiven/05 - Fire And Ice.mp3"),  time : "0:0" },
            { nr : 6,  title : "Iron", audio :  new Audio("AudioTracks/theUnforgiven/06 - Iron.mp3"), time : "0:0" },
            { nr : 7,  title : "Where Is The Edge", audio :  new Audio("AudioTracks/theUnforgiven/07 - Where Is The Edge.mp3"),    time : "0:0"},
            { nr : 8,  title : "Sinead", audio :  new Audio("AudioTracks/theUnforgiven/08 - Sinead.mp3"),  time : "0:0"} ,
            { nr : 9,  title : "Lost", audio :  new Audio("AudioTracks/theUnforgiven/09 - Lost.mp3"),    time : "0:0"},
            { nr : 10,  title : "Murder", audio : new Audio("AudioTracks/theUnforgiven/10 - Murder.mp3"),  time : "0:0" },
            { nr : 11,  title : "A Demon's Fate", audio : new Audio("AudioTracks/theUnforgiven/11 - A Demon's Fate.mp3"),    time : "0:0" },
            { nr : 12,  title : "Stairway To The Skies", audio : new Audio("AudioTracks/theUnforgiven/12 - Stairway To The Skies.mp3"), time : "0:0"},
                
        ]
    },
    
   
];
let isPlaying : boolean = false;
let songPlaying : number = 0;

if(!isPlaying) playList.theUnforgiving[0].audioToPlay.play();
