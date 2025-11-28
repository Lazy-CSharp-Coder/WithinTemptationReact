import "./../assets/css/animations.css";
import React from "react";

//  husk å inkludere 2 css variabler index.css eller root.css
// --defaultAnimDuration
// --defaultBackgroundImage

interface options 
{
    cssClassName : string,
    imageFile : string,
    animNumber : number,
    animDuration? : string | undefined
}

export const animType = {
  
  NoAnimation : 0,
  RotateIn : 1,
  FadeIn : 2,
  ScaleIn : 3
} as const;

export function setCSSVariable(variable : string, newValue : string)
{
       document.documentElement.style.setProperty(variable, newValue);
}

export default function BackgroundImage({cssClassName, imageFile, animNumber, animDuration} : options)
{    
    let animCSSClass : string = cssClassName;  
 
    switch(animNumber)
    {
        case animType.RotateIn : animCSSClass += " rotateInAnim";
                 break;

        case animType.FadeIn  : animCSSClass += " fadeInAnim";
                 break;

        case animType.ScaleIn : animCSSClass += " scaleInAnim";
                 break;

        default : animCSSClass += "";
                break;
    }
    if(animDuration) setCSSVariable('--defaultAnimDuration', animDuration);
    setCSSVariable("--defaultBackgroundImage", `url(${imageFile})`);

    return( 
        <div className={animCSSClass}>
            
        </div>
    );
}

