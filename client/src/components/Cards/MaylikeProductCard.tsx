import { Product } from '@/@types/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface MaylikeProductCardProps {
    product: Product;
}

const MaylikeProductCard = ({product}:MaylikeProductCardProps) => {
  return (
    
    <Link href={`/products/${product.id}`}>
      <div className="maylike-product-card">
        <Image
          src={product.image}
          width={250}
          height={250}
          alt={product.name}
          className="maylike-product-image"
        />
        <p className="maylike-product-name">{product.name}</p>
        <p className="maylike-product-price">Ksh. {product.price}</p>
      </div>
    </Link>
  
  )
}

export default MaylikeProductCard