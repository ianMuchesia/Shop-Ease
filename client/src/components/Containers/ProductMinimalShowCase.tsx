// ProductShowcase.jsx
import React from 'react';
import ProductShowCaseContainer from './ProductShowCaseContainer';
import { Product } from '@/@types/product';


//the whole of this component is a bit confusing, but it's basically just a way to render the products in a container

//to display the products in a container, we need to know how many products are in a container
const productsPerContainer = 4;
const returnTotalContainers = (totalProducts:number) => {
  return Math.ceil(totalProducts / productsPerContainer);
};


//this function actually is what renders the products in a container
const renderShowcaseContainers = (products:Product[]) => {
  const containers = [];

  for (let i = 0; i < returnTotalContainers(products.length); i++) {
    containers.push(
      <ProductShowCaseContainer key={i} containerIndex={i} products={products} />
    );
  }

  return containers;
};


interface ProductShowcaseProps {    
    products: Product[];
}

const ProductMinimalShowcase = ({ products }:ProductShowcaseProps) => {
  return <>{renderShowcaseContainers(products)}</>;
};

export default ProductMinimalShowcase;
