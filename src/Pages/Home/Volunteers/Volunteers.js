import React from 'react';
import Card from '../Card/Card';

const Volunteers = () => {
  return (
    <>
      <div
        style={{ maxWidth: '1200px' }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-6 my-5 px-4 xl:px-0 container"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Volunteers;
