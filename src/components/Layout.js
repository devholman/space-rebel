/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Nav from './Nav';
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQueryAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Nav siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>

      {/* <footer className="">
        © {new Date().getFullYear()}, Built with Love
        {` `}
        <Link to="#">Space Rebel</Link>
      </footer> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
