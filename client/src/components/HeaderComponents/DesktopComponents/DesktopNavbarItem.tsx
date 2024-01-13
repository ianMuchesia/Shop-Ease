import UseFocusManager from '@/lib/UseFocusManager';
import { sidebarCategories } from '@/lib/data';
import { fetchCategoryProducts, setCategoryName } from '@/store/features/categorySlice';
import { useAppDispatch } from '@/store/hooks';
import React from 'react'

interface DesktopNavbarItemProps {
    name: string
}
const DesktopNavbarItem = (props:DesktopNavbarItemProps) => {

    const dispatch = useAppDispatch();

    const {setFocus} = UseFocusManager()
    const findCategory = sidebarCategories.find(
        (category) => category.name === props.name
      );
    
      
      //for async thunk function, we need to pass an object with endpoint and actionType

    const handleFetchCategory = async () => {   
        if (!findCategory) {
          return;
        }
        console.log(findCategory)
        dispatch(
          fetchCategoryProducts({
            endpoint: findCategory?.endpoint,
            actionType: findCategory?.actionType,
          })
        );
    
        dispatch(setCategoryName(findCategory?.name));
        setFocus("category-component")

    
      }

  return (
    <li className="menu-category" onClick={handleFetchCategory}>
    <p className="menu-title">{props.name}</p>
  </li>
  )
}

export default DesktopNavbarItem