import { Product } from '@/@types/product'
import Image from 'next/image'
import React from 'react'


interface ProductMinimalCardProps {
  product : Product;
}
const ProductMinimalCard = ({product}:ProductMinimalCardProps) => {
  return (
    <div className="showcase">
    <a href="#" className="showcase-img-box">
      <Image
        src="/images/products/clothes-1.jpg"
        alt="relaxed short full sleeve t-shirt"
        width="70"
        height="70"
        className="showcase-img"
      />
    </a>

    <div className="showcase-content">
      <a href="#">
        <h4 className="showcase-title">
          {product.name}
        </h4>
      </a>

      <a href="#" className="showcase-category">
        {product.category_rel? product.category_rel.name : product.gender === "M"? "Male":"Female"}
      </a>

      <div className="price-box">
        <p className="price">Ksh. {product.price}</p>
        <del>Ksh. {product.price * 115/100}</del>
      </div>
    </div>
  </div>
  )
}

export default ProductMinimalCard