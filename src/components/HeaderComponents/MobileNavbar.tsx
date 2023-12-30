import React, { useEffect } from "react";
import MobileBottom from "./MobileComponents/MobileBottom";
import MobileSidebarMenu from "../../Sidebars/MoblieSidebarMenu";
import { useAppSelector } from "@/store/hooks";

const MobileNavbar = () => {

  const darken = useAppSelector(state=>state.sidebars.darkenBackground)
    


  

  useEffect(() => {
    const overlay = document.querySelector(".overlay");

    if (darken) {
      if (overlay) {
        overlay.classList.add("active");
       
      }
    } else {
      if (overlay) {
        overlay.classList.remove("active");
      }
    }

    // return () => {
    //   if (overlay) overlay.classList.remove("active");
    // };
  }, [darken]);

  return (
    <>
      <MobileBottom />
      <MobileSidebarMenu />
    </>
  );
};

export default MobileNavbar;
