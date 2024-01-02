import React from 'react'
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';



const login = () => {
  return (
    <main className='login-container'>
	<form className="form_container">
  <div className="logo_container"></div>
  <div className="title_container">
    <p className="title">Login to your Account</p>
    <span className="subtitle">Get started with our ShopEase, just login to your account and enjoy the experience.</span>
  </div>
  <br/>
  <div className="input_container">
    <label className="input_label" htmlFor="email_field">Email</label>
    <MdOutlineEmail className="icon" />

    <input placeholder="name@mail.com" title="Inpit title" name="input-name" type="text" className="input_field" id="email_field"/>
  </div>
  <div className="input_container">
    <label className="input_label" htmlFor="password_field">Password</label>
    <RiLockPasswordLine  className="icon"/>
    <input placeholder="Password" title="Inpit title" name="input-name" type="password" className="input_field" id="password_field"/>
  </div>
  <button title="Sign In" type="submit" className="sign-in_btn btn">
    <span>Sign In</span>
  </button>

  <div className="separator">
    <hr className="line"/>
    <span>Or</span>
    <hr className="line"/>
  </div>
  <button title="Sign In" type="submit" className="sign-in_ggl">
    <Image src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google" height={20} width={20}/>
    <span>Sign In with Google</span>
  </button>
  <div className="separator">
    <Link href="/signup">Dont have an account yet?</Link>
  </div>

 

  
 
</form>
</main>
  )
}

export default login