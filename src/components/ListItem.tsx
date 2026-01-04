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
    const handleClickInternally = () =>
    {
        console.log("handleing click internally");
        console.log(subMenu);
        if(subMenu) console.log("there is a sub for this item");
    }
    if(subMenu) console.log("has recieved sub");
    return(

        <li className={`defaultListItem ${cssClass}`} onClick={handleClickInternally}>{text}
            {subMenu &&
                <MenuList key={subMenu.id} menuList={subMenu} />
            }
        </li>
     )
}