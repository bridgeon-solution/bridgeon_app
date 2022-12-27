import React, { useState } from "react";
import style from "./Header.module.scss";
import { AppBar, Avatar, IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Header = () => {
  const auth = useSelector((state) => state.auth);
  const route = useRouter();
  return (
    <AppBar position="static" className={style.header}>
      <span className={style.brand}>Bridgeon</span>
      <nav></nav>
      <span className={style.profile}>
        {auth ? (
          <>
            <IconButton>
              <Avatar src="https://mui.com/static/images/avatar/3.jpg" />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton
              aria-label="fingerprint"
              color="success"
              onClick={() => route.push("/auth/join")}
            >
              <Fingerprint />
            </IconButton>
          </>
        )}
      </span>
    </AppBar>
  );
};

export default Header;
