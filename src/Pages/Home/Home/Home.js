import React from 'react';
import bg from '../../../images/image/bg.svg';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import Volunteers from '../Volunteers/Volunteers';

const Home = () => {
  return (
    <>
      <div className="">
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="bg-no-repeat bg-cover object-center"
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              maxHeight: '80vh',
            }}
            className=""
          >
            <Navbar />
            <Header />
          </div>
        </div>
        <Volunteers />
      </div>
      <Footer />
    </>
  );
};

export default Home;
