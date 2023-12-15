import Image from 'next/image'
import React from 'react'



import { IoBagOutline,  IoHeartOutline, IoPerson, IoPersonOutline, IoSearch, IoSearchOutline } from "react-icons/io5";


const MainHeader = () => {
  return (
    <div className="header-main">
    <div className="container">
      <a href="#" className="header-logo">
        <Image
          src="/images/logo/logo.svg"
          alt="Anon's logo"
          width={120}
          height={36}
        />
      </a>

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

        <button className="action-btn">
        <IoBagOutline />

          <span className="count">0</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default MainHeader