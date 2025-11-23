import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// mine moduler som jeg prøver meg på 
import { Header } from "./modules/Header.tsx"
import  BackgroundImage, {animType}   from "./modules/BackgroundImage.tsx"


function App() {

  
  return (
    <>
      <BackgroundImage imageFile='/src/Albums/theHeart/theheartofeverything.png' animNumber={animType.RotateIn} animDuration={"0.5s"}/>
      <Header/>
     <main>
      
     </main>
     
    </>
  );
}

export default App
