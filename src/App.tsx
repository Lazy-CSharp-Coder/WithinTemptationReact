
import { Header } from "./components/Header.tsx"
import  BackgroundImage, {animType}   from "./components/BackgroundImage.tsx"
import { HeroPage } from "./components/HeroPage.tsx";
import { albums } from "./audio.tsx";



function App() 
{
  const albumChosen = albums[0];

  return (
    <>
      <BackgroundImage cssClassName='backgroundImage' imageFile={albumChosen.backgroundImage} animNumber={animType.FadeIn} animDuration={"1s"}/>
      <Header/>
      <HeroPage albumChosen={albumChosen}/>    
    
    </>
  );
}

export default App