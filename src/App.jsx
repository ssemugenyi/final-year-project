import { useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import CardStretched from "./components/CardStretched";
import Grid from "./components/Grid";
import { soil_data } from "./components/data";

function App() {
  // const url =
  //   " https://api.thingspeak.com/channels/1815855/fields/1.json?api_key=K41MN3FTAMVSD01N&results=2";
  // const [sensordata, setSensordata] = useState(null);
  // axios.get(url).then((response) => {
  //   setSensordata(response.data);
  // });
  // console.log(sensordata);

  return (
    <div className="App bg-[#181b22] p-2">
      <div className="mb-2">
        <h1 className="uppercase font-bold text-white text-center text-xl">
          Soil testing and crop recommendation platform
        </h1>
      </div>
      <div className="mb-2">
        <h3 className="uppercase font-bold text-white text-center">
          Soil parameters
        </h3>
      </div>
      <div className=" w-full flex justify-center items-center flex-wrap">
        {soil_data.map(
          (data) =>
            data.name === "critical" &&
            data.parameters.map((item) => (
              <Card
                title={item.name}
                value={item.value[item.value.length - 1]}
                min={Math.min.apply(null, item.value)}
                max={Math.max.apply(null, item.value)}
              />
            ))
        )}
      </div>
      <div className="flex flex-wrap justify-between w-full mt-10">
        <div className="items-stretch w-[60%] pl-6 pr-8">
          <div className="mb-2">
            <h3 className="uppercase font-bold text-white text-center">
              Soil analysis and prediction
            </h3>
          </div>
          <Grid soildata={soil_data} />
        </div>

        <div className="flex flex-col justify-center items-stretch w-[40%] pl-8 pr-6">
          {soil_data.map(
            (data) =>
              data.name === "others" &&
              data.parameters.map((item) => (
                <CardStretched
                  title={item.name}
                  value={item.value[item.value.length - 1]}
                  min={Math.min.apply(null, item.value)}
                  max={Math.max.apply(null, item.value)}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
