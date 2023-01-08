import React, { useEffect, useState } from "react";

import style from "./Analog.module.scss";
const Analog = ({ sx, label, count }) => {
  const [progress, setProgress] = useState(0);

  //speedometer whole degree need to complete rotation
  const speedometerConfig = {
    currentProgress: function () {
      return (count * (270 - 0)) / 100 + 0;
    },
  };

  //monitor on speedometer changes
  useEffect(() => {
    console.log(speedometerConfig.currentProgress());
    setProgress(speedometerConfig.currentProgress()); //get current progress
  }, [count]);
  //------------------------------------------------------------------------------------------
  return (
    <div className={style.analog} style={sx}>
      <ul>
        {Array(20)
          .fill()
          .map((y, index) => (
            <li className={style.labels} key={index} style={{ "--i": index }}>
              <span>|</span>
            </li>
          ))}
      </ul>

      <svg>
        <circle cx={0} cy={0} r={10} className={style.meter} />

        <circle cx={0} cy={0} r={10} className={style.progress} />
      </svg>

      <div className={style.pointerHolder}>
        <div
          className={style.pointer_stick}
          style={{ rotate: ` ${progress}deg`, transition: "all 1.3s" }}
        ></div>
      </div>
      <div className={style.knob}></div>
      <span
        style={{
          position: "absolute",
          bottom: "8%",
          color: "gray",
          fontFamily: "Gotham",
        }}
      >
        {label}: <span style={{ color: "red" }}>{count}</span>{" "}
      </span>
    </div> // use s props to define style from higher components
  );
};

export default Analog;
