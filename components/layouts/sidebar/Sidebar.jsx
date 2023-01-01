import React, { useState } from "react";
import style from "./Sidebar.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
import OverViewIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AssignmentIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import TaskIcon from "@mui/icons-material/TaskAltOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import { useRouter } from "next/router";
const Sidebar = () => {
  const router = useRouter();
  const menu = [
    {
      title: "Overview",
      icon: <OverViewIcon sx={{ justifySelf: "flex-start" }} />,
      path: "overview",
    },
    { title: "Assignments", icon: <AssignmentIcon />, path: "assignments" },
    { title: "Tasks", icon: <TaskIcon />, path: "tasks" },
    {
      title: "Notification",
      icon: <NotificationsIcon />,
      path: "notification",
    },
    { title: "Settings", icon: <SettingsIcon />, path: "settings" },
  ];

  const [activeDashboard, setActiveDashboard] = useState(0);

  let onDashboard = (event, indexOfDashboard, path) => {
    console.log(indexOfDashboard);
    router.push(router.basePath + "/dashboard/" + path);
    setActiveDashboard(indexOfDashboard);
  };
  return (
    <aside className={style.sidebar}>
      {menu.map((item, index) => (
        <span
          className={[
            style.buttons,
            activeDashboard == index && style.active,
          ].join(" ")}
          key={index}
          onClick={(e) => onDashboard(e, index, item.path)}
        >
          <div className={style.holder}>
            {item.icon}
            {item.title}
          </div>
        </span>
      ))}
      <span className={style.subscribe}>
        <Image
          src="/assets/images/subscribe.svg"
          width={200}
          height={200}
          alt="ad"
        />
        <Button variant="contained" color="success">
          Subscribe
        </Button>
      </span>
    </aside>
  );
};

export default Sidebar;
