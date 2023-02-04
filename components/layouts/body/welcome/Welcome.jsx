import React, { useEffect } from "react";
import style from "./Welcome.module.scss";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { confirmLog } from "../../../../redux/authSlice";
import useCookies from "react-cookie/cjs/useCookies";

const Welcome = () => {
  const route = useRouter();
  const [cookie, setCookie, deleteCookie] = useCookies("log");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(confirmLog(Boolean(cookie.log == "true ")));
  }, [cookie]);

  return (
    <div className={style.main}>
      <span>
        <span>Welcome to </span>
        <span>BRIDGEON</span>
      </span>
      <Button
        color="success"
        variant="contained"
        onClick={() => route.push("/auth/login")}
      >
        login
      </Button>
    </div>
  );
};

export default Welcome;
