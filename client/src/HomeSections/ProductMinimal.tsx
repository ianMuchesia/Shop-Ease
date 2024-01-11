import ProductShowcase from "@/components/Containers/ProductShowCase";
import ProductLoader from "@/components/Containers/ProductSkeletonLoader";
import { useGetAllProductsQuery } from "@/store/services/Api";
import React from "react";

const ProductMinimal = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);
  console.log(data);
  console.log(error);
  console.log(isLoading);

  return (
    <>
      <div className="product-minimal">
        {!isLoading && !error && (
          <ProductShowcase
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
      </div>
    </>
  );
};

export default ProductMinimal;
