import React, { useEffect } from "react";
import MobileBottom from "./MobileComponents/MobileBottom";
import MobileSidebarMenu from "./MobileComponents/MoblieSidebarMenu";

const MobileNavbar = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);


  
//this is to add the class active to the overlay when the sidebar is open
  useEffect(() => {
    const overlay = document.querySelector(".overlay");

    if (openSidebar) {
      if (overlay) {
        overlay.classList.add("active");
        console.log("hello")
      }
    } else {
      if (overlay) {
        overlay.classList.remove("active");
      }
    }

    // return () => {
    //   if (overlay) overlay.classList.remove("active");
    // };
  }, [openSidebar]);

  return (
    <>
      <MobileBottom  setOpenSidebar={setOpenSidebar}/>
      <MobileSidebarMenu
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
    </>
  );
};

export default MobileNavbar;
