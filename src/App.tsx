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

  // default album values
  const chosen = 1;
  const coverFileName = albums[chosen].albumCover;
  const release = albums[chosen].releaseDate;
  const albumName = albums[chosen].albumName;
  const artistName = albums[chosen].artistName;
  const backgroundImage = albums[chosen].backgroundImage;
   
  return (
    <>
      <BackgroundImage cssClassName='backgroundImage' imageFile={backgroundImage} animNumber={animType.ScaleIn} animDuration={"1.5s"}/>
      <Header/>
     <main>
      <section className='coverSection'>
        <div className="uppperSectionContainerDiv">
          <div className="coverTextWrapper flex">
            <CoverReleaseDateDiv albumName={albumName} coverFile={coverFileName} releaseDate={release} />
            <AlbumAndArtistDiv albumName={albumName} albumArtist={artistName}/>
          </div>
        </div>
      </section>
      
     </main>
     
    </>
  );
}

export default App