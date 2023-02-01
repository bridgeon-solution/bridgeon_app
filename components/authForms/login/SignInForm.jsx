import React, { useEffect, useState } from "react";
import style from "./SignInForm.module.scss";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import { login } from "../../../redux/async_operations/userAsync";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/router";
const SignInForm = () => {
  const route = useRouter();

  const dispatch = useDispatch();
  const [loginInfo, setLogInInfo] = useState({});
  const onLogin = () => [dispatch(login({ data: loginInfo }))];

  const [showPassword, onShowPassword] = useState(true);
  const handleClickShowPassword = () => onShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const userController = useSelector((state) => state.userReducer);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const fieldData = {};

    fieldData[name] = value;
    setLogInInfo((info) => ({ ...info, ...fieldData }));
  };

  useEffect(() => {
    if (userController.auth) {
      route.push("/dashboard");
    }
  }, [userController]);
  return (
    <div className={style.container}>
      <form action="" method="post">
        <span className={style.title}>
          <span>Bridgeon</span>
        </span>

        <TextField
          error={userController.inValid?.field === "email" ? true : false}
          helperText={
            userController.inValid?.field === "email"
              ? userController.inValid?.error
              : ""
          }
          name="email"
          label="Email"
          onChange={onChange}
        />

        <TextField
          error={userController.inValid?.field === "password" ? true : false}
          helperText={
            userController.inValid?.field === "password"
              ? userController.inValid?.error
              : ""
          }
          InputProps={{
            type: !showPassword ? "text" : "password",
            endAdornment: (
              <>
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: "#1e1e1e1" }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              </>
            ),
          }}
          name="password"
          label="password"
          onChange={onChange}
        />

        <div className={style.login}>
          <Button
            onClick={onLogin}
            color="success"
            variant="contained"
            sx={{ width: "100px", height: "35%" }}
          >
            Sign In
          </Button>
        </div>
        <span style={{ color: "gray" }}>
          {"don't have account "} <Link href="/auth/join">create account </Link>
        </span>
      </form>
    </div>
  );
};

export default SignInForm;
