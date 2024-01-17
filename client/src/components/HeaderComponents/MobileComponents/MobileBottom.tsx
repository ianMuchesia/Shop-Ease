import { SidebarName } from '@/@types'
import { openSidebar } from '@/store/features/sidebarsSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import React from 'react'
import toast from 'react-hot-toast'
import {  IoBagOutline, IoGridOutline, IoHeartOutline, IoHomeOutline, IoMenuOutline } from 'react-icons/io5'


const MobileBottom = () => {

  const dispatch = useAppDispatch()

  const HandleOpenSidebar = (name:SidebarName) => {
    dispatch(openSidebar(name))

  }
  const cartTotalItems = useAppSelector(state=>state.cart.totalQuantity)


  return (
    <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn onClick={()=>HandleOpenSidebar("menu")}>
          <IoMenuOutline className="ion-icon md-hydrated"/>
        </button>

        <button className="action-btn" onClick={()=>HandleOpenSidebar("cart")}>
          <IoBagOutline className="ion-icon md-hydrated"/>

          <span className="count">{cartTotalItems}</span>
        </button>

        <button className="action-btn">
          <IoHomeOutline className="ion-icon md-hydrated"/>
        </button>

        <button className="action-btn">
        <IoHeartOutline className="ion-icon md-hydrated" 
        onClick={()=>{toast.error("Feature not available")}}
        />

          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
        <IoGridOutline className="ion-icon md-hydrated"
        onClick={()=>HandleOpenSidebar("category")}
        />
        </button>
      </div>
  )
}

export default MobileBottom