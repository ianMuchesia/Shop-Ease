import { runFireworks } from '@/lib/Fireworks'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { BsBagCheckFill } from 'react-icons/bs'

const Success = () => {
    useEffect(() => {
        runFireworks()
    }
    , [])
  return (
  <main>
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button"  style={{width:"300px"}} className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  </main>
  )
}

export default Success