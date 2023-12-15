import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

const WomensMobileCategory = () => {
  return (
    <li className="menu-category">
    <button className="accordion-menu" data-accordion-btn>
      <p className="menu-title">Women's</p>

      <div>
      <IoAddCircleOutline/>
        <IoRemoveCircleOutline/>
      </div>
    </button>

    <ul className="submenu-category-list" data-accordion>
      <li className="submenu-category">
        <a href="#" className="submenu-title">Dress & Frock</a>
      </li>

      <li className="submenu-category">
        <a href="#" className="submenu-title">Earrings</a>
      </li>

      <li className="submenu-category">
        <a href="#" className="submenu-title">Necklace</a>
      </li>

      <li className="submenu-category">
        <a href="#" className="submenu-title">Makeup Kit</a>
      </li>
    </ul>
  </li>
  )
}

export default WomensMobileCategory