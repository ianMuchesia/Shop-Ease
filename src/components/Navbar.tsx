import React from 'react'
import TopHeader from './HeaderComponents/TopHeader'
import MainHeader from './HeaderComponents/MainHeader'
import DesktopNavbar from './HeaderComponents/DesktopNavbar'
import MobileNavbar from './HeaderComponents/MobileNavbar'

const Navbar = () => {
  return (
   <>
  <TopHeader/>
  <MainHeader/>
  <DesktopNavbar/>
  <MobileNavbar/>
   </>
  )
}

export default Navbar