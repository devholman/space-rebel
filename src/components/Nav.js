import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import SpaceRebelLogo from '../assets/spaceRebelLogo';
import Burger from './Burger';
import PrimaryCTA from '../components/buttons/PrimaryCTA';
const Nav = ({ siteTitle }) => {
  const navLinks = ['Services', 'Our Work', 'Packages', 'About Us'];

  return (
    <nav className="flex flex-wrap bg-black p-2 lg:p-6 items-end justify-between w-full z-50 fixed md:relative">
      <div className="flex items-center flex-shrink-0 text-sr-blue-1 mr-6">
        <span className="mr-4 lg:mr-6">
          <SpaceRebelLogo width={'41'} />
        </span>
        <Link to="/" className="logo font-normal text-xl tracking-tight">
          {siteTitle}
        </Link>
      </div>

      <div className="md:hidden">
        <Burger navLinks={navLinks} />
      </div>
      <div
        className={`hidden md:block md:flex flex-grow md:items-baseline md:w-auto justify-end`}
      >
        <div className="text-xs md:text-sm flex md:flex-grow flex-col md:flex-row justify-end mb-6">
          {navLinks.map((linkText, i) => {
            return (
              <Link
                to={`/#${linkText.toLowerCase()}`}
                key={i + 1}
                className="block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                {linkText}
              </Link>
            );
          })}
        </div>
        <PrimaryCTA />
      </div>
    </nav>
  );
};

Nav.propTypes = {
  siteTitle: PropTypes.node.isRequired,
};
export default Nav;
