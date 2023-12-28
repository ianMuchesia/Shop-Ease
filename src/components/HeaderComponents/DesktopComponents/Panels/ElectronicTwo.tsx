import Image from 'next/image'
import React from 'react'

const ElectronicTwo = () => {
  return (
    <ul className="dropdown-panel-list">
    <li className="menu-title">
      <a href="#">Electronics</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Smart Watch</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Smart TV</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Keyboard</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Mouse</a>
    </li>

    <li className="panel-list-item">
      <a href="#">Microphone</a>
    </li>

    <li className="panel-list-item">
      <a href="#">
        <Image
          src="/images/electronics-banner-2.jpg"
          alt="mouse collection"
          width="250"
          height="119"
        />
      </a>
    </li>
  </ul>
  )
}

export default ElectronicTwo