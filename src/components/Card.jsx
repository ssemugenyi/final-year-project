import React from "react";

const Card = ({ title, value, min, max }) => {
  return (
    <div className="m-[10px] bg-[#22252c] p-3 rounded text-[#797a7f] w-[300px]">
      <div className="mb-8">
        <h1 className="uppercase font-bold">soil {title}</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span>
          <strong className="text-[40px] mr-1 text-white">{value}</strong>{" "}
          <span>{title === "moisture" ? "%" : "mg/kg"}</span>
        </span>
        <span className="text-[15px] mt-[-10px] mb-8 capitalize">
          Current {title}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="block">
          Min {min} {title === "moisture" ? "%" : "mg/kg"}
        </span>
        <span className="block">
          Max {max} {title === "moisture" ? "%" : "mg/kg"}
        </span>
      </div>
    </div>
  );
};

export default Card;
