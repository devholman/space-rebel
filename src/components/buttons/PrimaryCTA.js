import React from 'react';
import { Link } from 'gatsby';

const PrimaryCTA = ({ classes }) => (
  <Link
    to="/contact"
    className={`primary-cta border-none text-sm px-4 py-2 bg-sr-blue-1 rounded-full font-semibold leading-none rounded text-white
      hover:border-transparent hover:bg-sr-orange-1 hover:shadow-none mt-4 lg:mt-0 ${classes}`}
  >
    Start a Project
  </Link>
);
export default PrimaryCTA;
