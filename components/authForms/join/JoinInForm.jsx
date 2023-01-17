import React, { useRef, useState } from "react";
import style from "./JoinInForm.module.scss";
import { Button, FormControl, OutlinedInput } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import InformForm from "./forms/InformForm";
import ConfirmForm from "./forms/ConfirmForm";
import { useDispatch } from "react-redux";
import { login, sendOtp, verifyOtp } from "../../../redux/userSlice";
import { useRouter } from "next/router";

const JoinInform = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const route = useRouter();
  const [slideProgress, setSlide] = useState(0);
  const [otpConfirm, setOtpConfirm] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [buttonState, setButtonState] = useState("Next");
  const handleClick = () => {
    console.log("DD");
    if (slideProgress == -100) {
      // formRef.current.submit();
      route.push("/dashboard/overview");

      // dispatch(login(userInfo))
      setButtonState("Send");
    } else {
      setSlide((progress) => (progress == -100 ? 0 : -100));
    }
  };
  const verificationHandle = () => {
    console.log("HELLO VRY");
    if (buttonState == "Send") dispatch(sendOtp({ email: userInfo?.email }));
    if (buttonState == "Verify") {
      dispatch(verifyOtp({ otp: userInfo.otp }));
    }
  };

  const handleChooser = (e) => {
    console.log(buttonState);
    if (buttonState === ("Send" || "Verify")) {
      verificationHandle(e);
    } else if (buttonState == "Next") handleClick(e);
  };
  console.log(userInfo);
  return (
    <div className={style.container}>
      <span>Bridgeon</span>
      <form action="" method="post" ref={formRef}>
        <div
          className={style.slider}
          style={{ transform: `translateX(${slideProgress}%)` }}
        >
          <InformForm forwardFieldData={setUserInfo} />
          <ConfirmForm
            setOtpConfirm={setOtpConfirm}
            forwardFieldData={setUserInfo}
            buttonState={buttonState}
          />
        </div>
        <Row className="d-flex justify-content-center">
          <Col md={4} sm={12} className="d-flex justify-content-center">
            <Button
              variant="contained"
              color="success"
              onClick={(e) => handleChooser(e)}
            >
              {buttonState}
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default JoinInform;
