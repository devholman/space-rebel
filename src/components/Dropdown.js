import React from 'react';

const Dropdown = ({ choices, filterChoice }) => {
  return (
    <div className="mb-16 lg:hidden mt-6 inline max-w-32">
      <select
        name="services"
        className="bg-black text-center border-b-2 border-white max-w-32"
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
    </div>
  );
};

export default Dropdown;
