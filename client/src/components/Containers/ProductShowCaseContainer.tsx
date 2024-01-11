import React from 'react'
import ProductMinimalCard from '../Cards/ProductMinimalCard';
import { Product } from '@/@types/product';


const productsPerContainer = 4;


// now here we take all the products and render them in a container
//4 in each container

const renderProductsInContainer = (containerIndex:number, products:Product[]) => {
    const productsInContainer = [];
  
    for (let i = 0; i < productsPerContainer; i++) {
      const productIndex = containerIndex * productsPerContainer + i;
  
      if (productIndex < products.length) {
        const product = products[productIndex];
        productsInContainer.push(
          <ProductMinimalCard key={productIndex} product={product} />
        );
      }
    }
  
    return productsInContainer;
  };


interface ProductShowCaseContainerProps{
  products: Product[];
  containerIndex: number;
}
  
const ProductShowCaseContainer = ({products, containerIndex}:ProductShowCaseContainerProps) => {
  return (
    <div className="product-showcase">
      <div className="showcase-wrapper has-scrollbar">
        <div className="showcase-container">
          {renderProductsInContainer(containerIndex, products)}
        </div>
      </div>
    </div>
  )
}

export default ProductShowCaseContainer