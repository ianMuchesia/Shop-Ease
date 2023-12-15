import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

const MensMobileCategory = () => {
  return (
    <li className="menu-category">
    <button className="accordion-menu" data-accordion-btn>
      <p className="menu-title">Men's</p>

      <div>
        <IoAddCircleOutline/>
        <IoRemoveCircleOutline/>
      </div>
    </button>

    <ul className="submenu-category-list" data-accordion>
      <li className="submenu-category">
        <a href="#" className="submenu-title">Shirt</a>
      </li>

      <li className="submenu-category">
        <a href="#" className="submenu-title">Shorts & Jeans</a>
      </li>

      <li className="submenu-category">
        <a href="#" className="submenu-title">Safety Shoes</a>
      </li>

      <li className="submenu-category">
        <a href="#" className="submenu-title">Wallet</a>
      </li>
    </ul>
  </li>
  )
}

export default MensMobileCategory