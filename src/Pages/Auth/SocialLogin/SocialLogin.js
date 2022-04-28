import React from 'react';
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../../firebase.init';

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, gitUser, gitlLoading, gitError] =
    useSignInWithGithub(auth);
  return (
    <>
      <div className="sm:flex justify-between text-center">
        <button
          onClick={() => signInWithGoogle()}
          className="w-full mr-1 flex items-center justify-center text-xl font-semibold shadow bg-slate-600 rounded px-5 py-2 hover:bg-slate-800 text-white transition-all duration-200 ease-linear text-center my-1 sm:my-0"
        >
          <FcGoogle size={30} className="mr-3" />
          Google
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="w-full mr-1 flex items-center justify-center text-xl font-semibold shadow bg-slate-600 rounded px-5 py-2 hover:bg-slate-800 text-white transition-all duration-200 ease-linear my-1 sm:my-0"
        >
          <FaFacebook size={30} className="mr-3" />
          Facebook
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="w-full flex items-center justify-center text-xl font-semibold shadow bg-slate-600 rounded px-5 py-2 hover:bg-slate-800 text-white transition-all duration-200 ease-linear my-1 sm:my-0"
        >
          <FaGithub size={30} className="mr-3" />
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
