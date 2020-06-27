import React from 'react';
import { Link } from 'gatsby';
import IconArrow from '../assets/arrowIcon';

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col justify-around p-2 lg:py-8">
      <div className="flex flex-col mb-4">
        <h2 className="font-bold mb-4">Contact</h2>
        <p>(713) 494-2820</p>
      </div>
      <div className="flex flex-col justify-around mb-4">
        <h2 className="font-bold mb-4">Services</h2>
        <ul>
          <li>Web Design</li>
          <li>Web Development</li>
          <li>Email Development</li>
          <li>Branding Consulation</li>
          <li>Maintenance Packages</li>
        </ul>
      </div>
      <div className="flex flex-col mb-4">
        <h1 className="font-bold mb-4">Browse</h1>
        <ul>
          <li>Why Us</li>
          <li>Services</li>
          <li>Packages</li>
          <li>About</li>
        </ul>
      </div>
      <div className="text-center mb-4">
        <p className="text-center mb-4 text-sm">
          Space Rebel is based in Austin, TX
        </p>
        <Link to="#top" className="text-gray-2">
          Scroll to Top{' '}
          <IconArrow
            className="text-gray-2 inline mx-4 transform -rotate-180"
            color={'#9A9A9A'}
          />
        </Link>
        <p className="text-xs text-left mt-8">
          © 2020, made with love by Space Rebel, LLC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
