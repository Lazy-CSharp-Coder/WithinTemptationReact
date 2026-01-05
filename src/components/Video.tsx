import {useState, useEffect} from "react"

export interface Video {   
    height : string,
    width : string,
    title : string,
    src : string,
     cssClass? :  string,
       videoStoppedSignal?: () => void
}

export interface YoutubeSuggestion 
{
    id : number,
    imageurl : string,
    songTitle : string,
    released : string,
    description : string,
    videoInfo : Video,
    
  
}



export function VideoPlay({ width, height, title, src, cssClass, videoStoppedSignal } : Video)
{ 
    const [shallClose, setCloseStatus] = useState<boolean>(false);
    

    const handleAnimEnd = () =>
    {
        if(shallClose) 
        {
            if(videoStoppedSignal) videoStoppedSignal();
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
        <div className={`videoPlay ${cssClass}`} onAnimationEnd={handleAnimEnd} >
           <iframe className={`${shallClose ? "flipOutYAnim" : "flipInVideo"}`} width={width} height={height} src={src} title={title}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <button onClick={() => setCloseStatus(true)} className={`exitInfoYoutube ${shallClose ? "scaleOutAnim" : "scaleInAnim"}`}>Click or <span style={{color:"lightskyblue"}}>Ctrl + c</span> to Close</button>
        </div>
    )

}

