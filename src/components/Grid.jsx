import React from "react";
import { soil_data } from "./data";

const Grid = () => {
  return (
    <div className="w-full text-center">
      <div className="flex justify-between mr-2 ml-2 items-center ">
        {soil_data.map((data) =>
          data.parameters.map((item) => (
            <div className="pr-0.5 capitalize text-semibold text-[#797a7f] text-[15px] font-bold">
              <span>{item.name}</span>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-around  items-center mt-2">
        {soil_data.map((data) =>
          data.parameters.map((item) => (
            <div className="text-semibold text-white capitalize flex flex-col pl-10">
              {item.value.map((val) => (
                <span>
                  {item.name === "prediction" && val === 4
                    ? "fruits"
                    : item.name === "prediction" && val === 3
                    ? "cereal"
                    : item.name === "prediction" && val === 2
                    ? "vegetable"
                    : item.name === "prediction" && val === 0
                    ? "forage"
                    : val}
                </span>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Grid;
