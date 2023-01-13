import React, { useEffect, useState } from "react";
import style from "./Overview.module.scss";
import Analog from "../../../../commons/Analog/Analog";
import Calender from "../../../../commons/Calender/Calender";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../../../redux/userSlice";
import { Avatar } from "@mui/material";
import { getTopics } from "../../../../../redux/topicsSlice";
const Overview = () => {
  const dispatch = useDispatch();
  const [dayOfIndex, setIndexDay] = useState(0);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    dispatch(getUser());
    dispatch(getTopics());
  }, []);
  //on changing day of topics
  const onActiveDay = (indexOfDay) => {
    setIndexDay(indexOfDay);
  };
  const Redux_state = useSelector((state) => state);

  const user = Redux_state.userReducer.userData;
  const topicState = Redux_state.topicsReducer.topics;

  useEffect(() => {
    if (topicState.length) {
      const sortedTopics = topicState.slice().sort(function (a, b) {
        if (a.day < b.day) return -1;
        if (a.day > b.day) return 1;
      });
      console.log(sortedTopics);
      setTopics(sortedTopics);
    }
  }, [topicState]);

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
          <div className={style.holder}>
            <div className={style.allDays}>
              {topics
                .map((el, index) => (
                  <li
                    className={dayOfIndex == index ? style.active : null}
                    onClick={() => onActiveDay(index)}
                    key={index}
                  >
                    {el.day} Day
                  </li>
                ))}
            </div>
          </div>
          {/* ------------------------------------- */}
          <div className={style.topics}>
            <ul>
              {topics[dayOfIndex]?.topics.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
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
