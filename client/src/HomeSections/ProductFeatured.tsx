import { Product } from "@/@types/product";
import CountDownBox from "@/components/Cards/CountDownBox";
import ProductFeaturedCard from "@/components/Cards/ProductFeaturedCard";
import { useGetCosmeticsQuery } from "@/store/services/Api";
import Image from "next/image";
import React from "react";
import { IoStar, IoStarHalfOutline } from "react-icons/io5";
type CosmeticsResponse={
  data:Product[]
  isLoading:boolean
  error:any
}

const ProductFeatured = () => {

  const {data, isLoading , error} = useGetCosmeticsQuery<CosmeticsResponse>(undefined)


  return (
    <div className="product-featured">
      <h2 className="title">{error?"something wrong happened":"Deal of the day"}</h2>

      <div className="showcase-wrapper has-scrollbar">
      {!isLoading && data && data.map((product)=><ProductFeaturedCard key={product.id} product={product}/>)}

   
      </div>
    </div>
  );
};

export default ProductFeatured;
