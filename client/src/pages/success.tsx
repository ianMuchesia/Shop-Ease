import { runFireworks } from '@/lib/Fireworks'
import { clearCart } from '@/store/features/cartSlice'
import { useAppDispatch } from '@/store/hooks'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { BsBagCheckFill } from 'react-icons/bs'

const Success = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        runFireworks()
        dispatch(clearCart())
    }
    , [])
  return (
  <main>
    <div className="success-wrapper">
      <div className="success">
        <p className="success-icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for shopping with shop ease!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:ianmuchesia78@gmail.com">
            ianmuchesia78@gmail.com
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