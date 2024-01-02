import React from 'react'
import ElectronicsPanel from './DesktopComponents/Panels/ElectronicsPanel'
import MensPanel from './DesktopComponents/Panels/MensPanel'
import ElectronicTwo from './DesktopComponents/Panels/ElectronicTwo'
import MensCategory from './DesktopComponents/Categories/MensCategory'
import WomensCategory from './DesktopComponents/Categories/WomensCategory'
import JewelryCategory from './DesktopComponents/Categories/JewelryCategory'
import PerfumeCategory from './DesktopComponents/Categories/PerfumeCategory'

const DesktopNavbar = () => {
  return (
    <nav className="desktop-navigation-menu">
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

            <li className="menu-category">
              <a href="#" className="menu-title">Men's</a>

            <MensCategory/>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Women's</a>
                <WomensCategory/>
              
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Jewelry</a>

              <JewelryCategory/>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Perfume</a>
                <PerfumeCategory/>

            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Blog</a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Hot Offers</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default DesktopNavbar