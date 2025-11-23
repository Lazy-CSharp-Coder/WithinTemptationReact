interface albumCover {
    albumName : string,
    coverFile : string,
    releaseDate :  Date,
}

function getProperDateString(release : Date)
{
    const monthNames : string[] =  ["January", "February", "March", "April", "May", "June",
                                        "July", "August", "September", "October", "November", "December"];

    const month = monthNames[release.getMonth()];
    const year = release.getFullYear();

    const day = release.getDate();
    let dayStr: string = "";
    
    switch(day)
    {
        case 1 : 
        case 21 : 
        case 31 : dayStr = day + "st";
                  break;

        case 2  : 
        case 22 : dayStr = day + "nd";
                  break;
                
        case 3  : 
        case 23 : dayStr = day + "rd";
                  break;

        default : dayStr = day + "th";      
                  break;                 
    };

    return`${month} ${day}, ${year}`;
}

export function CoverReleaseDateDiv( { albumName, coverFile, releaseDate} : albumCover) 
{
     return(
     <div className="flex coverReleaseDiv">
              <div className="sideWaysDiv flex">{albumName} <span className="releaseText">- Released {getProperDateString(releaseDate)} </span> </div>
              <img className="coverImage" src={coverFile} alt="cover image"/>
            </div>
        );
}