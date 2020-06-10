import React from 'react';
import Dropdown from '../components/Dropdown';

const Services = () => {
  const choices = [
    {
      title: 'web design',
      description: 'lorem ipsum',
    },
    {
      title: 'SEO',
      description: 'lorem seo',
    },
    {
      title: 'email marketing',
      description: 'lorem bacon',
    },
  ];
  return (
    <section className="bg-black w-screen">
      <div className="mx-6 pb-16 pt-6">
        <Dropdown choices={choices} />

        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Curabitur
          pretium tincidunt lacus. Nulla gravida orci a odio.
        </p>
      </div>
    </section>
  );
};
export default Services;
