import React from 'react';
import '../styles/global.css';
import ParticleLayout from '../components/ParticleLayout';
import Header from '../components/Header';
import Services from '../components/Services';
import Projects from '../components/Projects';
import LetsChat from '../components/LetsChat';
import WhyUs from '../components/WhyUs';
import Packages from '../components/Packages';
import Footer from '../components/Footer';
import useWindowDimensions from '../utils/windowDimensions';

const HomePage = () => {
  const { height } = useWindowDimensions();
  return (
    <ParticleLayout>
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
            <LetsChat />
            <Footer />
          </div>
        )}
      </>
    </ParticleLayout>
  );
};
export default HomePage;
