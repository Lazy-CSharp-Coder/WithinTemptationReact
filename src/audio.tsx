
import type { YoutubeSuggestion } from "./components/Video";

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
    backgroundImage : string,
    youtubeSuggestions? : YoutubeSuggestion[]
};


const hydraSuggestions : YoutubeSuggestion[] =
[
     {
        id : 1,
        imageurl : "/images/youtube/dangerous.jpg",
        songTitle : "Dangerous",
        released : "20th December 2013",
        description : `"Dangerous" is the second single from the album. The song features guest vocals from Howard Jones, the lead singer from the group Light the Torch.`,
        videoInfo : { width : "560", height: "315", title : "Youtube video player", src :"https://www.youtube.com/embed/MAiV8RpqzME?si=SG9NOQ1oNo7n3KaD" , cssClass : "iframeCSS" }


        }
];


const resistSuggestions : YoutubeSuggestion[] =
[
     {
        id : 2,
        imageurl : "/images/youtube/supernova.jpg",
        songTitle : "Supernova",
        released : "11th October 2018",
        description : `"Supernova" is the fifth single from the album. The song was exclusively presented at the start of the Resist Tour.`,
        videoInfo : { width : "560", height: "315", title : "Youtube video player",src : "https://www.youtube.com/embed/Z3nb_r18ug0?si=raLyWybJKEYxMm9i" , cssClass : "iframeCSS" }


        }
];

const theUnforgivingSuggestions :  YoutubeSuggestion[] =
[
     {
        id : 3,
        imageurl : "/images/youtube/faster.jpg",
        songTitle : "Faster",
        released : "21st January 2011",
        description : `Faster" is the first single from the album. The lyrics convey themes of personal freedom, breaking boundaries, and pursuing one's desires intensely.`,
        videoInfo : { width : "560", height: "315", title : "Youtube video player",src : "https://www.youtube.com/embed/9lNNYrlCeDI?si=6GtySLtKlV8TBsa2"  , cssClass : "iframeCSS" }


        }
];

const theHeartSuggestions : YoutubeSuggestion[] =
[
     {
        id : 4,
        imageurl : "/images/youtube/thewholeworld.jpg",
        songTitle : "The Whole World is Watching",
        released : "31st January 2014",
        description : `The Whole World is Watching" is the thir single from the album. The lyrics convey themes about setbacks. In this versison Dave Pirner accompanies Sharon den Adel.`,
        videoInfo : { width : "560", height: "315", title : "Youtube video player", src : "https://www.youtube.com/embed/VRNPkJ0ELPc?si=AB0lnA7M-GPvZgOS" , cssClass : "iframeCSS" },
        cssClass : "theWholeWorld"


    }
];


const acousticSuggestions : YoutubeSuggestion[] =
[
     {
        id : 5,
        imageurl : "/images/youtube/acoustic.jpg",
        songTitle : "Somewhere",
        released : "13th November 2008",
        description : `"Somewhere" is originally from the album "The Silent Force". Here the lead vocalist teams up with Anneke Van Giersbergen with the support of The Metropole Orchestra.`,
        videoInfo : { width : "560", height: "315", title : "Youtube video player", src : "https://www.youtube.com/embed/7eqBmEO5MHE?si=l-lfYXiq4v-tlOaE" , cssClass : "iframeCSS" }


    }
];



const theSilentForceSuggestions : YoutubeSuggestion[] =
[
     {
        id : 6,
        imageurl : "/images/youtube/standmyground.jpg",
        songTitle : "Stand My Ground",
        released : "17th November 2004",
        description : `"Stand My Ground" is the first single from the album. It has become one of the band's signature songs and is performed on their set of almost every concert since its release.`,
        videoInfo : { width : "560", height: "315", title : "Youtube video player", src : "https://www.youtube.com/embed/98xh5Hb9QAM?si=WO11pz39bVx32ilN"  , cssClass : "iframeCSS" }


    }
];



const motherEarthSuggestions : YoutubeSuggestion[] =
[
     {
        id : 7,
        imageurl : "/images/youtube/ourfarwell.jpg",
        songTitle : "Our Farwell",
        released : "24th December 2000",
        description : `"Our Farwell" is the first single from the album. The song directly addresses someone experiencing deep sadness, assuring them they aren't truly alone and that the departed spirit will watch over them.` +
        "The video shows a live recording featuring Gea Gijsbertsen",
        videoInfo : { width : "560", height: "315", title : "Youtube video player", src : "https://www.youtube.com/embed/KnkKejof2jk?si=fHqRIi3Favfu7pT5"   , cssClass : "iframeCSS" }


    }
];

 export const albums : record[] =
