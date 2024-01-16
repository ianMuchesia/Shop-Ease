import { Product } from "@/@types/product";
import Rating from "@/UI/Rating";
import { addToCart } from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  IoBagAddOutline,
  IoCartOutline,
  IoEyeOutline,
  IoHeartOutline,
  IoRepeatOutline,
} from "react-icons/io5";

interface ProductGridCardProps {
  product: Product;
}

const ProductGridCard = ({ product }: ProductGridCardProps) => {


  const dispatch = useAppDispatch()

  const router = useRouter()


  return (
    <div className="showcase">
      <div className="showcase-banner">
        <Image
          height={200}
          src={product.image}
          alt={product.name}
          width="300"
          className="product-img default"
        />
        <Image
          height={200}
          src={product.image}
          alt={product.name}
          width="300"
          className="product-img hover"
        />

        {product.price >= 10000 ? (
          <p className="showcase-badge">15%</p>
        ) : product.price >= 7000 ? (
          <p className="showcase-badge">10%</p>
        ) : product.price >= 3000 ? (
          <p className="showcase-badge">5%</p>
        ) : (
          <p className="showcase-badge angle black">sale</p>
        )}

        <div className="showcase-actions">
          <button className="btn-action">
            <IoHeartOutline className="ion-icon" />
          </button>

          <button className="btn-action" onClick={()=>{router.push(`/products/${product.id}`)}}>
            <IoEyeOutline className="ion-icon" />
          </button>
          
          <button className="btn-action" onClick={()=>{dispatch(addToCart(product))}}>
            <IoCartOutline className="ion-icon" />
          </button>
        </div>
      </div>

      <div className="showcase-content">
        <a href="#" className="showcase-category">
          {product.category_rel? product.category_rel.name : "No category"}
        </a>

        <a href="#">
          <h3 className="showcase-title">{product.name}</h3>
        </a>

        <Rating rating={product.rating} />

        <div className="price-box">
          <p className="price">Ksh. {product.price.toLocaleString()}</p>
          {/* this is calculating discount 15% and that ..... */}
          {product.price >= 10000 ? (
            <del>Ksh. {(product.price * 115) / 100}</del>
          ) : product.price >= 7000 ? (
            <del>Ksh. {(product.price * 110) / 100}</del>
          ) : product.price >= 3000 ? (
            <del>Ksh. {(product.price * 105) / 100}</del>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductGridCard;
