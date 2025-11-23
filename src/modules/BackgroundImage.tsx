import "./../assets/css/animations.css";
// import styles from "./../assets/css/animations.css";
import React from "react";

export let currentAlbum = 0;

interface options 
{
    imageFile : string,
    animNumber : number,
    animDuration? : string
}


export const animType = {
  RotateIn : 0,
  FadeIn : 1,
  ScaleIn : 2
} as const;

export default function BackgroundImage({ imageFile, animNumber, animDuration} : options)
{
     // bare for å få vekk den dumme feilmeldingen
    let animCSSClass : string = "backgroundImage "; // default
 
    switch(animNumber)
    {
        case animType.RotateIn : animCSSClass += "rotateInAnim";
                 break;

        case animType.FadeIn  : animCSSClass += "fadeInAnim";
                 break;

        case animType.ScaleIn : animCSSClass += "scaleInAnim";
                 break;

        default : animCSSClass += " rotateInAnim";
                break;
    }
//  style={{"--defaultAnimDuration" : animDuration} as React.CSSProperties }
    return( 
        <div className={animCSSClass}>
            
        </div>
    );
}

