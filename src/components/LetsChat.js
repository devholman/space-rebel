import React from 'react';
import { Link } from 'gatsby';
import IconArrow from '../assets/arrowIcon';

const LetsChat = () => {
  return (
    <div className="w-full bg-black flex flex-col text-center mb-12">
      <h1 className="mb-6 mt-6 font-medium">Join the Rebellion!</h1>
      <p className="mb-6 font-regular">
        We love working with anyone willing to defy the odds. Drop us a line if
        you'd like us to help you build something great.
      </p>
      <Link to="/contact">
        <button className="text-black font-medium bg-sr-blue-1 py-6 w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Get in touch
          <IconArrow className="text-black inline mx-4 transform -rotate-90" />
        </button>
      </Link>
    </div>
  );
};
export default LetsChat;
