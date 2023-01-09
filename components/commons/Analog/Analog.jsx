import React, { useEffect, useState } from "react";

import style from "./Analog.module.scss";
const Analog = ({ sx, label, count }) => {
  const [pointer, setPointerProgress] = useState(0);
  const [progressBar, setProgressBar] = useState(100);

  //speedometer whole degree need to complete rotation
  const speedometerConfig = {
    currentPointerProgress: function () {
      return (count * (270 - 0)) / 100 + 0; //finding the range by percentage
    },
    currentBarProgress: function () {
      return (count * (56 - 100)) / 100 + 100; //finding the range by percentage
    },
  };

  //monitor on speedometer changes
  useEffect(() => {
    setPointerProgress(speedometerConfig.currentPointerProgress()); //get current pointer position
    setProgressBar(speedometerConfig.currentBarProgress()); //get current progress bar
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

        <circle
          cx={0}
          cy={0}
          r={10}
          className={style.progress}
          style={{ strokeDashoffset: progressBar, transition: "all 1.3s " }}
        />
      </svg>

      <div className={style.pointerHolder}>
        <div
          className={style.pointer_stick}
          style={{ rotate: ` ${pointer}deg`, transition: "all 1.3s " }}
        ></div>
      </div>
      <div className={style.knob}></div>
      <span
        style={{
          position: "absolute",
          bottom: "8%",
          color: "gray",
        }}
      >
        {label}: <span style={{ color: "red" }}>{count}</span>{" "}
      </span>
    </div> // use sx props to define style from higher components
  );
};

export default Analog;
