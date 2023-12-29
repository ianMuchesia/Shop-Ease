import React from "react";
import SidebarCategory from "../../Sidebars/SidebarCategory";
import {  useAppSelector } from "@/store/hooks";
import ProductShowCase from "../../Sidebars/ProductShowCase";

const Sidebar = () => {



  const isOpen = useAppSelector(state=>state.sidebars.sidebars.category.isOpen)


  return (
    <>
        <div className={`sidebar  has-scrollbar ${isOpen && "active"}`} data-mobile-menu>

      <SidebarCategory />
      <ProductShowCase/>
      </div>
    </>
  );
};

export default Sidebar;
