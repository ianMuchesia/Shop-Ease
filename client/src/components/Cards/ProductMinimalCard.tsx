import { Product } from "@/@types/product";
import { addToCart } from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

interface ProductMinimalCardProps {
  product: Product;
}
const ProductMinimalCard = ({ product }: ProductMinimalCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="showcase">
      <Link href={`/products/${product.id}`} className="showcase-img-box">
        <Image
          src={product.image}
          alt="relaxed short full sleeve t-shirt"
          width="70"
          height="70"
          className="showcase-img"
        />
      </Link>

      <div className="showcase-content">
        <a href="#">
          <h4 className="showcase-title">{product.name}</h4>
        </a>

        <a href="#" className="showcase-category">
          {product.category_rel
            ? product.category_rel.name
            : product.gender === "M"
            ? "Male"
            : "Female"}
        </a>

        <div className="price-box">
          <p className="price">Ksh. {product.price.toLocaleString()}</p>
          <del>Ksh. {(product.price * 115) / 100}</del>
          <button
            className="btn-action"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addToCart(product));
            }}
          >
            <IoCartOutline className="ion-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductMinimalCard;
