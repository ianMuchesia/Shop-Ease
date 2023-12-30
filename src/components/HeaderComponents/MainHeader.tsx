import { openSidebar } from '@/store/features/sidebarsSlice';
import { useAppDispatch } from '@/store/hooks';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'



import { IoBagOutline,  IoHeartOutline, IoPerson, IoPersonOutline, IoSearch, IoSearchOutline } from "react-icons/io5";


const MainHeader = () => {

  const dispatch = useAppDispatch()
  return (
    <div className="header-main">
    <div className="container">
      <Link href="/" className="header-logo">
      <h1>ShopEase</h1>
      </Link>

      <div className="header-search-container">
        <input
          type="search"
          name="search"
          className="search-field"
          placeholder="Enter your product name..."
        />

        <button className="search-btn">
            <IoSearchOutline />
        </button>
      </div>

      <div className="header-user-actions">
        <button className="action-btn">
         <IoPersonOutline />
        </button>

        <button className="action-btn">
        <IoHeartOutline />
          <span className="count">0</span>
        </button>

        <button className="action-btn" onClick={()=>{dispatch(openSidebar("cart"))}}>
        <IoBagOutline />

          <span className="count">0</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default MainHeader