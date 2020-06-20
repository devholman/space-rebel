import React, { useState } from 'react';
import Dropdown from './Dropdown';
import SubTitle from './SubTitle';
import classnames from 'classnames';

const Services = () => {
  const choices = [
    {
      title: 'web design',
      description: 'lorem design',
    },
    {
      title: 'SEO',
      description: 'lorem seo',
    },
    {
      title: 'email marketing',
      description: 'lorem marketing',
    },
    {
      title: 'Branding',
      description: 'lorem branding',
    },
  ];

  let [nchoice, setChoice] = useState([choices[0]]);

  const filterChoice = (e) => {
    e.preventDefault();

    let selectedChoice = choices.filter(
      (choice) => choice.title === e.target.value
    );
    setChoice(selectedChoice);
  };

  return (
    <section id="services" className="bg-black w-screen">
      <div className="pb-16 pt-12">
        <div className="lg:flex align-baseline">
          <SubTitle
            classes={'my-0 md:ml-6 md:mr-24 text-white border-white inline'}
          >
            Services
          </SubTitle>
          <Dropdown choices={choices} filterChoice={filterChoice} />

          <div className="lg:flex lg:flex-row lg:justify-center hidden lg:block">
            {choices.map((choice, i) => {
              return (
                <>
                  <button
                    key={i + 1}
                    value={`${choice.title}`}
                    className={classnames(
                      'lg:text-white lg:block lg:mx-12 lg:border-b-2 lg:border-gray-400 lg:focus:outline-none lg:focus-within:border-sr-blue-1 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110',
                      { 'lg:border-sr-blue-1': choice === nchoice[0] }
                    )}
                    onClick={(e) => filterChoice(e, 'value')}
                  >
                    {choice.title}
                  </button>
                </>
              );
            })}
          </div>
        </div>

        <p className="text-center mt-12">{nchoice[0].description} </p>
      </div>
    </section>
  );
};
export default Services;
