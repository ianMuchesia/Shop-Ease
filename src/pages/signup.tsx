import Image from 'next/image'
import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { CiUser } from "react-icons/ci";
import Link from 'next/link';

const signup = () => {
  return (
    <main className='login-container'>
	<form className="form_container">
  <div className="logo_container"></div>
  <div className="title_container">
    <p className="title">Create your Account</p>
    <span className="subtitle">Get started with our ShopEase, just create an account and enjoy the experience.</span>
  </div>
  <br/>


    <div className="input_container">
        <label className="input_label" htmlFor="name_field">Name</label>
        <CiUser 
className="icon" />
    
        <input placeholder="name" title="Inpit title" name="input-name" type="text" className="input_field" id="name_field"/>
        </div>
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
  <div className="input_container">
    <label className="input_label" htmlFor="cpassword_field">Confirm Password</label>
    <RiLockPasswordLine  className="icon"/>
    <input placeholder="Confirm Password" title="Inpit title" name="input-name" type="password" className="input_field" id="cpassword_field"/>
  </div>
  <button title="Sign In" type="submit" className="sign-in_btn btn">
    <span>Sign up</span>
  </button>

  <div className="separator">
    <hr className="line"/>
    <span>Or</span>
    <hr className="line"/>
  </div>
  <button title="Sign In" type="submit" className="sign-in_ggl">
    <Image src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google" height={20} width={20}/>
    <span>Sign Up with Google</span>
  </button>

  <div className="separator">
    <Link href="/login">Already have an account?</Link>
  </div>

  
 
</form>
</main>
  )
}

export default signup