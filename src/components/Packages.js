import React from 'react';
import Earth from '../assets/earth';
import Rocket from '../assets/rocket';
import Stars from '../assets/stars';
import PrimaryCTA from '../components/buttons/PrimaryCTA';
import SubTitle from './SubTitle';

const Packages = () => (
  <div id="packages" className="relative flex flex-col justify-center bg-white">
    <SubTitle classes={'mt-8 mb-8 text-black border-sr-blue-1 mx-auto'}>
      Packages
    </SubTitle>
    <div className="flex items-center justify-center">
      <div className="absolute bottom-0 left-0 my-2 md:m-4">
        <Rocket height={'80'} />
      </div>
      <div className="absolute inset-x-0 top-0  m-2 md:m-6">
        <Stars />
      </div>
      <div className="grid grid-cols-1 gap-4 mx-4 md:grid-cols-3 md:grid-flow-col md:gap-8">
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </div>
      <div className="absolute top-0 right-0">
        <Earth />
      </div>
      <div className="absolute bottom-0 right-0 mx-2 md:m-6">
        <Stars cn={'transform rotate-180'} />
      </div>
    </div>
    <div className="flex items-center justify-center m-8">
      <PrimaryCTA />
    </div>
  </div>
);

const SimpleCard = () => (
  <div className="bg-black rounded-lg h-72 px-8 text-white text-center">
    package 1 of for the win
  </div>
);
export default Packages;
