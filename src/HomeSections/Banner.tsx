import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="banner">

    <div className="container">

      <div className="slider-container has-scrollbar">

        <div className="slider-item">

          <Image src="/images/banner-1.jpg" alt="women's latest fashion sale" 
          width={500} height={500}
          className="banner-img"/>

          <div className="banner-content">

            <p className="banner-subtitle">Trending item</p>

            <h2 className="banner-title">Women's latest fashion sale</h2>

            <p className="banner-text">
              starting at &dollar; <b>20</b>.00
            </p>

            <a href="#" className="banner-btn">Shop now</a>

          </div>

        </div>

        <div className="slider-item">

          <Image src="/images/banner-2.jpg" alt="modern sunglasses" 
          width={500} height={500}
          className="banner-img"/>

          <div className="banner-content">

            <p className="banner-subtitle">Trending accessories</p>

            <h2 className="banner-title">Modern sunglasses</h2>

            <p className="banner-text">
              starting at &dollar; <b>15</b>.00
            </p>

            <a href="#" className="banner-btn">Shop now</a>

          </div>

        </div>

        <div className="slider-item">

          <Image src="/images/banner-3.jpg" alt="new fashion summer sale" 
          height={500} width={500}
          className="banner-img"/>

          <div className="banner-content">

            <p className="banner-subtitle">Sale Offer</p>

            <h2 className="banner-title">New fashion summer sale</h2>

            <p className="banner-text">
              starting at &dollar; <b>29</b>.99
            </p>

            <a href="#" className="banner-btn">Shop now</a>

          </div>

        </div>

      </div>

    </div>

  </div>
  )
}

export default Banner