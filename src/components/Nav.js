import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import PrimaryCTA from '../components/buttons/PrimaryCTA';
import SpaceRebelLogo from '../assets/spaceRebelLogo';
// import Burger from './Burger';
const Nav = ({ siteTitle }) => {
  const navLinks = ['services', 'our work', 'Packages', 'About Us'];
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="flex flex-wrap bg-black p-6 items-end justify-between w-full z-50 relative">
        <div className="flex items-center flex-shrink-0 text-sr-blue-1 mr-6">
          <span className="mr-4 md:mr-6">
            <SpaceRebelLogo width={'41'} />
          </span>
          <Link to="/" className="logo font-normal text-xl tracking-tight">
            {siteTitle}
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-white-400 hover:text-white hover:border-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            {/* <Burger /> */}
          </button>
        </div>
        <div
          className={`${
            showMenu ? 'block' : 'hidden'
          } flex-grow md:flex md:items-baseline lg:w-auto`}
        >
          <div className="text-sm md:flex-grow flex flex-col md:flex-row justify-end mb-6">
            {navLinks.map((linkText, i) => {
              return (
                <Link
                  to={`/#${linkText}`}
                  key={i + 1}
                  className="block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4"
                >
                  {linkText}
                </Link>
              );
            })}
          </div>
          <PrimaryCTA />
        </div>
      </nav>
    </>
  );
};

Nav.propTypes = {
  siteTitle: PropTypes.node.isRequired,
};
export default Nav;
