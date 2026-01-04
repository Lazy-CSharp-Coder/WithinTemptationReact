import {useState} from "react"

import  {type MenuListOptions, MenuList } from "./MenuList"

export interface ListMenuItem
{
    id : number,
    text : string,
    cssClass? : string
    handleClick? : (id : number, text : string) => void,
    subMenu ? : MenuListOptions
}


export function ListItem({id, text, cssClass, handleClick, subMenu} : ListMenuItem)
{
    const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
    const handleClickInternally = () =>
    {
        if(subMenu)
        {
            setShowSubMenu(true);


        }else
        
            {
                console.log("not internally anymore");
             if(handleClick) handleClick(id, text);
        }
        
       
        

    }
    if(subMenu)
        { console.log("has recieved sub");
            console.log("routine for handeling clicks : " + subMenu.handleMenuClick);

        }
    return(

        <li className={`defaultListItem ${cssClass}`} onClick={handleClickInternally}>{text}
            {(showSubMenu && subMenu) &&
                <MenuList key={subMenu.id} menuList={subMenu} />
            }
        </li>
     )
}