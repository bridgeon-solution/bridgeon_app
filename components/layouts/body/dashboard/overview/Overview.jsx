import React, { useEffect, useState } from "react";
import style from "./Overview.module.scss";
import Analog from "../../../../commons/Analog/Analog";
import Calender from "../../../../commons/Calender/Calender";
import { useDispatch, useSelector } from "react-redux";

import { Avatar } from "@mui/material";
import { getTopics } from "../../../../../redux/topicsSlice";
import {
  getProfile,
  getUser,
} from "../../../../../redux/async_operations/userAsync";
const Overview = () => {
  const dispatch = useDispatch();
  const [dayOfIndex, setIndexDay] = useState(0);
  const [topics, setTopics] = useState([]);
  const [chapters, setChapter] = useState([]);
  useEffect(() => {
    dispatch(getTopics());
    dispatch(getProfile());
  }, []);
  //on changing day of topics
  const onActiveDay = (indexOfDay) => {
    setIndexDay(indexOfDay);
  };
  const Redux_state = useSelector((state) => state);

  const user = Redux_state.userReducer.user;
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

  useEffect(() => {
    if (user.progress) {
      setChapter(user.progress[0].chapter);
      console.log(user.progress[0].chapter);
    } else {
      console.log("no", user.progress);
    }
  }, [user.progress]);
  return (
    <div className={style.container}>
      {/* status */}
      <section>
        {/* performance------------------------- */}
        <div className={style.performance}>
          <Analog label="Performance" count={user?.performance} />
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
              {chapters?.map((el, index) => (
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
              {chapters[dayOfIndex]?.topics.map((el, index) => (
                <>
                  {el.tasks.length ? (
                    <>
                      <li key={index}>
                        {el.title}
                        <div>
                          {el.tasks?.map((els, index) => (
                            <div className={style.task} key={index}>
                              {els.title}
                            </div>
                          ))}
                        </div>
                      </li>
                    </>
                  ) : (
                    <>
                      <li key={index}>{el.title}</li>
                    </>
                  )}
                </>
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
