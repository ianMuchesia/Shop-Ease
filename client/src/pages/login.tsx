import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { baseURL } from "@/lib/baseUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const router = useRouter()


  const onSubmit: SubmitHandler<LoginFormValues> = async(data) => {
   
    try {
      
      const { email, password } = data;

      const res = await axios.post(`${baseURL}/auth/login`, {email, password})

      console.log(res.data.access_token)
      localStorage.setItem('token', res.data.access_token);

      toast.success("Login Successful")
      reset()
      router.push("/")
    } catch (error:any) {
      if (error?.response?.data?.detail) {
        toast.error(error.response.data.detail)
      }else{  
        toast.error("Something went wrong")
      }
      console.log(error)

      
    }
  };

  return (
    <main className="login-container">
      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        <div className="logo_container"></div>
        <div className="title_container">
          <p className="title">Login to your Account</p>
          <span className="subtitle">
            Get started with our ShopEase, just login to your account and enjoy
            the experience.
          </span>
        </div>
        <br />
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">
            Email
          </label>
          <MdOutlineEmail className="icon" />

          <input
            {...register("email", { required: "Email is required" })}
            placeholder="name@mail.com"
            type="email"
            className={`input_field ${errors.email ? "input_error" : ""}`}
            id="email_field"
          />
          {errors.email && (
            <span className="error_message">{errors.email.message}</span>
          )}
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password_field">
            Password
          </label>
          <RiLockPasswordLine className="icon" />
          <input
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            type="password"
            className={`input_field ${errors.password ? "input_error" : ""}`}
            id="password_field"
          />
          {errors.password && (
            <span className="error_message">{errors.password.message}</span>
          )}
        </div>
        <button title="Sign In" type="submit" className="sign-in_btn btn">
          <span>Sign In</span>
        </button>

        <div className="separator">
          <hr className="line" />
          <span>Or</span>
          <hr className="line" />
        </div>
        <button title="Sign In" type="submit" className="sign-in_ggl">
          <Image
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="google"
            height={20}
            width={20}
          />
          <span>Sign In with Google</span>
        </button>
        <div className="separator">
          <Link href="/signup">Dont have an account yet?</Link>
        </div>
      </form>
    </main>
  );
};

export default Login;
