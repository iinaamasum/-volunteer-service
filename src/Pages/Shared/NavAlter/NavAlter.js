import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Group 1329.png';

const NavAlter = () => {
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between px-2 bg-slate-50 sticky top-0 z-50 backdrop-opacity-20">
        <div
          style={{ maxWidth: '1200px' }}
          className="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
          <div className="mx-auto">
            <Link
              to="/home"
              className="text-3xl font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white mx-auto"
            >
              <img className="h-12" src={logo} alt="" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavAlter;
