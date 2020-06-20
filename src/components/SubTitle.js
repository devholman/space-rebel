import React from 'react';

const SubTitle = ({ classes, children }) => (
  <h2
    className={`text-2xl border-l-4 m-6 pl-2 font-semibold leading-normal ${classes}`}
  >
    {children}
  </h2>
);
export default SubTitle;

// classes
// - text color
// - border color
// - margin
