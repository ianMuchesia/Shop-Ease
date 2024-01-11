import CountDownBox from "@/components/Cards/CountDownBox";
import Image from "next/image";
import React from "react";
import { IoStar, IoStarHalfOutline } from "react-icons/io5";

const ProductFeatured = () => {
  return (
    <div className="product-featured">
      <h2 className="title">Deal of the day</h2>

      <div className="showcase-wrapper has-scrollbar">
        <div className="showcase-container">
          <div className="showcase">
            <div className="showcase-banner">
              <Image
                height={500}
                width={500}
                src="/images/products/shampoo.jpg"
                alt="shampoo, conditioner & facewash packs"
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

              <a href="#">
                <h3 className="showcase-title">
                  shampoo, conditioner & facewash packs
                </h3>
              </a>

              <p className="showcase-desc">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet consectetur Lorem ipsum dolor
              </p>

              <div className="price-box">
                <p className="price">$150.00</p>

                <del>$200.00</del>
              </div>

              <button className="add-cart-btn">add to cart</button>

              <div className="showcase-status">
                <div className="wrapper">
                  <p>
                    already sold: <b>20</b>
                  </p>

                  <p>
                    available: <b>40</b>
                  </p>
                </div>

                <div className="showcase-status-bar"></div>
              </div>

              <div className="countdown-box">
                <p className="countdown-desc">Hurry Up! Offer ends in:</p>

              <CountDownBox/>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-container">
          <div className="showcase">
            <div className="showcase-banner">
              <Image
                height={500}
                width={500}
                src="/images/products/jewellery-1.jpg"
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
                <a href="#" className="showcase-title">
                  Rose Gold diamonds Earring
                </a>
              </h3>

              <p className="showcase-desc">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet consectetur Lorem ipsum dolor
              </p>

              <div className="price-box">
                <p className="price">$1990.00</p>
                <del>$2000.00</del>
              </div>

              <button className="add-cart-btn">add to cart</button>

              <div className="showcase-status">
                <div className="wrapper">
                  <p>
                    {" "}
                    already sold: <b>15</b>{" "}
                  </p>

                  <p>
                    {" "}
                    available: <b>40</b>{" "}
                  </p>
                </div>

                <div className="showcase-status-bar"></div>
              </div>

              <div className="countdown-box">
                <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                <div className="countdown">
                  <div className="countdown-content">
                    <p className="display-number">360</p>
                    <p className="display-text">Days</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">24</p>
                    <p className="display-text">Hours</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">59</p>
                    <p className="display-text">Min</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">00</p>
                    <p className="display-text">Sec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatured;
