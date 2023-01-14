import React, { useState } from "react";
import style from "./SignInForm.module.scss";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/userSlice";
const SignInForm = () => {
  const dispatch = useDispatch();
  const [loginInfo, setLogInInfo] = useState({});
  const onLogin = () => [dispatch(login({ loginInfo }))];

  const onChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value)
    let fieldData;
    fieldData[name] = value;
    setLogInInfo((info) => ({ ...info, ...fieldData }));
  };
  return (
    <div className={style.container}>
      <form action="" method="post">
        <span className={style.title}>
          <span>Bridgeon</span>
        </span>
        <TextField
          name="user"
          label="phone no or username"
          onChange={onChange}
        />

        <TextField name="password" label="password" onChange={onChange} />

        <div className={style.login}>
          <Button
            color="success"
            variant="contained"
            sx={{ width: "100px", height: "35%" }}
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
