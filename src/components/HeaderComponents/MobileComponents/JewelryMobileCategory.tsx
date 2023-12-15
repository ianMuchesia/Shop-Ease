import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

const JewelryMobileCategory = () => {
  return (
    <li className="menu-category">
    <button className="accordion-menu" data-accordion-btn>
      <p className="menu-title">Jewelry</p>

      <div>
      <IoAddCircleOutline/>
        <IoRemoveCircleOutline/>
      </div>
    </button>

    <ul className="submenu-category-list" data-accordion>
      <li className="submenu-category">
        <a href="#" className="submenu-title">Earrings</a>
      </li>

      <li className="submenu-category">
        <a href="#" className="submenu-title">Couple Rings</a>
      </li>

      <li className="submenu-category">
        <a href="#" className="submenu-title">Necklace</a>
      </li>

      <li className="submenu-category">
        <a href="#" className="submenu-title">Bracelets</a>
      </li>
    </ul>
  </li>
  )
}

export default JewelryMobileCategory