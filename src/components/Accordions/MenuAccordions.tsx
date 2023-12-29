import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

interface AccordionProps{
title: string;
  content: string[];
  isActive: boolean;
  setAccordion: React.Dispatch<React.SetStateAction<string | null>> ;
}

const MenuAccordions = ({title, content,isActive,setAccordion}:AccordionProps) => {
  return (
    <li className="menu-category">
    <button className="accordion-menu" data-accordion-btn onClick={()=>setAccordion(isActive?null:title)}>
      <p className="menu-title">{title}</p>
      <div>{isActive ? <IoRemoveCircleOutline /> : <IoAddCircleOutline />}</div>

    </button>

    <ul className={`submenu-category-list ${isActive ? 'active' : ''}`}>
      {content.map((item, index) => (
        <li key={index} className="submenu-category">
          <a href="#" className="submenu-title">{item}</a>
        </li>
      ))}
    </ul>
  </li>
  )
}

export default MenuAccordions