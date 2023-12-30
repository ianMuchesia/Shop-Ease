import React, { useEffect, useState } from 'react'

const MobileSidebarHook = () => {

    const [openSidebar, setOpenSidebar] = React.useState(false);


  
    //this is to add the class active to the overlay when the sidebar is open
      useEffect(() => {
        const overlay = document.querySelector(".overlay");
    
        if (openSidebar) {
          if (overlay) {
            overlay.classList.add("active");
            
          }
        } else {
          if (overlay) {
            overlay.classList.remove("active");
          }
        }
    
        return () => {
          if (overlay) overlay.classList.remove("active");
        };
      }, [openSidebar]);
    



      return { openSidebar, setOpenSidebar}
}

export default MobileSidebarHook