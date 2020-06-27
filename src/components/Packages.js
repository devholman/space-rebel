import React from 'react';
import Earth from '../assets/earth';
import Rocket from '../assets/rocket';
import Stars from '../assets/stars';
import PrimaryCTA from '../components/buttons/PrimaryCTA';
import SubTitle from './SubTitle';

// const standard = [
//   '3 page site',
//   'Design consultation',
//   'SEO optimization',
//   'Stock photos',

//   '2 of the following integrations',
//   ['Blog', 'Calendar', 'contact form', 'FAQ page', 'careers page', 'chat bot'],

//   '1 month for bug fixes',
// ];
const mid = {
  title: 'Popular',
  details: [
    '5 page site',
    'Design consultation',
    'SEO optimization',
    'Stock photos',
    '3 month for bug fixes',
    'web hosting configuration',
  ],

  // opt5: {
  //   '2 of the following integrations': [
  //     'Blog',
  //     'Calendar',
  //     'contact form',
  //     'FAQ page',
  //     'careers page',
  //     'chat bot',
  //   ],
  // },
};
const premium = {
  title: 'Premium',
  details: [
    'up to 10 page site',
    'Design consultation',
    'Speed and performance optimization',
    'SEO optimization',
    'Stock photos',
    '3 month for bug fixes',
    'web hosting configuration',
    'Website backups (files & DB)',
    'Branded email marketing template',
  ],

  //  {
  //   '2 of the following integrations': [
  //     'Blog',
  //     'Calendar',
  //     'contact form',
  //     'FAQ page',
  //     'careers page',
  //     'chat bot',
  //   ],
  // },
};

const Packages = () => {
  const standard = {
    title: 'Basic Business',
    details: [
      '3 page site',
      'Design consultation',
      'SEO optimization',
      'Stock photos',

      '2 of the following integrations',
      // [
      //   'Blog',
      //   'Calendar',
      //   'contact form',
      //   'FAQ page',
      //   'careers page',
      //   'chat bot',
      // ],

      '1 month for bug fixes',
    ],
  };
  return (
    <div
      id="packages"
      className="relative flex flex-col justify-center bg-white"
    >
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
          <SimpleCard pkg={standard} />
          <SimpleCard pkg={mid} />
          <SimpleCard pkg={premium} />
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
};

const SimpleCard = ({ pkg }) => {
  return (
    <div className="bg-black rounded-lg min-h-72 px-8 text-white py-8 text-center">
      <h2 className="font-bold mb-4">{pkg.title}</h2>
      <ul className="list-disc">
        {pkg.details.map((option, i) => {
          return (
            <li key={i + 1} className="text-left">
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Packages;
