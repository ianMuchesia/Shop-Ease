import { CartItem } from '@/@types/product'
import Image from 'next/image';
import React from 'react'

interface OrderCardProps{
  product:CartItem;
}

const OrderCard = ({product}:OrderCardProps) => {
  return (
    <div><table className='order-table'>
    <tbody>
      <tr>
        <td>
   
          <Image src={product.image} alt={product.name} width={100} height={100} />
        </td>
        <td>
          <br />
          <span className='thin'>{product.name}</span>
          <br />
          Free Run 3.0 Women
          <br />
          <div className='price'>Ksh. {product.price}</div>
        </td>
      </tr>
      <tr>
        <td>
          
        </td>
      </tr>
    </tbody>
  </table>
  <div className='line'></div></div>
  )
}

export default OrderCard