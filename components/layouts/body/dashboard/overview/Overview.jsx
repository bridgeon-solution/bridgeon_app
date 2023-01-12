import React, { useEffect } from "react";
import style from "./Overview.module.scss";
import Analog from "../../../../commons/Analog/Analog";
import Calender from "../../../../commons/Calender/Calender";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../../../redux/userSlice";
import { Avatar } from "@mui/material";
const Overview = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const user = useSelector((state) => state.userReducer.userData);
  console.log(user, "JKH");
  return (
    <div className={style.container}>
      {/* status */}
      <section>
        {/* performance------------------------- */}
        <div className={style.performance}>
          <Analog label="Performance" count={50} />
        </div>
        {/* progress -----------------*/}

        <div className={style.progress}>
          <Analog label="Progress" count={10} />
        </div>
        {/* ---------------------------------- */}
      </section>

      {/* activities----------------------------- */}
      <section>
        {/* day bt day topics----------------------------- */}
        <div className={style.dayByDay}>
          <span className={style.title}>TOPICS</span>
          <div className={style.allDays}>
            {Array(100)
              .fill()
              .map((el, index) => (
                <li key={index}>{index + 1} Day</li>
              ))}
          </div>
          {/* ------------------------------------- */}
          <div className={style.topics}>
            {Array(100)
              .fill()
              .map((el, index) => (
                <li key={index}>{index + 1} Day</li>
              ))}
          </div>
        </div>
        {/* attendance----------------------------- */}
        <div className={style.attendance}>
          <Calender userActivity={user?.activity} />
        </div>
        {/* LeaderBoard ----------------------------*/}
        <div className={style.top}>
          <span className={style.title}>TOP LEADERS</span>

          {/* ----------------top 1st--------------------- */}
          <div className={style.top_1_User}>
            <span>
              <span style={{ color: "#ff6a00" }}> 1st</span>
              <div className={style.frame_1}>
                <Avatar />
              </div>
              100%
            </span>
          </div>
          {/* ----------------top 3 & top 4--------------------- */}
          <div className={style.top_2_3_User}>
            <span>
              <span> 2nd</span>
              <div className={style.frame_2}>
                <Avatar />
              </div>
              50%
            </span>
            <span>
              <span> 3rd</span>
              <div className={style.frame_3}>
                <Avatar />
              </div>
              45%
            </span>
          </div>
          {/* ------------------------------------- */}
        </div>
        {/* ------------------------------------- */}
      </section>
    </div>
  );
};

export default Overview;
