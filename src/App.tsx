import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// mine moduler som jeg prøver meg på 
import { Header } from "./modules/Header.tsx"
import  BackgroundImage, {animType}   from "./modules/BackgroundImage.tsx"
import { CoverReleaseDateDiv } from './modules/CoverReleaseDateDiv.tsx'
import { AlbumAndArtistDiv } from "./modules/AlbumAndArtistDiv.tsx"
import { albums } from './audio.tsx'


function App() {
  const coverFileName = albums[0].albumCover;
  const release = albums[0].releaseDate;
 
  return (
    <>
      <BackgroundImage imageFile="/src/Albums/theHeart/bakground.png" animNumber={animType.RotateIn} animDuration={"0.5s"}/>
      <Header/>
     <main>
      <section className='coverSection'>
        <div className="uppperSectionContainerDiv">
          <div className="coverTextWrapper flex">
            <CoverReleaseDateDiv albumName="The Heart Of Everything" coverFile={coverFileName} releaseDate={release} />
            <AlbumAndArtistDiv albumName="The Heart Of Everything" albumArtist="Within Temptation"/>
          </div>
        </div>
      </section>
      
     </main>
     
    </>
  );
}

export default App