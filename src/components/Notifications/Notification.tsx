import Image from 'next/image'
import React, { useState } from 'react'
import {  IoCloseOutline } from 'react-icons/io5'

const Notification = () => {

    const [isClosed, setIsClosed] = useState(false);

  


  return (
    <div className={`notification-toast ${isClosed ? 'closed' : ''}`}>

    <button className="toast-close-btn" onClick={()=>setIsClosed(true)} >
      <IoCloseOutline className="ion-icon"/>
    </button>

    <div className="toast-banner">
      <Image src="/images/products/jewellery-1.jpg" alt="Rose Gold Earrings" width="80" height="70"/>
    </div>

    <div className="toast-detail">

      <p className="toast-message">
        Someone in new just bought
      </p>

      <p className="toast-title">
        Rose Gold Earrings
      </p>

      <p className="toast-meta">
      <time dateTime="PT2M">2 Minutes</time> ago      </p>

    </div>

  </div>



  )
}

export default Notification