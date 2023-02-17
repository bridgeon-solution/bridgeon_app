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
          <Analog label="Progress" count={user.progress?.[0].score} />
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
                              <a download={'image'} href="data:image/jpeg;base64,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">
                                {els.title}
                              </a>
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
          <Calender userActivity={user?.attendance} />
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
