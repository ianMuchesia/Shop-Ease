import { Product } from '@/@types/product'
import CategorySkeletonLoader from '@/components/Cards/CategorySkeletonLoader'
import ProductGridCard from '@/components/Cards/ProductGridCard'
import { useGetAllProductsQuery } from '@/store/services/Api'
import Image from 'next/image'
import React from 'react'
import { IoBagAddOutline, IoEyeOutline, IoHeartOutline, IoRepeatOutline, IoStar, IoStarHalfOutline } from 'react-icons/io5'

const ProductGrid = () => {

  const  {data, isLoading} = useGetAllProductsQuery(undefined)
  console.log(data)
  return (
    
    <div className="product-main">

    <h2 className="title">New Products</h2>

    <div className="product-grid">

      {data && data.map((product:Product) => (
        <ProductGridCard product={product} key={product.id}/>
      ))
        }

        {isLoading && Array(8).fill(0).map((_, i) => (
          <CategorySkeletonLoader key={i} />
        ))}

    
      
    </div>

  </div>
  )
}

export default ProductGrid