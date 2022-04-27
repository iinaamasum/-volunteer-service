import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import mg from '../../../images/image/babySit.png';

const Card = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up">
      <div
        // style={{ height: '16rem' }}
        className="relative cursor-pointer hover:shadow-lg rounded-lg hover:transition-all hover:duration-500 ease-in-out text-xl hover:text-2xl text-white h-60 sm:h-72 md:h-80"
      >
        <img className="w-full h-full" src={mg} alt="" />
        <p className="absolute bottom-0 rounded-b-lg bg-red-400 w-full py-2 text-center">
          Lorem ipsum dolor sit.
        </p>
      </div>
    </div>
  );
};

export default Card;
