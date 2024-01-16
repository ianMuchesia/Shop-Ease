import OrderCard from '@/components/Cards/OrderCard'
import { useAppSelector } from '@/store/hooks'
import React from 'react'

const Orders = () => {
    const cart = useAppSelector((state) => state.cart)


  return (
      <div className='order-info'>
            <div className='order-info-content'>
              <h2>Order Summary</h2>
              <div className='line'></div>
              <div className="order-tables">
              {
                cart.items.map(item=>(
                    <OrderCard key={item.id} product={item}/>
                ))
              }
            
              </div>
              <div className="total-container">
              <div className='line'></div>
              <div className='total'>
                <span style={{ float: 'left' }}>
                  <div className='thin dense'>VAT 16%</div>
                  <div className='thin dense'>Delivery</div>
                  <div className='thin dense'>Subtotal</div>
                  TOTAL
                </span>
                <span style={{ float: 'right', textAlign: 'right' }}>
                  <div className='thin dense'>Ksh. {(cart.totalPrice * 16/100).toLocaleString()}</div>
                  <div className='thin dense'>Ksh. {(cart.totalPrice * 10/100).toLocaleString()}</div>
                  <div className='thin dense'>Ksh. {(cart.totalPrice).toLocaleString()}</div>
                  Ksh. {(cart.totalPrice + cart.totalPrice * 16/100 + cart.totalPrice * 10/100).toLocaleString()}
                </span>
              </div>
              </div>
            </div>
          </div>
  )
}

export default Orders