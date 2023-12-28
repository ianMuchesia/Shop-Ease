import Image from 'next/image'
import React from 'react'

const ElectronicsPanel = () => {
  return (
    <ul className="dropdown-panel-list">
    <li className="menu-title">
      <a href="#">Electronics</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Desktop</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Laptop</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Camera</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Tablet</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Headphone</a>
    </li>

    <li className="panel-list-item">
      <a href="#">
        <Image
          src="/images/electronics-banner-1.jpg"
          alt="headphone collection"
          width="250"
          height="119"
        />
      </a>
    </li>
  </ul>

  )
}

export default ElectronicsPanel