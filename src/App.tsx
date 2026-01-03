
import  BackgroundImage, {animType}   from "./components/BackgroundImage.tsx"
import { HeroPage } from "./components/HeroPage.tsx";
import { albums } from "./audio.tsx";
import { useState } from "react"

import "./App.css"
import { IntroPage } from "./components/IntroPage.tsx";

function App() 
{
  const albumChosen = albums[0];

  const [shownIntro, setShownIntro] = useState<boolean>(false);

  return (
    <>
      {shownIntro ? <>
      <BackgroundImage cssClassName='backgroundImage' imageFile={albumChosen.backgroundImage} animNumber={animType.FadeIn} animDuration={"1s"}/>

      <HeroPage albumChosen={albumChosen}/>    </> : <IntroPage exitPage={() => setShownIntro(true)}/>

      }
    </>
  );
}

export default App