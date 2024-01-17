import { closeSidebar } from "@/store/features/sidebarsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import React, { useRef } from "react";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import CartProductCard from "./CartProductCard";

const Cart = () => {



  
  const cartRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.sidebars.sidebars.cart.isOpen);

  const cartItems = useAppSelector((state) => state.cart);

  const handleCloseCart = () => {
    dispatch(closeSidebar("cart"));
  };

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
          <span className="cart-num-items">{cartItems.totalQuantity}</span>
        </button>

        {!cartItems.totalQuantity && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button type="button" onClick={handleCloseCart} className="btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="cart-product-container">
          {cartItems.items.map((item) => (
            <CartProductCard key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-bottom">
          <div className="cart-bottom-container">
          <div className="btn-container">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>Ksh. {cartItems.totalPrice}</h3>
            </div>
            <Link href="/checkout" onClick={handleCloseCart}>
              {" "}
              <button type="button" className="btn">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
