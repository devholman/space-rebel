import React from 'react';

const HangingLamp = ({ height = '159', width = '74' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 74 159"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.7">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.0001 159C54.5449 159 68.7678 150.87 68.7678 140.842C68.7678 130.814 54.5449 122.684 37.0001 122.684C19.4553 122.684 5.23242 130.814 5.23242 140.842C5.23242 150.87 19.4553 159 37.0001 159Z"
        fill="#F2F2F2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M74 153.351C74 131.066 57.4345 113 37 113C16.5655 113 0 131.066 0 153.351"
        fill="#DDE3E9"
      />
      <rect x="35" width="5" height="136" fill="#DDE3E9" />
    </g>
  </svg>
);

export default HangingLamp;
