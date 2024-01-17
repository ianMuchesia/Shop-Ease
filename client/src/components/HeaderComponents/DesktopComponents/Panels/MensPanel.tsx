import Image from 'next/image'
import React from 'react'

const MensPanel = () => {
  return (
    <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Men&apos;s</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Sports</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">
                      <Image
                        src="/images/mens-banner.jpg"
                        alt="men's fashion"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>

  )
}

export default MensPanel