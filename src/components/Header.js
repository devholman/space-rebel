import React from 'react';
import ArrowIcon from '../assets/arrowIcon';
import SpaceRebelLogo from '../assets/spaceRebelLogo'
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="w-full text-white content-center">
      <div className="header-center flex flex-col absolute items-center text-center mt-30 mb-12">
        <SpaceRebelLogo height="200" width="200"/>
                <h1 className="heading flex justify-center text-4xl font-black mb-1">
          We're Space Rebel
        </h1>
        <h1 className="flex justify-center font-light mt-6 mb-16 lg:mb-16 lg:mt-2 mx-6 font-black text-sm md:text-xl">
          Your trusted guide to navigating the digital universe. <br /> We help
          businesses get noticed online.
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