[ {
       artistName : "Within Temptation",
       albumName : "Mother Earth",
       albumCover : "/images/motherEarth.jpg",
       releaseDate : new Date(2011, 4, 24),
       backgroundImage : "/images/motherEarthBackground.jpg",
       tracks : 
       [ 
            { nr : 1, title : "Mother Earth", audio : new Audio("/AudioTracks/motherEarth/01 - Mother Earth.mp3"),  time : "0:0" },
            { nr : 2, title : "Ice Queen" ,audio :  new Audio("/AudioTracks/motherEarth/02 - Ice Queen.mp3"), time : "0:0" },
            { nr : 3, title : "Our Farewell", audio :  new Audio("/AudioTracks/motherEarth/03 - Our Farewell.mp3"), time : "0:0"},
            { nr : 4,  title : " Caged", audio :  new Audio("/AudioTracks/motherEarth/04 - Caged.mp3"),  time : "0:0" },
            { nr : 5,  title : "The Promise", audio :  new Audio("/AudioTracks/motherEarth/05 - The Promise.mp3"),  time : "0:0" },
            { nr : 6,  title : "Never-Ending Story", audio :  new Audio("/AudioTracks/motherEarth/06 - Never-Ending Story.mp3"), time : "0:0" },
            { nr : 7,  title : "Deceiver Of Fools", audio :  new Audio("/AudioTracks/motherEarth/07 - Deceiver Of Fools.mp3"),    time : "0:0"},
            { nr : 8,  title : "Intro", audio :  new Audio("/AudioTracks/motherEarth/08 - Intro.mp3"),  time : "0:0"} ,
            { nr : 9,  title : "Dark Wings", audio :  new Audio("/AudioTracks/motherEarth/09 - Dark Wingst.mp3"),    time : "0:0"},
            { nr : 10,  title : "In Perfect Harmony", audio : new Audio("/AudioTracks/motherEarth/10 - In Perfect Harmony.mp3"),  time : "0:0" },
           
                
        ],
        youtubeSuggestions : motherEarthSuggestions
    },
    {   artistName : "Within Temptation",
        albumName : "The Silent Force",
        albumCover : "/images/theSilentForce.jpg",
        releaseDate : new Date(2007, 4, 12),
        backgroundImage : "/images/theSilentForceBackground.png",
        tracks : [ 
             { nr : 1, title : "Intro", audio : new Audio("/AudioTracks/theSlientForce/01 - Intro.mp3"),  time : "0:0" },
             { nr : 2, title : "See Who I Am" ,audio :  new Audio("/AudioTracks/theSlientForce/02 - See Who I Am.mp3"), time : "0:0" },
             { nr : 3, title : "Jillian (I'd Give My Heart)", audio :  new Audio("/AudioTracks/theSlientForce/03 - Jillian (I'd Give My Heart).mp3"), time : "0:0"},
             { nr : 4,  title : "Stand My Ground", audio :  new Audio("/AudioTracks/theSlientForce/04 - Stand My Ground.mp3"),  time : "0:0" },
             { nr : 5,  title : "Pale", audio :  new Audio("/AudioTracks/theSlientForce/05 - Pale.mp3"),  time : "0:0" },
             { nr : 6,  title : "Forsaken", audio :  new Audio("/AudioTracks/theSlientForce/06 - Forsaken.mp3"), time : "0:0" },
             { nr : 7,  title : "Angels", audio :  new Audio("/AudioTracks/theSlientForce/07 - Angels.mp3"),    time : "0:0"},
             { nr : 8,  title : "Memories", audio :  new Audio("/AudioTracks/theSlientForce/08 - Memories.mp3"),  time : "0:0"} ,
             { nr : 9,  title : "Aquarius", audio :  new Audio("/AudioTracks/theSlientForce/09 - Aquariusmp3"),    time : "0:0"},
             { nr : 10,  title : "It's The Fear", audio : new Audio("/AudioTracks/theSlientForce/10 - It's The Fear.mp3"),  time : "0:0" },
             { nr : 11,  title : "Somewhere", audio : new Audio("/AudioTracks/theSlientForce/11 - Somewhere.mp3"),    time : "0:0" },
          
             ],
             youtubeSuggestions : theSilentForceSuggestions

    }, {   artistName : "Within Temptation",
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
            
             ],
             youtubeSuggestions : theHeartSuggestions
    }, {   artistName : "Within Temptation",
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
            
             ],
             youtubeSuggestions : acousticSuggestions
    },
    {
       artistName : "Within Temptation",
       albumName : "The Unforgiving", 
       albumCover : "/images/theunforgiving.jpg",
       releaseDate : new Date(2011, 4, 24),
       backgroundImage : "/images/theUnforgivingBackground.jpg",
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
                
        ],
        youtubeSuggestions : theUnforgivingSuggestions

    },  {   artistName : "Within Temptation",
        albumName : "Hydra",
        albumCover : "/images/hydra.jpg",
        releaseDate : new Date(2009, 9, 30),
        backgroundImage : "/images/hydraBackground3.jpg",
        tracks : [ 
             { nr : 1, title : "Let Us Burn", audio : new Audio("/AudioTracks/resist01 - Let Us Burn.mp3"),  time : "0:0" },
             { nr : 2, title : "Dangerous (Feat. Howard Jones)" ,audio :  new Audio("/AudioTracks/resist/02 - Dangerous (Feat. Howard Jones).mp3"), time : "0:0" },
             { nr : 3, title : "And We Run (Feat. Xzibit)", audio :  new Audio("/AudioTracks/resist/03 - And We Run (Feat. Xzibit).mp3"), time : "0:0"},
             { nr : 4,  title : "Paradise (What About Us) (Feat. Tarja)", audio :  new Audio("/AudioTracks/resist04 - Paradise (What About Us) (Feat. Tarja).mp3"),  time : "0:0" },
             { nr : 5,  title : "Edge Of The World", audio :  new Audio("/AudioTracks/resist/05 - Edge Of The World.mp3"),  time : "0:0" },
             { nr : 6,  title : "Silver Moonlight", audio :  new Audio("/AudioTracks/resist/06 - Silver Moonlight.mp3"), time : "0:0" },
             { nr : 7,  title : "Covered By Roses", audio :  new Audio("/AudioTracks/resist/07 - Covered By Roses).mp3"),    time : "0:0"},
             { nr : 8,  title : "Dog Days", audio :  new Audio("/AudioTracks/resist/08 - Dog Days.mp3"),  time : "0:0"} ,
             { nr : 9,  title : "Tell Me Why", audio :  new Audio("/AudioTracks/resist/09 - Tell Me Why.mp3"),    time : "0:0"},
             { nr : 10,  title : "Whole World Is Watching (Feat. Dave Pirner)", audio : new Audio("/AudioTracks/resist/10 - Whole World Is Watching (Feat. Dave Pirner) Rose.mp3"),  time : "0:0" },
           
            
             ],
             youtubeSuggestions : hydraSuggestions
    },
  
     {   artistName : "Within Temptation",
        albumName : "Resist",
        albumCover : "/images/resist.jpg",
        releaseDate : new Date(2009, 9, 30),
        backgroundImage : "/images/resistBackground.jpg",
        tracks : [ 
             { nr : 1, title : "The Reckoning (feat. Jacoby Shaddix)", audio : new Audio("/AudioTracks/resist/01 - The Reckoning (feat. Jacoby Shaddix).mp3"),  time : "0:0" },
             { nr : 2, title : "Endless War" ,audio :  new Audio("/AudioTracks/resist/02 - Endless War.mp3"), time : "0:0" },
             { nr : 3, title : "Raise Your Banner (feat. Anders Fridén)", audio :  new Audio("/AudioTracks/resist/03 - Raise Your Banner (feat. Anders Fridén).mp3"), time : "0:0"},
             { nr : 4,  title : "Supernova", audio :  new Audio("/AudioTracks/resist/04 - Supernova.mp3"),  time : "0:0" },
             { nr : 5,  title : "Holy Ground", audio :  new Audio("/AudioTracks/resist/05 - Holy Ground.mp3"),  time : "0:0" },
             { nr : 6,  title : "In Vain", audio :  new Audio("/AudioTracks/resist/06 - In Vain.mp3"), time : "0:0" },
             { nr : 7,  title : "Firelight (feat. Jasper Steverlinck)", audio :  new Audio("/AudioTracks/resist/07 - Firelight (feat. Jasper Steverlinck).mp3"),    time : "0:0"},
             { nr : 8,  title : "Mad World", audio :  new Audio("/AudioTracks/resist/08 - Mad World.mp3"),  time : "0:0"} ,
             { nr : 9,  title : "Mercy Mirror", audio :  new Audio("/AudioTracks/resist/09 - Mercy Mirror.mp3"),    time : "0:0"},
             { nr : 10,  title : "Trophy Hunter", audio : new Audio("/AudioTracks/resist/10 - Trophy Hunter Rose.mp3"),  time : "0:0" },
           
            
             ],
        youtubeSuggestions : resistSuggestions
    },
     
];


// let isPlaying : boolean = false;
// let songPlaying : number = 0;

// if(!isPlaying) playList.theUnforgiving[0].audioToPlay.play();
