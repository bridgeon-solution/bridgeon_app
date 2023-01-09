import style from "./Calender.module.scss";
import "./Calender.module.scss";
import React, { useState } from "react";
import CalenderLayout from "react-calendar";
import "react-calendar/dist/Calendar.css";
const Calender = () => {
  const [date, onChange] = useState(new Date());
  return (
    <div className={style.container}>
      <CalenderLayout
        className={style.calender}
        onChange={onChange}
        showWeekNumbers
        value={date}
      />
    </div>
  );
};

export default Calender;
