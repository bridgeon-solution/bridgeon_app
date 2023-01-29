import React, { useEffect, useRef, useState } from "react";
import style from "./JoinInForm.module.scss";
import { Alert, Button, FormControl, OutlinedInput } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import InformForm from "./forms/InformForm";
import ConfirmForm from "./forms/ConfirmForm";
import { useDispatch, useSelector } from "react-redux";
import { join, login, sendOtp, verifyOtp } from "../../../redux/userSlice";
import { useRouter } from "next/router";
import { useValidator } from "../../../utils/validation/validator";
import { LoadingButton } from "@mui/lab";

const JoinInform = () => {
  const diffBtn = {
    send: "Send",
    verify: "Verify",
    join: "Join",
  };
  const formRef = useRef();
  const dispatch = useDispatch();
  const route = useRouter();
  const userController = useSelector((state) => state.userReducer);
  const [slideProgress, setSlide] = useState(0);

  const [userInfo, setUserInfo] = useState([]);
  const [buttonState, setButtonState] = useState(diffBtn.send);
  const [shareOtp, onShareOtp] = useState(false);
  const [VerifyState, onVerify] = useState(false);
  const [joinState, onJoin] = useState(false);

  const handleClick = () => {
    //triggering the moment for otp sending !this code is for validation process on child `InformForm` component

    onShareOtp(true);
  };
  const verifyHandle = () => {
    //triggering the moment for otp verification !this code is for validation process on child `ConfirmForm`component

    onVerify(true);
  };
  const joinHandle = () => {
    onJoin(true);
  };
  useEffect(() => {
    if (userInfo.length) {
      const userEmail = userInfo.filter((el) => el.title == "Email")[0].value;
      if (buttonState == diffBtn.verify) {
        const enteredOTP = userInfo.filter((el) => el.title == "OTP")[0].value;
        if (enteredOTP)
          dispatch(verifyOtp({ otp: enteredOTP, email: userEmail }));
      } else {
        dispatch(sendOtp({ email: userEmail }));
      }
      if (buttonState === diffBtn.join && userController.onOTP.verified) {
        dispatch(join(userInfo));
      }
    }
  }, [userInfo]);

  useEffect(() => {
    if (userController.onOTP.onSent === "fulfilled") {
      setTimeout(() => {
        setSlide((progress) => (progress == -100 ? 0 : -100));
        setButtonState(diffBtn.verify);
      }, 4500);
    }
  }, [userController.onOTP.onSent]);

  useEffect(() => {
    if (userController.onOTP.verified) setButtonState(diffBtn.join);
  }, [userController.onOTP.verified]);
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
            submitStatus={shareOtp}
            setSubmitStatus={onShareOtp}
          />
          <ConfirmForm
            joinState={joinState}
            onJoin={onJoin}
            otpState={userController.onOTP.verified}
            verifyState={VerifyState}
            onVerify={onVerify}
            forwardFieldData={setUserInfo}
            buttonState={buttonState}
          />
        </div>
        <Row className="d-flex justify-content-center">
          <Col md={4} sm={12} className="d-flex justify-content-center">
            {userController.onOTP.onSent === "pending" ||
            userController.onOTP.onVerify === "pending" ? (
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
                  onClick={
                    buttonState == diffBtn.verify
                      ? verifyHandle
                      : buttonState == diffBtn.send
                      ? handleClick
                      : joinHandle
                  }
                >
                  {buttonState}
                </Button>
              </>
            )}
          </Col>
        </Row>
      </form>
      {userController.onOTP.onSent === "fulfilled" && (
        <div className={style.alert}>
          <Alert variant="filled" severity="info">
            OTP Send successfully please check it out
          </Alert>
        </div>
      )}
      {userController.onOTP.onVerify == "fulfilled" &&
        (userController.onOTP.verified ? (
          <>
            <div className={style.alert}>
              <Alert variant="filled" severity="success">
                successfully verified pleas enter a new password
              </Alert>
            </div>
          </>
        ) : (
          <>
            <div className={style.alert}>
              <Alert
                variant="filled"
                severity="error"
                onLoad={() => console.log("came")}
              >
                OTP is wrong
              </Alert>
            </div>
          </>
        ))}
    </div>
  );
};

export default JoinInform;
