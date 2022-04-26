import React from 'react';
import { BiCollapse } from 'react-icons/bi';
import { RiMenuFoldFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Group 1329.png';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const links = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/donation', name: 'Donation' },
    { id: 3, path: '/events', name: 'Events' },
    { id: 4, path: '/blogs', name: 'Blog' },
  ];
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 bg-transparent sticky top-0 z-50 backdrop-opacity-20">
        <div
          style={{ maxWidth: '1200px' }}
          className="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/home"
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              <img className="h-9" src={logo} alt="" />
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? (
                <RiMenuFoldFill className="text-3xl text-red-600" />
              ) : (
                <BiCollapse className="text-3xl text-red-600" />
              )}
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-between justify-end' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <div className="lg:flex lg:items-center lg:justify-center w-full lg:w-auto">
              <div className="lg:flex items-center w-full lg:w-auto text-center ">
                {links.map((link) => (
                  <Link
                    className="block my-2 lg:my-0 text-center lg:inline-block mr-0 md:mr-10 text-md font-semibold text-gray-400 hover:text-red-800 transition-all duration-150 ease-in-out"
                    to={link.path}
                    key={link.id}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  className="text-black my-2 lg:my-0 font-sans tracking-wider font-semibold text-md mr-3 hover:bg-gray-100 px-5 py-1 rounded-full hover:text-red-700 shadow hover:shadow outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 w-3/4 lg:w-auto"
                  type="button"
                >
                  Log In
                </button>
                <button
                  className="bg-orange-600 my-2 lg:my-0 text-white active:bg-red-800
                  hover:bg-orange-800 font-bold  text-md px-5 py-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 w-3/4 lg:w-auto tracking-wider mr-3"
                  type="button"
                >
                  Sign Up
                </button>
                <button
                  className="bg-purple-600 my-2 lg:my-0 text-white active:bg-red-800
                  hover:bg-purple-800 font-bold  text-md px-5 py-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-3/4 lg:w-auto tracking-wider"
                  type="button"
                >
                  Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
