import React from 'react';
import bg from '../../../images/image/bg.svg';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-no-repeat bg-cover object-center"
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            minHeight: '80vh',
          }}
          className=""
        >
          <Navbar />
          <div className="flex items-center h-[40vh] justify-center">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl uppercase font-semibold tracking-wide font-sans my-3">
                I grow by helping people in need.
              </h1>
              <div className="">
                <input
                  type="text"
                  className="rounded-l px-6 py-2 w-2/3 md:w-1/2 outline-none placeholder:text-slate-400 font-medium tracking-wide text-slate-600"
                  placeholder="Search your desire service..."
                />
                <input
                  type="submit"
                  value="Search"
                  className="bg-blue-600 rounded-r px-5 py-2 w-1/4 md:w-1/6 text-slate-100 cursor-pointer hover:bg-blue-800 transition-all duration-200 ease-in-out hover:text-white font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
