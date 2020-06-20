import React from 'react';
import SubTitle from './SubTitle';

const WhyUs = () => {
  return (
    <div
      id="why-us"
      className="bg-white flex flex-col justify-center items-left pb-16 pt-6"
    >
      <SubTitle classes={'m-6 text-black border-sr-blue-1'}>Why us?</SubTitle>
      {/* <h2 className="text-2xl border-l-4 m-6 text-black border-sr-blue-1 pl-2 font-semibold leading-normal">
        Why us?
      </h2> */}
      <p className="text-left text-black px-8 pb-8 lg:px-16 lg:p-16 lg:mx-40">
        We believe that we are stronger together. That is why you will work
        directly with your designer and developer throughout the entire process.
        No holds. No transfers. No requests going into a blackhole. Ever.
        Period.
      </p>
    </div>
  );
};
export default WhyUs;
