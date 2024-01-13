import { CartItem } from '@/@types/product'
import { addToCart, removeFromCart } from '@/store/features/cartSlice'
import { useAppDispatch } from '@/store/hooks'
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'

interface CartProductCardProps {
    item:CartItem
}

const CartProductCard = ({item}:CartProductCardProps) => {

    const dispatch = useAppDispatch()   
  return (
    
    <div className="cart-product">
   <img src={item?.image} className="cart-product-image" /> 
    <div className="item-desc">
      <div className="flex top">
        <h5>{item.name}</h5>
        <h4>Ksh. {item.price.toLocaleString()}</h4>
      </div>
      <div className="flex top">
        <h5>Qty X {item.quantity}</h5>
        <h4>{item.totalPrice}</h4>
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
             onClick={() => dispatch(addToCart({
                name:item.name,
                category_rel:{
                    id:"",
                    name:"",
                },
                price:item.price,
                id:item.id,
                created_at: "",
                updated_at:"",
                gender:"",
                image:item.image,
                description:"",
                rating:1,





             }))}
            >
              <AiOutlinePlus />
            </span>
          </p>
        </div>
        <button
          type="button"
          className="remove-item"
    onClick={() => dispatch(removeFromCart(item.id))}
        >
          <TiDeleteOutline />
        </button>
      </div>
    </div>
  </div>
  )
}

export default CartProductCard