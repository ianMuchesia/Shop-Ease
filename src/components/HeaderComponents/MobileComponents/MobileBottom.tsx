import React from 'react'
import {  IoBagOutline, IoGridOutline, IoHeartOutline, IoHomeOutline, IoMenuOutline } from 'react-icons/io5'

const MobileBottom = () => {
  return (
    <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn>
          <IoMenuOutline/>
        </button>

        <button className="action-btn">
          <IoBagOutline/>

          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <IoHomeOutline/>
        </button>

        <button className="action-btn">
        <IoHeartOutline/>

          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
        <IoGridOutline/>
        </button>
      </div>
  )
}

export default MobileBottom