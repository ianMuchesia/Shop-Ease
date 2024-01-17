import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCallOutline, IoLocationOutline, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter,  IoMailOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer>

    <div className="footer-category">

      <div className="container">

        <h2 className="footer-category-title">Brand directory</h2>

        <div className="footer-category-box">

          <h3 className="category-box-title">Fashion :</h3>

          <Link href="/" className="footer-category-link">T-shirt</Link>
          <Link href="/" className="footer-category-link">Shirts</Link>
          <Link href="/" className="footer-category-link">shorts & jeans</Link>
          <Link href="/" className="footer-category-link">jacket</Link>
          <Link href="/" className="footer-category-link">dress & frock</Link>
          <Link href="/" className="footer-category-link">innerwear</Link>
          <Link href="/" className="footer-category-link">hosiery</Link>

        </div>

        <div className="footer-category-box">
          <h3 className="category-box-title">footwear :</h3>
        
          <Link href="/" className="footer-category-link">sport</Link>
          <Link href="/" className="footer-category-link">formal</Link>
          <Link href="/" className="footer-category-link">Boots</Link>
          <Link href="/" className="footer-category-link">casual</Link>
          <Link href="/" className="footer-category-link">cowboy shoes</Link>
          <Link href="/" className="footer-category-link">safety shoes</Link>
          <Link href="/" className="footer-category-link">Party wear shoes</Link>
          <Link href="/" className="footer-category-link">Branded</Link>
          <Link href="/" className="footer-category-link">Firstcopy</Link>
          <Link href="/" className="footer-category-link">Long shoes</Link>
        </div>

        <div className="footer-category-box">
          <h3 className="category-box-title">jewellery :</h3>
        
          <Link href="/" className="footer-category-link">Necklace</Link>
          <Link href="/" className="footer-category-link">Earrings</Link>
          <Link href="/" className="footer-category-link">Couple rings</Link>
          <Link href="/" className="footer-category-link">Pendants</Link>
          <Link href="/" className="footer-category-link">Crystal</Link>
          <Link href="/" className="footer-category-link">Bangles</Link>
          <Link href="/" className="footer-category-link">bracelets</Link>
          <Link href="/" className="footer-category-link">nosepin</Link>
          <Link href="/" className="footer-category-link">chain</Link>
          <Link href="/" className="footer-category-link">Earrings</Link>
          <Link href="/" className="footer-category-link">Couple rings</Link>
        </div>

        <div className="footer-category-box">
          <h3 className="category-box-title">cosmetics :</h3>
        
          <Link href="/" className="footer-category-link">Shampoo</Link>
          <Link href="/" className="footer-category-link">Bodywash</Link>
          <Link href="/" className="footer-category-link">Facewash</Link>
          <Link href="/" className="footer-category-link">makeup kit</Link>
          <Link href="/" className="footer-category-link">liner</Link>
          <Link href="/" className="footer-category-link">lipstick</Link>
          <Link href="/" className="footer-category-link">prefume</Link>
          <Link href="/" className="footer-category-link">Body soap</Link>
          <Link href="/" className="footer-category-link">scrub</Link>
          <Link href="/" className="footer-category-link">hair gel</Link>
          <Link href="/" className="footer-category-link">hair colors</Link>
          <Link href="/" className="footer-category-link">hair dye</Link>
          <Link href="/" className="footer-category-link">sunscreen</Link>
          <Link href="/" className="footer-category-link">skin loson</Link>
          <Link href="/" className="footer-category-link">liner</Link>
          <Link href="/" className="footer-category-link">lipstick</Link>
        </div>

      </div>

    </div>

    <div className="footer-nav">

      <div className="container">

        <ul className="footer-nav-list">

          <li className="footer-nav-item">
            <h2 className="nav-title">Popular Categories</h2>
          </li>

          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Fashion</Link>
          </li>

          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Electronic</Link>
          </li>

          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Cosmetic</Link>
          </li>

          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Health</Link>
          </li>

          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Watches</Link>
          </li>

        </ul>

        <ul className="footer-nav-list">
        
          <li className="footer-nav-item">
            <h2 className="nav-title">Products</h2>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Prices drop</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">New products</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Best sales</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Contact us</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Sitemap</Link>
          </li>
        
        </ul>

        <ul className="footer-nav-list">
        
          <li className="footer-nav-item">
            <h2 className="nav-title">Our Company</h2>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Delivery</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Legal Notice</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Terms and conditions</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">About us</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Secure payment</Link>
          </li>
        
        </ul>

        <ul className="footer-nav-list">
        
          <li className="footer-nav-item">
            <h2 className="nav-title">Services</h2>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Prices drop</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">New products</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Best sales</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Contact us</Link>
          </li>
        
          <li className="footer-nav-item">
            <Link href="/" className="footer-nav-link">Sitemap</Link>
          </li>
        
        </ul>

        <ul className="footer-nav-list">

          <li className="footer-nav-item">
            <h2 className="nav-title">Contact</h2>
          </li>

          <li className="footer-nav-item flex">
            <div className="icon-box">
              <IoLocationOutline className="ion-icon" />
            </div>

            <address className="content">
              123, Main Road, Mombasa, Kenya
            </address>
          </li>

          <li className="footer-nav-item flex">
            <div className="icon-box">
              <IoCallOutline className="ion-icon" />
            </div>

            <a href="tel:+2547000000" className="footer-nav-link">+254 000 000</a>
          </li>

          <li className="footer-nav-item flex">
            <div className="icon-box">
              <IoMailOutline className="ion-icon" />
            </div>

            <a href="mailto:example@gmail.com" className="footer-nav-link">example@gmail.com</a>
          </li>

        </ul>

        <ul className="footer-nav-list">

          <li className="footer-nav-item">
            <h2 className="nav-title">Follow Us</h2>
          </li>

          <li>
            <ul className="social-link">

              <li className="footer-nav-item">
                <Link href="/" className="footer-nav-link">
                  <IoLogoFacebook className="ion-icon" />
                </Link>
              </li>

              <li className="footer-nav-item">
                <Link href="/" className="footer-nav-link">
                  <IoLogoTwitter className="ion-icon" />
                </Link>
              </li>

              <li className="footer-nav-item">
                <Link href="/" className="footer-nav-link">
                
                  <IoLogoLinkedin className="ion-icon" />
                </Link>
              </li>

              <li className="footer-nav-item">
                <Link href="/" className="footer-nav-link">
                  <IoLogoInstagram className="ion-icon" />
                </Link>
              </li>

            </ul>
          </li>

        </ul>

      </div>

    </div>

    <div className="footer-bottom">

      <div className="container">

        <Image  height={30} width={300} src="/images/payment.png" alt="payment method" className="payment-img"/>

        <p className="copyright">
          Copyright &copy; <Link href="/">Msodoki</Link> all rights reserved. <span>{new Date().getFullYear()}</span>
        </p>

      </div>

    </div>

  </footer>



  )
}

export default Footer