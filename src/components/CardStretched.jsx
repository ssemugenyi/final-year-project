import React from "react";

const CardStretched = ({ title, value, min, max }) => {
  return (
    <div className="m-[10px] bg-[#22252c] p-3 rounded text-[#797a7f]">
      <div className="mb-4">
        <h1 className="uppercase font-bold">soil {title}</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-[15px] capitalize">Current {title}</span>
          <span>
            <strong className="text-xl mr-1 text-white">
              {value}
              {title === "ph" ? "" : title === "temperature" ? "\u00b0C" : "%"}
            </strong>{" "}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[15px]">Max</span>
          <span>
            <strong className="text-xl mr-1 text-white">
              {max}
              {title === "ph" ? "" : title === "temperature" ? "\u00b0C" : "%"}
            </strong>{" "}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[15px]">Min</span>
          <span>
            <strong className="text-xl mr-1 text-white">
              {min}
              {title === "ph" ? "" : title === "temperature" ? "\u00b0C" : "%"}
            </strong>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardStretched;
