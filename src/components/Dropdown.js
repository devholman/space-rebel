import React from 'react';

const Dropdown = ({ choices }) => {
  return (
    <div className="flex flex-row justify-between mb-16">
      <label
        htmlFor="services"
        className="text-2xl border-l-4 border-white-500 pl-2 font-semibold leading-normal"
      >
        Services
      </label>
      <select
        name="services"
        className="bg-black text-center border-b-2 border-white"
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
