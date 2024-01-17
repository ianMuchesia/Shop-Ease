import UseFetchCategory from "@/lib/UseFetchCategory";
import UseFocusManager from "@/lib/UseFocusManager";
import { sidebarCategories } from "@/lib/data";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

interface Props {
  category: {
    id: number;
    name: string;
    image: string;
  };
}

const DesktopCategoryCard = ({ category }: Props) => {

    const {dispatchFetchCategory} = UseFetchCategory()
    const {setFocus} = UseFocusManager()

    const findCategory = sidebarCategories.find((item) => item.name === category.name);

    const handleCategory = () => {
        if(!findCategory){
            toast.error("Category not found")
            return
        }
        dispatchFetchCategory(findCategory)
        setFocus("category-component")

    }
  return (
    <div className="category-item">
      <div className="category-img-box">
        <Image
          src={`/images/icons/${category.image}`}
          alt="dress & frock"
          height={30}
          width="30"
        />
      </div>

      <div className="category-content-box">
        <div className="category-content-flex">
          <h3 className="category-item-title">{category.name}</h3>

          {/* <p className="category-item-amount">(53)</p> */}
        </div>

        <p onClick={handleCategory} style={{cursor:"pointer"}} className="category-btn">
          Show all
        </p>
      </div>
    </div>
  );
};

export default DesktopCategoryCard;
