import { topHeaderLinks } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const TopHeader = () => {
  return (
    <div className="header-top">
    <div className="container">
      <ul className="header-social-container">
        
        
        {
            topHeaderLinks.map((link) => {
                return(
                    <li key={link.id}>
                        <Link href={link.link} className="social-link">
                        {React.createElement(link.icon)}
                        </Link>
                    </li>
                )}
                )
        }

       
      </ul>

      <div className="header-alert-news">
        <p>
          <b>Free Shipping</b>
          This Week Order Over - Ksh.5500
        </p>
      </div>

   
    </div>
  </div>
  )
}

export default TopHeader