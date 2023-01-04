import React from "react";
import style from "./Analog.module.scss";
const Analog = ({ sx }) => {
  
  let pints = "50,0 44,100 56,100"
    return (
    <div className={style.analog} style={sx}>
      <svg>
        {/* <circle cx={0} cy={0} r={10} className={style.period}/> */}

        <circle cx={0} cy={0} r={10} className={style.meter} />

        <circle cx={0} cy={0} r={10} className={style.progress} />
         
      </svg>

      <div className={style.pointer_stick}>

      </div>
      <div className={style.knob}></div>
    </div> // use sx to define style from higher components
  );
};

export default Analog;
