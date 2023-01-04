import React from "react";
import style from "./Overview.module.scss";
import Analog from "../../../../commons/Analog/Analog";
const Overview = () => {
  return (
    <div className={style.container}>
      <section>
        <div className={style.performance}>
          <Analog />
        </div>
        <div className={style.progress}>
          <Analog />
        </div>
      </section>
      <section>
        <div className={style.attendance}></div>
      </section>
    </div>
  );
};

export default Overview;
