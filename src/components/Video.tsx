import {useState, useEffect} from "react"


export interface Video {   
    height : string,
    width : string,
    title : string,
    src : string,
    videoStoppedSignal : () => void
    cssClass? :  string,
}




export function VideoPlay({ width, height, title, src, cssClass, videoStoppedSignal} : Video)
{ 
    const [shallClose, setCloseStatus] = useState<boolean>(false);

    const handleAnimEnd = () =>
    {
        if(shallClose) 
        {
            videoStoppedSignal();
        }
    }
     useEffect(() =>
    {   
        const handleKeyPress = (event:KeyboardEvent) =>
        {
            if(event.ctrlKey && event.key === "c")
            {
   
                
                event.preventDefault();
                setCloseStatus(true);
    
                console.log("er her");
            }
        }

        window.addEventListener("keydown", handleKeyPress);
        return () => removeEventListener("keydown", handleKeyPress);

    },[]);



    return(
        <div className={`videoPlay ${cssClass} ${shallClose ? "flipOutYAnim" : "flipInVideo"}`} onAnimationEnd={handleAnimEnd} >
           <iframe width={width} height={height} src={src} title={title}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )

}