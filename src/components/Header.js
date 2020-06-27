import React from 'react';
import ArrowIcon from '../assets/arrowIcon';
import { Link } from 'gatsby';

const Header = () => {
  //   const navLinks = ['services', 'our work', 'Packages', 'About Us'];

  return (
    <header id="top" className="w-full text-white content-center">
      <div className="header-center flex flex-col absolute items-center text-center mt-30 mb-12">
        <h1 className="heading flex justify-center text-4xl font-black">
          We're Space Rebel
        </h1>
        <h1 className="flex justify-center font-light mt-6 mb-16 lg:my-16 mx-6 font-black text-sm md:text-xl">
          Your trusted guide to navigating the digital universe. <br /> We help
          businesses get found online.
        </h1>
        <Link to="/#why-us" className="text-xs font-medium text-gray-2">
          SCROLL TO CONTINUE{'  '}
          <ArrowIcon className={'inline mx-2'} color={'#9A9A9A'} />
        </Link>
      </div>
    </header>
  );
};
export default Header;
