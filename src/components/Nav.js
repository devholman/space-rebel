import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import SpaceRebelLogo from '../assets/spaceRebelLogo';
import Burger from './Burger';
const Nav = ({ siteTitle }) => {
  const navLinks = ['services', 'our work', 'Packages', 'About Us'];

  return (
    <>
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
      </nav>
    </>
  );
};

Nav.propTypes = {
  siteTitle: PropTypes.node.isRequired,
};
export default Nav;
