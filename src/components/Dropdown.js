import React from 'react';

const Dropdown = ({ choices, filterChoice }) => {
  return (
    <div className="flex flex-row justify-between mb-16 md:hidden">
      <select
        name="services"
        className="bg-black text-center border-b-2 border-white"
        onBlur={(e) => filterChoice(e)}
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
