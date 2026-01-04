
import  BackgroundImage, {animType}   from "./components/BackgroundImage.tsx"
import { HeroPage } from "./components/HeroPage.tsx";
import { albums } from "./audio.tsx";
import { useState, useEffect, useRef } from "react"

import "./App.css"
import { IntroPage } from "./components/IntroPage.tsx";
import { NavSideMenu } from "./components/NavSideMenu.tsx";
import { type ListMenuItem } from './components/ListItem.tsx'
import { type SocialMediaItem } from "./components/NavSideMenu.tsx";
import { Header } from "./components/Header.tsx";
import { type MenuListOptions } from "./components/MenuList.tsx";


const socialMediaItemsArray : SocialMediaItem[] =
[
    { id: 1,  url : "/icons/tik-tokwhite.png", cssClass : "socialMediaIcon" },
    { id: 2,  url : "/icons/twitterwhite.png", cssClass : "socialMediaIcon" },
    { id: 3,  url : "/icons/facebookwhite.png", cssClass : "socialMediaIcon" },
    { id: 4,  url : "/icons/twitchwhite.png", cssClass : "socialMediaIcon" },
    { id: 5,  url : "/icons/discordwhite.png", cssClass : "socialMediaIcon" },
    // { id: 6,  url : "", cssClass : "socialMediaIcon" },

];


  const navMenuItemsArray :  ListMenuItem[]  =
    [
        { id : 1, text : "STUDIO ALBUMS",  cssClass :"hamburgerListItem",  },
        { id : 2, text : "MEMBERS",   cssClass :"hamburgerListItem"},
        { id : 3, text : "TOURS",   cssClass :"hamburgerListItem" , },
        { id : 4 ,text : "NEWS" ,  cssClass :"hamburgerListItem" ,  },
        { id : 5, text : "EVENTS" ,  cssClass :"hamburgerListItem"}

    ];
     
    // legg en foreløpig menu optsjon- skal geenereres automatisk
    const albumMenu : MenuListOptions = 
    {
     id : "STUDIO ALBUMS",
     listItems : [ 
      
      //  { id: 1, text : "test"  }
    
    ],
    handleMenuClick : (id, text) => {}
  
  } ;
 


function App() 
{
  

  const [shownIntro, setShownIntro] = useState<boolean>(false);
  const [albumNumber, setAlbumNumber] = useState<number>(0);
  const initRef = useRef(false);
  // const [subHamMenuDisplaying, setSubMenuDisplaying] = useState<MenuListOptions | undefined>(undefined)
  const [displayHamburger, setDisplayHamburger] = useState<boolean>(false);
  const [navMenu, setNavMenu] = useState<MenuListOptions>(
    { 
      id : "Hamburger Nav Menu",
      listItems : navMenuItemsArray,
      handleMenuClick : () => {}
    });


  const handleHamburgerClick =() => {
        console.log("handeling click:");
        setDisplayHamburger((prev) => !prev); 
    }

  const handleMenuListItemClick =  (id : number, text : string) =>
    {

        if(id == 1 && text === "STUDIO ALBUMS")
        {
          console.log("Studio albums clicked");
        //   if(subHamMenuDisplaying != undefined )
        //   {
          
        //   }

        //   albums.forEach((item, index) =>
        //   {
        //      albumMenu.listItems.push({ id : index, text : item.albumName, handleClick : handleMenuListItemClick, cssClass: "scaleInAnim"});
        //      console.log("adding album :  " +  item.albumName);

        //   });

        //   // setSubMenuDisplaying(albumMenu);
        //   setNavMenu((prev) => {
        //       return {...prev, listItems : prev.listItems.map((item) =>
        //       {
        //         console.log("setting new stuff. should run sometimes");
        //         if(item.text === "STUDIO ALBUMS") return {...item, subMenuList : albumMenu}
        //         else return item;
        //       })}

        //   })

        // }
        }
    }

    // setNavMenuItems((prev) => (prev.map((item) => {...item, handleClick : handleMenuListItemClick} ) ) ); 
   
    // navMenuItemsArray.forEach((item) =>
    // {
    //    item.handleClick = handleMenuListItemClick;

    // });
  

    useEffect( () =>
    {
        if(initRef.current) return;
        initRef.current = true;
        const subAlbumMenu : MenuListOptions = { id : "STUDIO ALBUMS" , listItems : [], handleMenuClick : (id, text) => {}};

        albums.forEach((item, index) =>
        {            
            subAlbumMenu.listItems.push({id : index+1, text : item.albumName, handleClick: handleMenuListItemClick});

        });
      console.log("updating table with defined function handleMenuListItemClick. Should appear once in console") ;

    /* obsolete...keep for reference...shall only put function in MenuListOptions
      setNavMenu(prevItems => {return {...prevItems, listItems : prevItems.listItems.map((item) =>
      {  return { ...item, handleClick : handleMenuListItemClick} })  } }); */

      setNavMenu((prev) => ( { ...prev, handleMenuClick: handleMenuListItemClick, listItems : prev.listItems.map((item) => 
        
        {
              console.log("setting new stuff. should run sometimes");
               if(item.text == subAlbumMenu.id) {console.log("setting studio album - should happen once"); return {...item, subMenu : {...subAlbumMenu}  } }
                else return item;

          
        })}));
          
    },[]);

    // make studio album menu 
    console.log(navMenu);

   if(!shownIntro)   return(<IntroPage exitPage={() => setShownIntro(true)}/>)   // show intro page if it has not been displayed
  return (
    <>
      <Header hamburgerClick={handleHamburgerClick}/>
      <BackgroundImage cssClassName='backgroundImage' imageFile={albums[albumNumber].backgroundImage} animNumber={animType.FadeIn} animDuration={"1s"}/>
      <HeroPage albumChosen={albums[albumNumber]}/>    
      {displayHamburger  &&
      <NavSideMenu key={navMenu.id} navMenu={navMenu} socialMediaItems={socialMediaItemsArray} handleExit={handleHamburgerClick}/> 
        
           }   
    </>
  );
}

export default App