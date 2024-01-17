import { openSidebar } from "@/store/features/sidebarsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";

import { IoBagOutline, IoHeartOutline, IoPersonOutline } from "react-icons/io5";

const MainHeader = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const cartTotalItems = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <div className="header-main">
      <div className="container">
        <Link href="/" className="header-logo">
          <h1>ShopEase</h1>
        </Link>

        <div className="header-search-container">
          {/* <input
          type="search"
          name="search"
          className="search-field"
          placeholder="Enter your product name..."
        />

        <button className="search-btn">
            <IoSearchOutline />
        </button> */}
        </div>

        <div className="header-user-actions">
          <button className="action-btn" onClick={() => router.push("/login")}>
            <IoPersonOutline className="ion-icon" />
          </button>

          <button
            className="action-btn"
            onClick={() => {
              toast.error("Feature not available");
            }}
          >
            <IoHeartOutline className="ion-icon" />
            <span className="count">0</span>
          </button>

          <button
            className="action-btn"
            onClick={() => {
              dispatch(openSidebar("cart"));
            }}
          >
            <IoBagOutline className="ion-icon" />

            <span className="count">{cartTotalItems}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
