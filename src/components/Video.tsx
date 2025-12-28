
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
           <iframe width={width} height={height} src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )

}