import React from 'react'
import SkeletonCard from '../Cards/SkeletonCard'

const ProductLoader = () => {
  return (
     <div className="product-showcase">
    <div className="showcase-wrapper has-scrollbar">
      <div className="showcase-container">
        {
          Array(2).fill(0).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        }

      </div>
      
    </div>
    
  </div>
  )
}

export default ProductLoader