import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// mine moduler som jeg prøver meg på 
import { Header } from "./modules/Header.tsx"
import  BackgroundImage, {animType}   from "./modules/BackgroundImage.tsx"
import { CoverReleaseDateDiv } from './modules/CoverReleaseDateDiv.tsx'


function App() {

  
  return (
    <>
      <BackgroundImage imageFile='/src/Albums/theHeart/theheartofeverything.png' animNumber={animType.RotateIn} animDuration={"0.5s"}/>
      <Header/>
     <main>
      <CoverReleaseDateDiv albumName="The Heart Of Everything" coverFile='C:\Users\haral\Documents\GitHub\WithinTemptationReact\src\assets\Albums\theHeart\theheartofeverything.png' releaseDate={new Date(29, 2, 2011)} />
      
     </main>
     
    </>
  );
}

export default App
