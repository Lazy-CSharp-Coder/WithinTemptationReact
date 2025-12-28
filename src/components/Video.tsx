// import  Youtube, { type YouTubeProps} from "react-youtube"
import React from 'react';

export interface Video {   
    height : string,
    width : string,
    title : string,
    src : string,
    cssClass? :  string,
}




export function VideoPlay({ width, height, title, src, cssClass} : Video)
{ 
    return(
        <div className={`videoPlay ${cssClass}`} >
           <iframe width={width} height={height} src={src} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" ></iframe>
        </div>
    )

}