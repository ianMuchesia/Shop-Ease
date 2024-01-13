import UseFocusManager from "@/lib/UseFocusManager";
import { sidebarCategories } from "@/lib/data";
import {
  fetchCategoryProducts,
  setCategoryName,
} from "@/store/features/categorySlice";
import { closeSidebar } from "@/store/features/sidebarsSlice";
import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import { useState } from "react";
import { set } from "react-hook-form";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

interface CategoryAccordionsProps {
  title: string;
  image: string;
  content: string[];
  isActive: boolean;
  setAccordion: React.Dispatch<React.SetStateAction<string | null>>;
}

const CategoryAccordions = ({
  title,
  image,
  content,
  isActive,
  setAccordion,
}: CategoryAccordionsProps) => {
  const dispatch = useAppDispatch();

  const { setFocus} = UseFocusManager()

  //if category name matches, return the category object
  const findCategory = sidebarCategories.find(
    (category) => category.name === title
  );

  //for async thunk function, we need to pass an object with endpoint and actionType
  const handleFetchCategory = async () => {
    if (!findCategory) {
      return;
    }
    setAccordion(isActive ? null : title);

    dispatch(
      fetchCategoryProducts({
        endpoint: findCategory?.endpoint,
        actionType: findCategory?.actionType,
      })
    );

    dispatch(setCategoryName(findCategory?.name));

    dispatch(closeSidebar("category"));
    setFocus("category-component")
  };

  return (
    <li className="sidebar-menu-category">
      <button className="sidebar-accordion-menu" data-accordion-btn>
        <div className="menu-title-flex">
          <Image
            src={`/images/icons/${image}`}
            alt="footwear"
            className="menu-title-img"
            width="20"
            height="20"
          />

          <p className="menu-title">{title}</p>
        </div>

        <div>
          {!isActive ? (
            <IoAddOutline
              className="ion-icon add-icon"
              onClick={handleFetchCategory}
            />
          ) : (
            <IoRemoveOutline
              className="ion-icon remove-icon"
              onClick={handleFetchCategory}
            />
          )}
        </div>
      </button>

      {/* <ul className={`sidebar-submenu-category-list ${isActive && "active"}`}  data-accordion>
        {content.map((item, index) => (
          <li className="sidebar-submenu-category" key={index}>
            <a href="#" className="sidebar-submenu-title">
              <p className="product-name">{item}</p>
              <data value="45" className="stock" title="Available Stock">
                45
              </data>
            </a>
          </li>
        ))}
      
      </ul> */}
    </li>
  );
};

export default CategoryAccordions;
