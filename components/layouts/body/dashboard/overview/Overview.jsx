import React from "react";
import style from "./Overview.module.scss";
import Analog from "../../../../commons/Analog/Analog";
const Overview = () => {
  return (
    <div className={style.container}>
      {/* performance */}
      <section>
        <div className={style.performance}>
          <Analog label="Performance" count={100}/>
        </div>
        <div className={style.progress}>
          <Analog label="Progress" count={45}/>
        </div>
      </section>

  
      <section>
        <div className={style.attendance}></div>
      </section>
    </div>
  );
};

export default Overview;
