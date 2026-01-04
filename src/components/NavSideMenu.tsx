import {useState} from "react"
import { type MenuListOptions, MenuList} from "./MenuList"


export interface SocialMediaItem {
    id: number, 
    url : string,
    cssClass? : string
}

// export interface ListMenuItem
// {   id : number,
//     name : string,
//     cssClass? : string,
//     handleClick : () => void,

// }


export function NavSideMenu({navMenu, socialMediaItems,  handleExit }  : { navMenu : MenuListOptions , socialMediaItems : SocialMediaItem[], handleExit : () => void})
{
    const [isDisplaying, setisDisplaying] = useState<Boolean>(true);

    const handleClose = ()  =>
    {
        setisDisplaying(false);
    }

    const handleAnimEnd = ()=>
    {
        if(isDisplaying) return;
        handleExit();
    }

 
    return(
        <>
         <nav className={`slideInMenuNav flex ${isDisplaying ? "slideInRightAnim" : "slideOutRightAnim"}`} onAnimationEnd={handleAnimEnd}>
        
            <div className="flex upperHalfWrapperDiv">
                <div className="flex headingCloseDiv">
                    <img className="logoMenu" src="/icons/wtlogov2.jpg" alt="icon logo"/>
                    <p className="menuHeading">WITHIN TEMPTATION</p>
                <img  className="closeMenuImg" src="/icons/closemenu.png" onClick={handleClose}/>
                </div>
                   <MenuList menuList={navMenu}       />
                        </div>
            <div className="flex lowerHalfWrapperDiv">
            <nav className="socialMediaDiv flex">
                {
                    socialMediaItems.map((item) =>
                    (
                       <img key={item.id} className={item.cssClass} src={item.url}/>
                    )
                    
                    )

                }
               
            </nav>
            <div className="buttonNavDiv flex">
                <button className="signInButton">SIGN IN</button>
                <p className="menuHeading">OR</p>
                <button className="signUpButton">SIGN UP</button>
        
            </div>
            </div>
    </nav>
    
    </>
        

    );

}