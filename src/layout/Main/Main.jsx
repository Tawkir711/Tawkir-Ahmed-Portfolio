import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home';

const Main = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default Main;