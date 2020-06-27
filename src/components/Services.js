import React, { useState } from 'react';
import Dropdown from './Dropdown';
import SubTitle from './SubTitle';
import classnames from 'classnames';

const Services = () => {
  const choices = [
    {
      title: 'Web design',
      description:
        'We’ll help you build a recognizable brand or expand on your existing brand for your web presence. An expert designer will meet with you to get a feel for you and your business. They will then pick out colors, logos, typography, and images that work best to achieve your goals and express your style. We will then create mock ups or a visual representation  of your custom website design. You will have ample opportunities to review and make changes to the designs along the way to make sure we’re in sync. You will have check points along the way with your design expert to make sure you’re happy.',
    },
    {
      title: 'Web development',
      description:
        'We take a visual representation of your website and bring it to life.. We build fast, high rankings, robust websites. We perform bug fixes and tweaks to your current site. The code is custom so the site will always be yours to keep. We can configure analytics and data feeds. Send us your information if you would like to discuss something in particular.',
    },
    {
      title: 'Email development',
      description:
        'We build custom email templates for your marketing campaigns. Stay on brand even in your email.',
    },
    {
      title: 'Branding consulation',
      description:
        'If you want expert advice on how to properly pair colors, typography, and logos for your business, we can help! We will help you build a brand kit that is sure to attract customers.',
    },
    {
      title: 'Maintanence packages',
      description:
        'All of our development services come with a quick fix plan that drops you to the front of the line if any bugs are found after your project is completed. We also offer an ongoing maintenance package to provide monthly maintenance to keep your site looking great and peak performing.',
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
    <section id="services" className="bg-black w-screen h-200 md:h-100">
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
                <button
                  key={i + 1}
                  value={`${choice.title}`}
                  className={classnames(
                    'lg:text-white lg:block lg:mx-12 lg:border-b-2 lg:border-gray-400 lg:focus:outline-none transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 lg:focus:border-sr-blue-1',
                    { 'lg:border-sr-blue-1': choice === nchoice[0] }
                  )}
                  onClick={(e) => filterChoice(e, 'value')}
                >
                  {choice.title}
                </button>
              );
            })}
          </div>
        </div>
        <p className="text-left mt-12 p-8 lg:px-16 lg:p-16 lg:mx-40">
          {nchoice[0].description}
        </p>
      </div>
    </section>
  );
};
export default Services;
