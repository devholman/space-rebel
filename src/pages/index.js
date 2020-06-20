import React from 'react';
import '../styles/global.css';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import WhyUs from '../components/WhyUs';
import Packages from '../components/Packages';
import useWindowDimensions from '../utils/windowDimensions';

const HomePage = () => {
  const { height } = useWindowDimensions();
  return (
    <Layout>
      <>
        <Header />
        {height && (
          <div
            className="text-white absolute z-40"
            style={{ top: `${height}px` }}
          >
            <WhyUs />
            <Services />
            <Projects />
            <Packages />
            <Contact />
          </div>
        )}
      </>
    </Layout>
  );
};
export default HomePage;
