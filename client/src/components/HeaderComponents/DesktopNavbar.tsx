import React from 'react'
import ElectronicsPanel from './DesktopComponents/Panels/ElectronicsPanel'
import MensPanel from './DesktopComponents/Panels/MensPanel'
import ElectronicTwo from './DesktopComponents/Panels/ElectronicTwo'
import { categoryAccordion, menuAccordions } from '@/lib/data'
import DesktopNavbarItem from './DesktopComponents/DesktopNavbarItem'


const DesktopNavbar = () => {






  return (
    // <nav className={`desktop-navigation-menu ${isRoot && "desktop-close"}`} ></nav>
    <nav className={`desktop-navigation-menu `} >
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">Home</a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Categories</a>

              <div className="dropdown-panel">
            <ElectronicsPanel/>
               <MensPanel/>
               

              <ElectronicTwo/>
              </div>
            </li>

            {
              menuAccordions.map((menu)=>{
                return(
                  <DesktopNavbarItem name={menu.title}  key={menu.id}/>
                )
              })
            }

          
          </ul>
        </div>
      </nav>
  )
}

export default DesktopNavbar