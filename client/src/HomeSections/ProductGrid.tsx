import CategorySkeletonLoader from "@/components/Cards/CategorySkeletonLoader";
import ProductGridCard from "@/components/Cards/ProductGridCard";
import UseFocusManager from "@/lib/UseFocusManager";
import {
  fetchCategoryProducts,
  setCategoryName,
} from "@/store/features/categorySlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect, useRef } from "react";

const ProductGrid = () => {
  const { focusedCategoryComponent, clearFocus } = UseFocusManager();

  const productMainRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const { products, error, loading, name } = useAppSelector(
    (state) => state.category
  );

  useEffect(() => {
    let subscription = true;

    if (subscription) {
      dispatch(
        fetchCategoryProducts({
          actionType: "category",
          endpoint: "categories/new-arrivals",
        })
      );
      dispatch(setCategoryName("New Arrivals"));
    }

    //clean up finction not necessary in this case
    return () => {
      subscription = false;
    };
  }, []);

  useEffect(() => {
    if (focusedCategoryComponent === "category-component") {
      productMainRef.current?.focus();
      clearFocus();
    }
  }, [focusedCategoryComponent]);

  return (
    <div className="product-main" ref={productMainRef} tabIndex={-1}>
      <h2 className="title">{name}</h2>
      {error && <h2>Something wrong happened during fetching</h2>}

      {products.length === 0 && !error && !loading && (
        <h2>{name} products currently not available</h2>
      )}

      <div className="product-grid">
        {products.length > 0 &&
          !error &&
          products.map((product) => (
            <ProductGridCard product={product} key={product.id} />
          ))}

        {loading &&
          Array(8)
            .fill(0)
            .map((_, i) => <CategorySkeletonLoader key={i} />)}
      </div>
    </div>
  );
};

export default ProductGrid;
