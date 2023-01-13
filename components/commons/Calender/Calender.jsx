import style from "./Calender.module.scss";
import "./Calender.module.scss";
import React, { useState } from "react";
import CalenderLayout from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = ({ userActivity }) => {
  const reasons = {
    late: "late",
    absence: "absence",
  };
  const [date, onChange] = useState(new Date());
  console.log(date);
  const selectedDate = (e) => {
    console.log(userActivity);
    let reasonNow;
    const isAev = userActivity?.some((el) => {
      if (
        e.date.toLocaleDateString() == new Date(el.date).toLocaleDateString()
      ) {
        reasonNow = el.reason;
        return true;
      }
      return false;
    });

    switch (reasonNow) {
      case reasons.late:
        return style.late;
      case reasons.absence:
        return style.absence;
      default:
        return null;
    }
  };
  return (
    <div className={style.container}>
      <CalenderLayout
        className={style.calender}
        calendarType={"Hebrew"}
        onChange={onChange}
        tileClassName={selectedDate}
        value={date}
      />
    </div>
  );
};

export default Calender;
