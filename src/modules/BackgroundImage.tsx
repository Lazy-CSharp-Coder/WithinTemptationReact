import "./../assets/css/animations.css";
import React from "react";

export let currentAlbum = 0;




interface options 
{
    imageFile : string,
    animNumber : number,
    animDuration : string
}


export const animType = {
  RotateIn : 0,
  FadeIn : 1,
  ScaleIn : 2
} as const;

function setCSSVariable(variable : string, newValue : string)
{
       document.documentElement.style.setProperty(variable, newValue);
}

export default function BackgroundImage({ imageFile, animNumber, animDuration} : options)
{
    
    let animCSSClass : string = "backgroundImage"; // default
 
    switch(animNumber)
    {
        case animType.RotateIn : animCSSClass += " rotateInAnim";
                 break;

        case animType.FadeIn  : animCSSClass += " fadeInAnim";
                 break;

        case animType.ScaleIn : animCSSClass += " scaleInAnim";
                 break;

        default : animCSSClass += " rotateInAnim";
                break;
    }
    setCSSVariable('--defaultAnimDuration', animDuration);
    setCSSVariable('--defaultBackgroundImage', imageFile);

    return( 
        <div className={animCSSClass}>
            
        </div>
    );
}

