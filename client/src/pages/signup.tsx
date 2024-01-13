import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';  // Assuming CiUser is the user icon
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { baseURL } from '@/lib/baseUrl';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

interface SignupFormValues {
  name: string;
  email: string;
  phone:string;
  password: string;
  cpassword: string;
}

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<SignupFormValues>();

  const router = useRouter();

  const password = watch('password');
  const cpassword = watch('cpassword');

  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    try {
      const { name, email, phone,password, cpassword } = data;

      // Custom validation to check if password and confirm password match
      if (password !== cpassword) {
        toast.error('Passwords do not match');
        return;
      }

      const res = await axios.post(`${baseURL}/auth/register`, { name, phone,email, password });

      console.log(res.data);
      localStorage.setItem('token', res.data.access_token);
      toast.success('Signup Successful');
      reset();
      router.push('/');
    } catch (error: any) {
      if (error?.response?.data?.detail) {
        toast.error(error.response.data.detail);
      }else if(error?.response?.data.msg){

        toast.error(error.response.data.msg)
      } else {
        toast.error('Something went wrong');
      }
      console.log(error);
    }
  };

  return (
    <main className="login-container">
      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        <div className="logo_container"></div>
        <div className="title_container">
          <p className="title">Create your Account</p>
          <span className="subtitle">Get started with our ShopEase, just create an account and enjoy the experience.</span>
        </div>
        <br />

        <div className="input_container">
          <label className="input_label" htmlFor="name_field">
            Name
          </label>
          <CiUser className="icon" />

          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="name"
            type="text"
            className={`input_field ${errors.name ? 'input_error' : ''}`}
            id="name_field"
          />
          {errors.name && <span className="error_message">{errors.name.message}</span>}
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">
            Email
          </label>
          <MdOutlineEmail className="icon" />

          <input
            {...register('email', { required: 'Email is required' })}
            placeholder="name@mail.com"
            type="email"
            className={`input_field ${errors.email ? 'input_error' : ''}`}
            id="email_field"
          />
          {errors.email && <span className="error_message">{errors.email.message}</span>}
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="phone_field">
            Phone
          </label>
          <MdOutlinePhone className="icon" />

          <input
            {...register('phone', { required: 'Phone number is required' })}
            placeholder="0700 000 000"
            type="text"
            className={`input_field ${errors.phone ? 'input_error' : ''}`}
            id="phone_field"
          />
          {errors.phone && <span className="error_message">{errors.phone?.message}</span>}
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password_field">
            Password
          </label>
          <RiLockPasswordLine className="icon" />
          <input
            {...register('password', { required: 'Password is required' })}
            placeholder="Password"
            type="password"
            className={`input_field ${errors.password ? 'input_error' : ''}`}
            id="password_field"
          />
          {errors.password && <span className="error_message">{errors.password.message}</span>}
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="cpassword_field">
            Confirm Password
          </label>
          <RiLockPasswordLine className="icon" />
          <input
            {...register('cpassword', {
              required: 'Confirm Password is required',
              validate: (value) => value === password || 'Passwords do not match',
            })}
            placeholder="Confirm Password"
            type="password"
            className={`input_field ${errors.cpassword ? 'input_error' : ''}`}
            id="cpassword_field"
          />
          {errors.cpassword && <span className="error_message">{errors.cpassword.message}</span>}
        </div>
        <button title="Sign Up" type="submit" className="sign-in_btn btn">
          <span>Sign Up</span>
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
          <span>Sign Up with Google</span>
        </button>

        <div className="separator">
          <Link href="/login">Already have an account?</Link>
        </div>
      </form>
    </main>
  );
};

export default Signup;
