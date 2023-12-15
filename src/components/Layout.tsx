import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'



interface LayoutProps {
    children: React.ReactNode
    }
const Layout = ({children}:LayoutProps) => {
  return (
    <div className="">
        <Head>
          <title>Ecommerce</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container layout">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
 
      </div>
  )
}

export default Layout