import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="flex items-center h-[40vh] justify-center z-0">
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
  );
};

export default Header;
