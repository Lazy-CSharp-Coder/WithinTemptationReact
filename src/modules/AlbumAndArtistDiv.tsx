interface albumInfo
{
    albumName : string,
    albumArtist : string

}


function AlbumAndArtistDiv({ albumName, albumArtist} : albumInfo)
{
    return(
        <>
            <div className="albumInfoDiv flex ">
              <p className="albumTitleText">{albumName}</p>
              <p className="albumArtistText">{albumArtist}</p>
           </div>
        </>
    )
}

 {/* <div class="nowPlayingDiv flex"> <img id="recordIcon" class="recordIcon" src="Icons/record.png" alt="">  <p id="nowPlayingText" class="nowPlayingText"></p></div> */}