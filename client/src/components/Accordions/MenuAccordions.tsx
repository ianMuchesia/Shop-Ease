import UseFetchCategory from '@/lib/UseFetchCategory';
import UseFocusManager from '@/lib/UseFocusManager';
import { sidebarCategories } from '@/lib/data';
import { fetchCategoryProducts, setCategoryName } from '@/store/features/categorySlice';
import { closeSidebar } from '@/store/features/sidebarsSlice';
import { useAppDispatch } from '@/store/hooks';
import Link from 'next/link';
import React from 'react'
import toast from 'react-hot-toast';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

interface AccordionProps{
title: string;
  content: string[];
  isActive: boolean;
  setAccordion: React.Dispatch<React.SetStateAction<string | null>> ;
}

const MenuAccordions = ({title, content,isActive,setAccordion}:AccordionProps) => {

  const dispatch = useAppDispatch()

  const {dispatchFetchCategory, dispatchCloseSidebar} = UseFetchCategory()
  const {setFocus} = UseFocusManager()

  //if category name matches, return the category object
  const findCategory = sidebarCategories.find(category=>category.name === title)

  const handleFetchCategory = async() => {
    if (!findCategory) 
    {
      toast.error("Category not found")
      return
    }
    // setAccordion(isActive?null:title)

    dispatchFetchCategory(findCategory)
    dispatchCloseSidebar("menu")


    setFocus("category-component")


  }

  return (
    <li className="menu-category" onClick={handleFetchCategory}>
    <button className="accordion-menu" data-accordion-btn >
      <p className="menu-title">{title}</p>
      {/* <div>{isActive ? <IoRemoveCircleOutline /> : <IoAddCircleOutline />}</div> */}

    </button>

    {/* <ul className={`submenu-category-list ${isActive ? 'active' : ''}`}>
      {content.map((item, index) => (
        <li key={index} className="submenu-category">
          <Link href="#" className="submenu-title">{item}</Link>
        </li>
      ))}
    </ul> */}
  </li>
  )
}

export default MenuAccordions