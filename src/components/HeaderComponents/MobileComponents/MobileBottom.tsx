import React from 'react'
import {  IoBagOutline, IoGridOutline, IoHeartOutline, IoHomeOutline, IoMenuOutline } from 'react-icons/io5'

interface MobileBottomProps {
  setOpenSidebar: (openSidebar: boolean) => void;
}
const MobileBottom = ({setOpenSidebar}:MobileBottomProps) => {
  return (
    <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn onClick={()=>{
          setOpenSidebar(true)

        }}>
          <IoMenuOutline className="ion-icon md-hydrated"/>
        </button>

        <button className="action-btn">
          <IoBagOutline className="ion-icon md-hydrated"/>

          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <IoHomeOutline className="ion-icon md-hydrated"/>
        </button>

        <button className="action-btn">
        <IoHeartOutline className="ion-icon md-hydrated"/>

          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
        <IoGridOutline className="ion-icon md-hydrated"/>
        </button>
      </div>
  )
}

export default MobileBottom