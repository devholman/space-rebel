/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Particles from 'react-particles-js';
import Nav from '../components/Nav';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
      <Particles
        className="h-screen bg-black"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 300,
              },
            },
            opacity: {
              value: 1,
              anim: {
                enable: false,
              },
            },
            color: {
              value: ['#00B2FB', '#FFFFFF'],
            },
            size: {
              value: 2,
              random: true,
            },
            distance: {
              value: 400,
            },
            move: {
              enable: true,
              direction: 'none',
              speed: 0.5,
              out_mode: 'out',
              rotateX: 600,
              rotateY: 1200,
            },

            line_linked: {
              enable: false,
            },
          },
          interactivity: {
            modes: {
              grab: {
                distance: 400,
              },
            },
          },
          retina_detect: true,
        }}
      />

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
