interface audioTrack 
{
    nr : Number;
    title : string;
    time : string;
    audio : HTMLAudioElement;
};

export interface record 
{
    artistName : string,
    albumName : string;
    albumCover : string;
    releaseDate : Date;
    tracks : audioTrack[],
    backgroundImage : string
};
 
export const albums : record[] =
[
    {
       artistName : "Within Temptation",
       albumName : "The Unforgiving",
       albumCover : "/images/theunforgiving.jpg",
       releaseDate : new Date(2011, 4, 24),
       backgroundImage : "/images/background.jpg",
       tracks : 
       [ 
            { nr : 1, title : "Why Not Me", audio : new Audio("/AudioTracks/theUnforgiving/01 - Why Not Me.mp3"),  time : "0:0" },
            { nr : 2, title : "Shot In The Dark" ,audio :  new Audio("/AudioTracks/theUnforgiving/02 - Shot In The Dark.mp3"), time : "0:0" },
            { nr : 3, title : "In The Middle Of The Night", audio :  new Audio("/AudioTracks/theUnforgiving/03 - In The Middle Of The Night.mp3"), time : "0:0"},
            { nr : 4,  title : "Faster", audio :  new Audio("/AudioTracks/theUnforgiving/04 - Faster.mp3"),  time : "0:0" },
            { nr : 5,  title : "Fire And Ice", audio :  new Audio("/AudioTracks/theUnforgiving/05 - Fire And Ice.mp3"),  time : "0:0" },
            { nr : 6,  title : "Iron", audio :  new Audio("/AudioTracks/theUnforgiving/06 - Iron.mp3"), time : "0:0" },
            { nr : 7,  title : "Where Is The Edge", audio :  new Audio("/AudioTracks/theUnforgiving/07 - Where Is The Edge.mp3"),    time : "0:0"},
            { nr : 8,  title : "Sinead", audio :  new Audio("/AudioTracks/theUnforgiving/08 - Sinead.mp3"),  time : "0:0"} ,
            { nr : 9,  title : "Lost", audio :  new Audio("/AudioTracks/theUnforgiving/09 - Lost.mp3"),    time : "0:0"},
            { nr : 10,  title : "Murder", audio : new Audio("/AudioTracks/theUnforgiving/10 - Murder.mp3"),  time : "0:0" },
            { nr : 11,  title : "A Demon's Fate", audio : new Audio("/AudioTracks/theUnforgiving/11 - A Demon's Fate.mp3"),    time : "0:0" },
            { nr : 12,  title : "Stairway To The Skies", audio : new Audio("/AudioTracks/theUnforgiving/12 - Stairway To The Skies.mp3"), time : "0:0"},
                
        ]
    },
    {   artistName : "Within Temptation",
        albumName : "The Heart Of Everything",
        albumCover : "/images/theheartofeverything.png",
        releaseDate : new Date(2007, 4, 12),
        backgroundImage : "/images/theHeartBackground.jpg",
        tracks : [ 
             { nr : 1, title : "The Howling", audio : new Audio("/AudioTracks/theHeart/01 - The Howling.mp3"),  time : "0:0" },
             { nr : 2, title : "What Have You Done" ,audio :  new Audio("/AudioTracks/theHeart/02 - What Have You Done.mp3"), time : "0:0" },
             { nr : 3, title : "Frozen", audio :  new Audio("/AudioTracks/theHeart/03 - Frozen.mp3"), time : "0:0"},
             { nr : 4,  title : "Our Solemn Hour", audio :  new Audio("/AudioTracks/theHeart/04 - Our Solemn Hour.mp3"),  time : "0:0" },
             { nr : 5,  title : "The Heart Of Everything", audio :  new Audio("/AudioTracks/theHeart/05 - The Heart Of Everything.mp3"),  time : "0:0" },
             { nr : 6,  title : "Hand Of Sorrow", audio :  new Audio("/AudioTracks/theHeart/06 - Hand Of Sorrow.mp3"), time : "0:0" },
             { nr : 7,  title : "The Cross", audio :  new Audio("/AudioTracks/theHeart/07 - The Cross.mp3"),    time : "0:0"},
             { nr : 8,  title : "Final Destination", audio :  new Audio("/AudioTracks/theHeart/08 - Final Destination.mp3"),  time : "0:0"} ,
             { nr : 9,  title : "All I Need", audio :  new Audio("/AudioTracks/theHeart/09 - All I Need.mp3"),    time : "0:0"},
             { nr : 10,  title : "The Truth Beneath The Rose", audio : new Audio("/AudioTracks/theHeart/10 - The Truth Beneath The Rose.mp3"),  time : "0:0" },
             { nr : 11,  title : "Forgiven", audio : new Audio("/AudioTracks/theHeart/11 - Forgiven.mp3"),    time : "0:0" },
             { nr : 12,  title : "What Have You Done (Rock Mix)", audio : new Audio("/AudioTracks/theHeart/12 - What Have You Done (Rock Mix).mp3"), time : "0:0"},
            
             ]
    },{   artistName : "Within Temptation",
        albumName : "An Acoustic Night at the Theatre",
     albumCover : "/images/acoustic.jpg",
        releaseDate : new Date(2009, 9, 30),
        backgroundImage : "/images/acousticBackground.jpg", 
        tracks : [ 
             { nr : 1, title : "Towards The End", audio : new Audio("/AudioTracks/acoustic/01 - Towards The End.mp3"),  time : "0:0" },
             { nr : 2, title : "Stand My Ground" ,audio :  new Audio("/AudioTracks/acoustic/02 - Stand My Ground.mp3"), time : "0:0" },
             { nr : 3, title : "Caged", audio :  new Audio("/AudioTracks/acoustic/03 - Caged.mp3"), time : "0:0"},
             { nr : 4,  title : "All I Need", audio :  new Audio("/AudioTracks/acoustic/04 - All I Need.mp3"),  time : "0:0" },
             { nr : 5,  title : "Frozen", audio :  new Audio("/AudioTracks/acoustic/05 - Frozen.mp3"),  time : "0:0" },
             { nr : 6,  title : "Somewhere ( Feat. Anneke Van Ghersbergen )", audio :  new Audio("/AudioTracks/acoustic/06 - Somewhere ( Feat. Anneke Van Ghersbergen )"), time : "0:0" },
             { nr : 7,  title : "The Cross", audio :  new Audio("/AudioTracks/acoustic/07 - The Cross"),    time : "0:0"},
             { nr : 8,  title : "Pale", audio :  new Audio("/AudioTracks/acoustic/08 - Pale"),  time : "0:0"} ,
             { nr : 9,  title : "What Have You Done ( Feat. Keith Caputo )", audio :  new Audio("/AudioTracks/acoustic/09 - What Have You Done ( Feat. Keith Caputo ).mp3"),    time : "0:0"},
             { nr : 10,  title : "Memories", audio : new Audio("/AudioTracks/acoustic/10 - Memories "),  time : "0:0" },
             { nr : 11,  title : "Forgiven", audio : new Audio("/AudioTracks/acoustic/11 - Forgiven.mp3"),    time : "0:0" },
             { nr : 12,  title : "Utopia ( Feat. Chris Jones )", audio : new Audio("/AudioTracks/acoustic/12 - Utopia ( Feat. Chris Jones ).mp3"), time : "0:0"},
            
             ]
    },
     {   artistName : "Within Temptation",
        albumName : "Resist",
        albumCover : "/images/resist.jpg",
        releaseDate : new Date(2009, 9, 30),
        backgroundImage : "/images/resistBackground.jpg",
        tracks : [ 
             { nr : 1, title : "The Reckoning (feat. Jacoby Shaddix)", audio : new Audio("/AudioTracks/resist/01 - The Reckoning (feat. Jacoby Shaddix).mp3"),  time : "0:0" },
             { nr : 2, title : "Endless War" ,audio :  new Audio("/AudioTracks/resist/t03 - Raise Your Banner (feat. Anders Fridén).mp3"), time : "0:0" },
             { nr : 3, title : "Raise Your Banner (feat. Anders Fridén)", audio :  new Audio("/AudioTracks/resist/03 - Frozen.mp3"), time : "0:0"},
             { nr : 4,  title : "Supernova", audio :  new Audio("/AudioTracks/resist/04 - Supernova.mp3"),  time : "0:0" },
             { nr : 5,  title : "Holy Ground", audio :  new Audio("/AudioTracks/resist/05 - Holy Ground.mp3"),  time : "0:0" },
             { nr : 6,  title : "In Vain", audio :  new Audio("/AudioTracks/resist/06 - In Vain.mp3"), time : "0:0" },
             { nr : 7,  title : "Firelight (feat. Jasper Steverlinck)", audio :  new Audio("/AudioTracks/resist/07 - Firelight (feat. Jasper Steverlinck).mp3"),    time : "0:0"},
             { nr : 8,  title : "Mad World", audio :  new Audio("/AudioTracks/resist/08 - Mad World.mp3"),  time : "0:0"} ,
             { nr : 9,  title : "Mercy Mirror", audio :  new Audio("/AudioTracks/resist/09 - Mercy Mirror.mp3"),    time : "0:0"},
             { nr : 10,  title : "Trophy Hunter", audio : new Audio("/AudioTracks/resist/10 - Trophy Hunter Rose.mp3"),  time : "0:0" },
           
            
             ]
    },
     
];


// let isPlaying : boolean = false;
// let songPlaying : number = 0;

// if(!isPlaying) playList.theUnforgiving[0].audioToPlay.play();
