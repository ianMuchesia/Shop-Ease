import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

const PerfumeMobileCategory = () => {
  return (
    <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Perfume</p>

              <div>
              <IoAddCircleOutline/>
        <IoRemoveCircleOutline/>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Clothes Perfume</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Deodorant</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Flower Fragrance</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Air Freshener</a>
              </li>
            </ul>
          </li>

  )
}

export default PerfumeMobileCategory