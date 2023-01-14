import React from "react";
import style from "./Welcome.module.scss";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Welcome = () => {
  const route =useRouter();

  return (
    <div className={style.main}>
      <span>
        <span>Welcome to </span>
        <span>BRIDGEON</span>
      </span>
      <Button color="success" variant="contained" onClick={()=>route.push('/auth/login')}>login</Button>
    </div>
  );
};

export default Welcome;
