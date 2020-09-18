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
import Nav from './Nav';
import SEO from './seo'
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const ParticleLayout = ({ children }) => {
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
    <SEO
      
    />
      <Nav siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Particles
        className="h-screen fixed -z-10 inset-0 bg-black"
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
            detectsOn: "canvas",
            events: {
              onclick: { enable: true, mode: "repulse" },
              onHover: {
                enable:true,
                mode:"repulse",
                parallax: { enable: false, force: 2, smooth: 10 }
            },
          },
              modes: {
      bubble: { distance: 200, duration: 2, opacity: 0, size: 0, speed: 3 },
      grab: { distance: 200, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
      repulse: { distance: 100, duration: 0.4 }
    }
            // modes: {
            //   repulse: {
            //     distance: 100,
            //     duration: 0.8,
            //   },
            // },
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

ParticleLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ParticleLayout;
