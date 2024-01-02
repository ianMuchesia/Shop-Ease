
import CategoryAccordions from '@/components/Accordions/CategoryAccordions'
import { categoryAccordion } from '@/lib/data'
import { closeSidebar } from '@/store/features/sidebarsSlice'
import { useAppDispatch } from '@/store/hooks'
import Image from 'next/image'
import React, { useState } from 'react'
import {  IoAddOutline,  IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'

const SidebarCategory = () => {

  const dispatch = useAppDispatch()

  const [ activeAccordion, setActiveAccordion] = useState<string|null>(null)



  const handleCloseSidebar = () => {
    dispatch(closeSidebar("category"))
  }

  return (
    <div className="sidebar-category">

    <div className="sidebar-top">
      <h2 className="sidebar-title">Category</h2>

      <button className="sidebar-close-btn" data-mobile-menu-close-btn onClick={handleCloseSidebar}>
       
        <IoCloseOutline className="close-icon ion-icon" />
      </button>
    </div>

    <ul className="sidebar-menu-category-list">

     {
      categoryAccordion.map(category=>(
        <CategoryAccordions
        key={category.id}
        content={category.content}
        setAccordion={setActiveAccordion}
        image={category.image}
        title={category.title}
        isActive={activeAccordion === category.title}

        />
      ))
     }

    </ul>

 
  </div>
  )
}

export default SidebarCategory