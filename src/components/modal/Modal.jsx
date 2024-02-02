import React from "react";
import data from "../../assets/data/portfolioData";

const Modal = ({ currentId, setShowModal }) => {
  const portfolio = data.find((item) => item.id === currentId);
  return (
    <>
      <div className="w-full h-full bg-headingColor bg-opacity-40 fixed top-0 left-0 z-50 ">
        <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
          <div>
            <figure>
              <img
                className="rounded-[8px]"
                src={portfolio.imgUrl}
                alt="project"
              />
            </figure>
          </div>

          <div>
            <h2 className="text-2xl text-headingColor font-[700] my-5">
              {portfolio.title}
            </h2>
            <p className="text-[15px] leading-7 text-smallTextColor ">
              {portfolio.description}
            </p>
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              <h4 className="text-headingColor text-[18px] font-[600]">
                Tech Used
              </h4>
              {portfolio.technologies.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="bg-gray-300 py-1 px-2 rounded-[8px] text-[14px] leading-0"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="absolute top-[1rem] right-[0.5rem] w-[1.8rem] h-[1.8rem] cursor-pointer bg-red-500 rounded-[8px] text-white font-[700] text-[18px]"
          >
            x
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
