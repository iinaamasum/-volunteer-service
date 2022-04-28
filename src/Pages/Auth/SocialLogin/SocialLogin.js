import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
const SocialLogin = () => {
  return (
    <>
      <div className="sm:flex justify-between text-center">
        <button className="w-full mr-1 flex items-center justify-center text-xl font-semibold shadow bg-slate-600 rounded px-5 py-2 hover:bg-slate-800 text-white transition-all duration-200 ease-linear text-center my-1 sm:my-0">
          <FcGoogle size={30} className="mr-3" />
          Google
        </button>
        <button className="w-full mr-1 flex items-center justify-center text-xl font-semibold shadow bg-slate-600 rounded px-5 py-2 hover:bg-slate-800 text-white transition-all duration-200 ease-linear my-1 sm:my-0">
          <FaFacebook size={30} className="mr-3" />
          Facebook
        </button>
        <button className="w-full flex items-center justify-center text-xl font-semibold shadow bg-slate-600 rounded px-5 py-2 hover:bg-slate-800 text-white transition-all duration-200 ease-linear my-1 sm:my-0">
          <FaGithub size={30} className="mr-3" />
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
