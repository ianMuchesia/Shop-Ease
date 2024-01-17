import DesktopCategoryCard from "@/components/Cards/DesktopCategoryCard";
import { desktopCategories } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {desktopCategories.map((category) => (
            <DesktopCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
