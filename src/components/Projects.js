import React from 'react';
import stock1 from '../assets/co-working.jpeg';
import stock2 from '../assets/laptop.jpeg';
import stock3 from '../assets/notebook.jpeg';

const Projects = () => {
  return (
    <>
      <div className="text-2xl border-l-4 border-white-500 pl-2 font-semibold leading-normal m-6 mb-4">
        Our Adventures
      </div>
      <section>
        <div className="flex w-full h-auto justify-auto">
          <div className="w-1/3 relative">
            <a>
              <img
                src={stock1}
                alt="stock1"
                className="w-full h-full lg:h-68 object-cover"
              ></img>
            </a>
            <div
              className="absolute w-full h-full top-0 flex justify-center items-center"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
            >
              <p className="absolute w-full text-white text-center top-35 font-normal text-body">
                Apple Redesign Project
              </p>
            </div>
          </div>

          <div className="w-1/3 relative">
            <a>
              <img
                src={stock2}
                alt="stock1"
                className="w-full lg:h-68 object-cover"
              ></img>
            </a>
            <div
              className="absolute w-full h-full top-0 flex justify-center items-center"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
            >
              <p className="absolute w-full text-white text-center top-35 font-normal text-body">
                Godaddy United
              </p>
            </div>
          </div>
          <div className="w-1/3 relative">
            <a>
              <img
                src={stock3}
                alt="stock1"
                className="w-full lg:h-68 object-cover"
              ></img>
              <div
                className="absolute w-full h-full inset-0 top-0 flex justify-center items-center"
                style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
              >
                <p className="absolute w-full text-white text-center top-35 font-normal text-body">
                  Jabra Headset
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* <div className="h-32 grid grid-cols-3 grid-flow-col mb-4">
        <div
          className="row-start-1 row-end-2 bg-cover bg-no-repeat flex justify-center items-center"
          style={{
            backgroundImage: `url(${stock1})`,
          }}
        >
          <p>hello</p>
        </div>
        <div
          className="bg-cover row-start-1 row-end-2 bg-no-repeat flex justify-center items-center"
          style={{ backgroundImage: `url(${stock2})` }}
        >
          yolo
        </div>
        <div
          className="bg-cover row-start-1 row-end-2 bg-no-repeat flex justify-center items-center"
          style={{
            backgroundImage: `url(${stock3})`,
          }}
        >
          molo
        </div>
      </div> */}
    </>
  );
};
export default Projects;
