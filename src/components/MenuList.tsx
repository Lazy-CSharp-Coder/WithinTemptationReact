import { ListItem, type ListMenuItem } from "./ListItem";

export interface MenuListOptions {
    id : string,
    listItems : ListMenuItem[],
    cssClass? : string, 
    handleMenuClick :(id : number, text : string) => void
}

export function MenuList({menuList}  : { menuList : MenuListOptions })
{
    return(

        <ul key={menuList.id} className={`defaultMenuList ${menuList.cssClass}`}>
            {
                menuList.listItems.map((item) => 
                     <ListItem key={item.id} id={item.id} cssClass={item.cssClass} text={item.text} handleClick={menuList.handleMenuClick} subMenu={item.subMenu}/>)             
            }


        </ul>
    )
}