import React, { useState, useEffect } from 'react';
import Dropdown from '../components/Dropdown';

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

  let [choice, setChoice] = useState([choices[0]]);
  let initialBlue = false;
  const filterChoice = (e) => {
    e.preventDefault();
    let selectedChoice = choices.filter(
      (choice) => choice.title === e.target.value
    );
    setChoice(selectedChoice);
  };
  useEffect(() => {
    if (choice[0].title == 'web design') {
      initialBlue = true;
      console.log(initialBlue);
    }
  }, []);

  return (
    <section id="services" className="bg-black w-screen">
      <div className="pb-16 pt-6">
        <div className="flex flex-row justify-left align-baseline">
          <div className="text-2xl h-10 mx-6 text-white border-l-4 border-white pl-2 font-semibold leading-normal">
            Services
          </div>
          <Dropdown choices={choices} filterChoice={filterChoice} />

          <div className="md:flex md:flex-row md:justify-center hidden md:block">
            {choices.map((choice, i) => {
              return (
                <>
                  <button
                    key={i + 1}
                    value={`${choice.title}`}
                    className={`md:text-white md:block md:mx-12 md:border-b-2
                    md:border-gray-400 md:focus:outline-none
                    md:focus-within:border-sr-blue-1 hidden ${
                      initialBlue ? ' md:border-sr-blue-1' : ''
                    }`}
                    onClick={(e) => filterChoice(e, 'value')}
                  >
                    {choice.title}
                  </button>
                </>
              );
            })}
          </div>
        </div>
        <p className="text-center mt-12">{choice[0].description} </p>
      </div>
    </section>
  );
};
export default Services;
