import React, { useState } from "react";
import style from "./Header.module.scss";
import { AppBar, Avatar, IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ProfileMenu from "../../menu/ProfileMenu";

const Header = () => {
  const [anchor, setAnchor] = useState(null);
  const openMenu = Boolean(anchor);
  const auth = useSelector((state) => state.auth);
  const route = useRouter();
  const ProfileAvatar =  <Avatar src="https://mui.com/static/images/avatar/3.jpg" />
  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <AppBar position="static" className={style.header}>
      <span className={style.menu}>__</span>
      <nav></nav>
      <span className={style.profile}>
        {auth ? (
          <>
            <IconButton onClick={(e)=>setAnchor(e.currentTarget)}>
             {ProfileAvatar}
            </IconButton>
            <ProfileMenu open={openMenu} handleClose={handleClose} anchorEl={anchor} Avatar={ProfileAvatar}/>
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
