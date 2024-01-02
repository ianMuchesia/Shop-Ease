import React, { useState } from "react";
import {
  IoCaretBackOutline,
  IoCloseOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeSidebar } from "@/store/features/sidebarsSlice";
import {menuAccordions} from "@/lib/data"
import MenuAccordions from "@/components/Accordions/MenuAccordions";



const MobileSideBarMenu = () => {

  const dispatch = useAppDispatch()

  const [ activeAccordion, setActiveAccordion] = useState<string|null>(null)

  const isOpenSidebar  = useAppSelector(state => state.sidebars.sidebars.menu.isOpen)


  const handleCloseSidebar = () => {
    dispatch(closeSidebar("menu"))
  }

  


  return (
    <nav className={`mobile-navigation-menu has-scrollbar ${isOpenSidebar && 'active'}`} data-mobile-menu>
      <div className="menu-top">
        <h2 className="menu-title">Menu</h2>

        <button className="menu-close-btn" data-mobile-menu-close-btn onClick={handleCloseSidebar}>
          <IoCloseOutline />
        </button>
      </div>

      <ul className="mobile-menu-category-list">
        <li className="menu-category">
          <a href="#" className="menu-title">
            Home
          </a>
        </li>

{
  menuAccordions.map(accordion=>(
    <MenuAccordions
    key={accordion.id}
    title={accordion.title}
    content={accordion.content}
    isActive={activeAccordion === accordion.title}
    setAccordion={setActiveAccordion}
    />
  ))
}
        

        <li className="menu-category">
          <a href="#" className="menu-title">
            Blog
          </a>
        </li>

        <li className="menu-category">
          <a href="#" className="menu-title">
            Hot Offers
          </a>
        </li>
      </ul>

      <div className="menu-bottom">
        <ul className="menu-category-list">
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Language</p>

              <IoCaretBackOutline className="caret-back" />
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  English
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Espa&ntilde;ol
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Fren&ccedil;h
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Currency</p>
              <IoCaretBackOutline className="caret-back" />
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  USD &dollar;
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  EUR &euro;
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="menu-social-container">
          <li>
            <a href="#" className="social-link">
              <IoLogoFacebook />
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <IoLogoTwitter />
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <IoLogoLinkedin />
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileSideBarMenu;
