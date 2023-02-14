import React, { useState } from "react";
import style from "./Header.module.scss";
import { AppBar, Avatar, IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ProfileMenu from "../../menu/ProfileMenu";

const Header = ({ logged}) => {
  const [anchor, setAnchor] = useState(null);
 
  const openMenu = Boolean(anchor);

  const route = useRouter();
  const ProfileAvatar = (
    <Avatar src="https://mui.com/static/images/avatar/3.jpg" />
  );

  const userController = useSelector((state) => state.userReducer);

  const handleClose = () => {
    setAnchor(null);
  };
 
  return (
    <div className={style.header}>
      <span className={style.menu}>__</span>
      <span></span>
      <span className={style.profile}>
        {logged ? (
          <>
            <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
              {ProfileAvatar}
            </IconButton>
            <ProfileMenu
              user={userController.user}
              open={openMenu}
              handleClose={handleClose}
              anchorEl={anchor}
              Avatar={ProfileAvatar}
            />
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
    </div>
  );
};

export default Header;
