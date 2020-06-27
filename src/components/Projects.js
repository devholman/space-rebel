import React from 'react';
import { Link } from 'gatsby';
// import { graphql } from 'gatsby';
// import Img from "gatsby-image"
import stock1 from '../assets/co-working.jpeg';
import stock2 from '../assets/laptop.jpeg';
import stock3 from '../assets/notebook.jpeg';
import SubTitle from './SubTitle';

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

const Projects = () => {
  return (
    <>
      <div id="our work">
        <SubTitle classes={'border-white-500 m-6 mb-4'}>
          Our Adventures
        </SubTitle>
      </div>
      <section>
        <div className="flex w-full h-auto justify-auto mb-8">
          <div className="w-1/3 relative">
            <Link to="/">
              {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
              <img
                src={stock1}
                alt="stock1"
                className="w-full h-full lg:h-68 object-cover"
              ></img>
            </Link>
            <div
              className="absolute w-full h-full top-0 flex justify-center items-center"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
            >
              <p className="absolute w-full text-white text-center top-35 font-normal text-body">
                Apple Redesign Project
              </p>
            </div>
          </div>
          <div className="w-1/3 relative">
            <Link to="/">
              <img
                src={stock2}
                alt="stock2"
                className="w-full lg:h-68 object-cover"
              ></img>
            </Link>
            <div
              className="absolute w-full h-full top-0 flex justify-center items-center"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
            >
              <p className="absolute w-full text-white text-center top-35 font-normal text-body">
                other Project
              </p>
            </div>
          </div>
          <div className="w-1/3 relative">
            <Link to="/">
              <img
                src={stock3}
                alt="stock3"
                className="w-full lg:h-68 h-full"
              ></img>
            </Link>
            <div
              className="absolute w-full h-full top-0 flex justify-center items-center"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
            >
              <p className="absolute w-full text-white text-center top-35 font-normal text-body">
                united{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
