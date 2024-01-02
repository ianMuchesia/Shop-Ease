import React from "react";
import SidebarCategory from "../../Sidebars/SidebarCategory";
import {  useAppSelector } from "@/store/hooks";
import ProductShowCase from "../../Sidebars/ProductShowCase";

interface sidebarProps {
  product_detail?: boolean;
}

const Sidebar = ({product_detail}:sidebarProps) => {



  const isOpen = useAppSelector(state=>state.sidebars.sidebars.category.isOpen)


  return (
    <>
        <div className={`sidebar  has-scrollbar ${isOpen && "active"} ${product_detail && "product_detail"}`} data-mobile-menu>

      <SidebarCategory />
      <ProductShowCase/>
      </div>
    </>
  );
};

export default Sidebar;
