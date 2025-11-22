import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// mine moduler som jeg prøver meg på 
import { Header } from "./modules/header.tsx"
import { BackgroundImage, currentAlbum } from "./modules/BackgroundImage.tsx"

function App() {


  return (
    <>
      <Header/>
     <main>
        <BackgroundImage albumNumber={currentAlbum} />
      </main>
     
    </>
  );
}

export default App
