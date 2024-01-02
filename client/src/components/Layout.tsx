import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modals/Modal";
import Notification from "./Notifications/Notification";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Ecommerce</title>
      </Head>
      <div className="overlay"></div>
    
      <header>
        <Navbar />
      </header>

      <main className="main-container layout">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
