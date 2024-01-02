import { closeSidebar } from '@/store/features/sidebarsSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Link from 'next/link';
import React, { useRef } from 'react'
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
const Cart = () => {

    const cartRef = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch()

  const isOpen = useAppSelector(state=>state.sidebars.sidebars.cart.isOpen)


  const handleCloseCart =()=>{
    dispatch(closeSidebar("cart"))
  }
  

  return (
    <div className={`cart-wrapper ${isOpen && "active"}`} ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={handleCloseCart}
        
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">
           10 items
          </span>
        </button>

      
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
       
        <div className="cart-product-container">
          
            
              <div className="cart-product">
                {/* <img src={item?.imageUrl} className="cart-product-image" /> */}
                <div className="item-desc">
                  <div className="flex top">
                    <h5>product</h5>
                    <h4>Ksh. Price</h4>
                  </div>
                  <div className="flex top">
                    <h5>Qty X </h5>
                    <h4>total price</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                         
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">quantity</span>
                        <span
                          className="plus"
                        //   onClick={() => dispatch(addToCart(item))}
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                    //   onClick={() => dispatch(removeItemFromCart(item._id))}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            
        </div>
      
          <div className="cart-bottom">
            
            <div className="btn-container">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>Ksh. subtotal</h3>
            </div>
             <Link href="/checkout"> <button type="button" className="btn">
                Proceed to Checkout
              </button></Link>

            </div>
           
          </div>
       
      </div>
    </div>
  )
}

export default Cart