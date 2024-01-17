import ProductMinimalShowcase from "@/components/Containers/ProductMinimalShowCase";
import ProductLoader from "@/components/Containers/ProductSkeletonLoader";
import { useGetAllProductsQuery } from "@/store/services/Api";
import React from "react";

const ProductMinimal = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);
 


  return (
    <>
      <div className="product-minimal">
        {!isLoading && !error && (
          <ProductMinimalShowcase
            products={data.length > 21 ? data.slice(0, 21) : data}
          />
        )}
        {isLoading && (
          <>
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
          
          
          </>
        )}
        {
          error && <div className="error">Something wrong happened, please try again later.</div>
        }
      </div>
    </>
  );
};

export default ProductMinimal;
