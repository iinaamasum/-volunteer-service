import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../../images/auth/signup.jpg';
import Footer from '../../Shared/Footer/Footer';
import NavAlter from '../../Shared/NavAlter/NavAlter';
import './Login.css';

const Login = () => {
  return (
    <>
      <div className="hero pb-16">
        <NavAlter />
        <div style={{ maxWidth: '1200px' }} className="mx-auto">
          <div className="container mx-auto px-5 md:px-0 lg:flex justify-between ">
            <div className="mt-5 md:mt-10 px-8 order-last">
              <img className="w-full h-[70vh]" src={login} alt="" />
            </div>
            <form className="w-full lg:w-1/2">
              <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-5">
                <h2 className="text-gray-900 text-2xl text-center font-medium title-font mb-3">
                  Log In
                </h2>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Your Email"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Password"
                  />
                </div>
                <p className="">
                  Don't have an account?{' '}
                  <Link
                    className="text-blue-600 underline font-semibold"
                    to="/signup"
                  >
                    Sign Up Now
                  </Link>
                </p>
                <p>
                  Forgot Password?{' '}
                  <Link
                    className="text-blue-600 underline font-semibold"
                    to="/resetPass"
                  >
                    Click here to reset
                  </Link>
                </p>
                <input
                  type="submit"
                  value="Sign Up"
                  className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
