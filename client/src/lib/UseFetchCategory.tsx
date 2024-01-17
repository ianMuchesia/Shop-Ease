import { SidebarName } from "@/@types";
import {
  fetchCategoryProducts,
  setCategoryName,
} from "@/store/features/categorySlice";
import { closeSidebar } from "@/store/features/sidebarsSlice";
import { useAppDispatch } from "@/store/hooks";


type findCategory = {
  endpoint: string;
  actionType: string;
  name: string;
};

const UseFetchCategory = () => {
  const dispatch = useAppDispatch();

  const dispatchFetchCategory = (findCategory: findCategory) => {
    dispatch(
      fetchCategoryProducts({
        endpoint: findCategory?.endpoint,
        actionType: findCategory?.actionType,
      })
    );

    dispatch(setCategoryName(findCategory?.name));
  };

  const dispatchCloseSidebar = (bartype: SidebarName) =>
    dispatch(closeSidebar(bartype));

  return {
    dispatchFetchCategory,
    dispatchCloseSidebar,
  };
};

export default UseFetchCategory;
