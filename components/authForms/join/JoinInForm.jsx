import React, { isValidElement, useEffect, useRef, useState } from "react";
import style from "./JoinInForm.module.scss";
import { Alert, Button, FormControl, OutlinedInput } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import InformForm from "./forms/InformForm";
import ConfirmForm from "./forms/ConfirmForm";
import { useDispatch, useSelector } from "react-redux";
import { login, sendOtp, verifyOtp } from "../../../redux/userSlice";
import { useRouter } from "next/router";
import { useValidator } from "../../../utils/validation/validator";
import { LoadingButton } from "@mui/lab";

const JoinInform = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const route = useRouter();
  const userController = useSelector((state) => state.userReducer);
  const [slideProgress, setSlide] = useState(0);
  const [otpConfirm, setOtpConfirm] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [buttonState, setButtonState] = useState("Send");
  const [submitStatus, setSubmitStatus] = useState(false);

  const validator = useValidator();
  const handleClick = () => {
    setSubmitStatus(true);

    if (slideProgress == -100) {
      // formRef.current.submit();
      route.push("/dashboard/overview");

      // dispatch(login(userInfo))
    } else {
      if (userInfo.length) {
        console.log("done ", userInfo);
      }
      // dispatch(sendOtp({ email: userInfo?.email }));
    }
  };
  const verificationHandle = () => {
    if (buttonState == "Verify") dispatch(verifyOtp({ otp: userInfo.otp }));
  };

  // const handleChooser = (e) => {
  //   console.log(buttonState);
  //   if (buttonState == ("Send OTP" || "Verify")) {
  //     verificationHandle(e);
  //   } else if (buttonState == "Send OTP") handleClick(e);
  // };

  useEffect(() => {
    if (userInfo.length) {
      console.log("done ", userInfo);
      const userEmail = userInfo.filter((el) => el.title == "Email")[0].value;
      dispatch(sendOtp({ email: userEmail }));
    }
  }, [userInfo]);

  useEffect(() => {
    if (userController.otpState === "fulfilled") {
      setTimeout(() => {
        setSlide((progress) => (progress == -100 ? 0 : -100));
        setButtonState("Verify");
      }, 4500);
    }
  }, [userController.otpState]);
  console.log(userController.otpState);
  console.log(userController);
  return (
    <div className={style.container}>
      <span>Bridgeon</span>
      <form action="" method="post" ref={formRef}>
        <div
          className={style.slider}
          style={{ transform: `translateX(${slideProgress}%)` }}
        >
          <InformForm
            forwardFieldData={setUserInfo}
            submitStatus={submitStatus}
            setSubmitStatus={setSubmitStatus}
          />
          <ConfirmForm
            setOtpConfirm={setOtpConfirm}
            forwardFieldData={setUserInfo}
            buttonState={buttonState}
          />
        </div>
        <Row className="d-flex justify-content-center">
          <Col md={4} sm={12} className="d-flex justify-content-center">
            {userController.otpState == "pending" ? (
              <>
                <LoadingButton
                  loading
                  loadingPosition="center"
                  color="success"
                />
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleClick}
                >
                  {buttonState}
                </Button>
              </>
            )}
          </Col>
        </Row>
      </form>
      {userController.otpState === "fulfilled" && (
        <div className={style.alert}>
          <Alert variant="filled" severity="info">
            OTP Send successfully please check it out
          </Alert>
        </div>
      )}
    </div>
  );
};

export default JoinInform;
