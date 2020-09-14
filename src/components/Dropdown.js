import React from 'react';

const Dropdown = ({ choices, filterChoice }) => {
  return (
    <div className=" mb-8 md:mb-16 lg:hidden mt-6 inline-block relative max-w-32">
      <select
        name="services"
        id="service-select"
        className="appearance-none bg-black text-center block pr-4 py-2 pr-4 bg-transparent leading-tight w-full focus:outline-none border-b-2 border-white max-w-32"
        onChange={(e) => filterChoice(e)}
      >
        {choices.map((choice, i) => {
          return (
            <option key={i + 1} value={choice.title}>
              {choice.title}
            </option>
          );
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-white ml-2">
        <svg
          className="fill-current h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
