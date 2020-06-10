import React from 'react';
import '../styles/global.css';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import useWindowDimensions from '../utils/windowDimensions';
import Header from '../components/Header';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage = () => {
  const { height } = useWindowDimensions();

  return (
    <Layout>
      <>
        <Header />
        <div
          className="text-white absolute z-40"
          style={{ top: `${height}px` }}
        >
          <div className="bg-white flex flex-col justify-center items-left pb-16 pt-6">
            <h2 className="text-2xl border-l-4 m-6 text-black border-sr-blue-1 pl-2 font-semibold leading-normal">
              Why us?
            </h2>
            <p className="text-left text-black px-8 pb-8 lg:px-16 lg:p-16 lg:mx-40">
              We believe that we are stronger together. That is why you will
              work directly with your designer and developer throughout the
              entire process. No holds. No transfers. No requests going into a
              blackhole. Ever. Period.
            </p>
          </div>
          <Services />
          <Projects />
          <Contact />
        </div>
      </>
    </Layout>
  );
};
export default HomePage;
