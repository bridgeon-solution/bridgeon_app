import React from "react";
import style from "./Overview.module.scss";
import Analog from "../../../../commons/Analog/Analog";
import Calender from "../../../../commons/Calender/Calender";
import { useSelector } from "react-redux";
const Overview = () => {
  const user = useSelector((state) => state.userReducer.userData);
  console.log(user,"JKH");
  return (
    <div className={style.container}>
      {/* performance */}
      <section>
        <div className={style.performance}>
          <Analog label="Performance" count={90} />
        </div>
        <div className={style.progress}>
          <Analog label="Progress" count={10} />
        </div>
      </section>
      <section>
        <div className={style.dayByDay}></div>
        <div className={style.attendance}>
          <Calender userActivity={user?.activity} />
        </div>
        <div className={style.top}></div>
      </section>
    </div>
  );
};

export default Overview;
