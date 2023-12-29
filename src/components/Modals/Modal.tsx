import Image from 'next/image'
import React, { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'

const Modal = () => {



    const [isClosed, setIsClosed] = useState(false);

   
  return (
     
    <div className={`modal ${isClosed ? 'closed' : ''}`}>

    <div className="modal-close-overlay" data-modal-overlay onClick={()=>setIsClosed(true)}></div>

    <div className="modal-content">

      <button className="modal-close-btn" data-modal-close onClick={()=>setIsClosed(true)}>
      
        <IoCloseCircleOutline className="ion-icon"/>
      </button>

      <div className="newsletter-img">
        <Image src="/images/newsletter.png" alt="subscribe newsletter" width="400" height="400"/>
      </div> 

      <div className="newsletter">

        <form action="#">

          <div className="newsletter-header">

            <h3 className="newsletter-title">Subscribe Newsletter.</h3>

            <p className="newsletter-desc">
              Subscribe the <b>Anon</b> to get latest products and discount update.
            </p>

          </div>

          <input type="email" name="email" className="email-field" placeholder="Email Address" required/>

          <button type="submit" className="btn-newsletter">Subscribe</button>

        </form>

      </div>

    </div>

  </div>

  )
}

export default Modal