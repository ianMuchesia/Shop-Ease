import Image from 'next/image'
import React from 'react'

const WomensPanel = () => {
  return (
    <ul className="dropdown-panel-list">
    <li className="menu-title">
      <a href="#">Women&apos;s</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Formal</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Casual</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Perfume</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Cosmetics</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Bags</a>
    </li>

    <li className="panel-list-item">
      <a href="#">
        <Image
          src="/images/womens-banner.jpg"
          alt="women's fashion"
          width="250"
          height="119"
        />
      </a>
    </li>
  </ul>
  )
}

export default WomensPanel