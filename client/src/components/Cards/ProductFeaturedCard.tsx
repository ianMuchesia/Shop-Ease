import { Product } from "@/@types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStar, IoStarHalfOutline } from "react-icons/io5";
import CountDownBox from "./CountDownBox";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/features/cartSlice";

interface ProductFeaturedCardProps {
  product: Product;
}
const ProductFeaturedCard = ({ product }: ProductFeaturedCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="showcase-container">
      <div className="showcase">
        <div className="showcase-banner">
          <Image
            height={500}
            width={500}
            src={product.image}
            alt="Rose Gold diamonds Earring"
            className="showcase-img"
          />
        </div>

        <div className="showcase-content">
          <div className="showcase-rating">
            <IoStar className="ion-icon" />
            <IoStar className="ion-icon" />
            <IoStar className="ion-icon" />

            <IoStarHalfOutline className="ion-icon" />
            <IoStarHalfOutline className="ion-icon" />
          </div>

          <h3 className="showcase-title">
            <Link href={`/products/${product.id}`} className="showcase-title">
              {product.name}
            </Link>
          </h3>

          <p className="showcase-desc">{product.description}</p>

          <div className="price-box">
            <p className="price">Ksh. {product.price.toLocaleString()}</p>
            <del>Ksh. {((product.price * 110) / 100).toLocaleString()}</del>
          </div>

          <button
            className="add-cart-btn"
            onClick={() => dispatch(addToCart(product))}
          >
            add to cart
          </button>

          <div className="showcase-status">
            <div className="wrapper">
              <p>
                {" "}
                already sold: <b>7</b>{" "}
              </p>

              <p>
                {" "}
                available: <b>13</b>{" "}
              </p>
            </div>

            <div className="showcase-status-bar"></div>
          </div>

          <div className="countdown-box">
            <p className="countdown-desc">Hurry Up! Offer ends in:</p>

            <CountDownBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeaturedCard;
