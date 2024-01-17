import UseFetchCategory from '@/lib/UseFetchCategory';
import UseFocusManager from '@/lib/UseFocusManager';
import { sidebarCategories } from '@/lib/data';

import React from 'react'
import toast from 'react-hot-toast';

interface DesktopNavbarItemProps {
    name: string
}
const DesktopNavbarItem = (props:DesktopNavbarItemProps) => {

   const {dispatchCloseSidebar,dispatchFetchCategory} = UseFetchCategory()

    const {setFocus} = UseFocusManager()
    const findCategory = sidebarCategories.find(
        (category) => category.name === props.name
      );
    
      
      //for async thunk function, we need to pass an object with endpoint and actionType

    const handleFetchCategory = async () => {   
        if (!findCategory) {
          toast.error("Category not found")
          return;
        }
        dispatchFetchCategory(findCategory)
        dispatchCloseSidebar("category")
  
        setFocus("category-component")

    
      }

  return (
    <li className="menu-category" onClick={handleFetchCategory} style={{cursor:"pointer"}}>
    <p className="menu-title">{props.name}</p>
  </li>
  )
}

export default DesktopNavbarItem