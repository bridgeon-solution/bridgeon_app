import React from "react";
import style from "./Sidebar.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
const Sidebar = () => {
  const menu = ["Assignments", "Overview", "Tasks", "Notification", "Settings"];
  return (
    <aside className={style.sidebar}>
      {Array(5)
        .fill()
        .map((i, index) => (
          <span className={style.buttons} key={index}>{menu[index]}</span>
        ))}
      <span className={style.subscribe}>
        <Image src="/assets/images/subscribe.svg" width={200} height={200}/>
        <Button variant="contained" color="success">Subscribe</Button>
      </span>
    </aside>
  );
};

export default Sidebar;
