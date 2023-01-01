import React, { useRef, useState } from "react";
import style from "./JoinInForm.module.scss";
import { Button, FormControl, OutlinedInput } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import InformForm from "./forms/InformForm";
import ConfirmForm from "./forms/ConfirmForm";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/authSlice";
import { useRouter } from "next/router";

const JoinInform = () => {
  const formRef = useRef();
  const dispatch  = useDispatch();
  const route = useRouter()
  const [slideProgress, setSlide] = useState(0);
  const [otpConfirm, setOtpConfirm] = useState(false);

  const handleClick = () => {
    if (slideProgress == -100) {
      // formRef.current.submit();
      route.push("/dashboard/overview")
      dispatch(login())
    } else {
      setSlide((progress) => (progress == -100 ? 0 : -100));
    }
  };
  return (
    <div className={style.container}>
      <span>Bridgeon</span>
      <form action="" method="post" ref={formRef}>
        <div
          className={style.slider}
          style={{ transform: `translateX(${slideProgress}%)` }}
        >
          <InformForm />
          <ConfirmForm setOtpConfirm={setOtpConfirm} />
        </div>
        <Row className="d-flex justify-content-center">
          <Col md={4} sm={12} className="d-flex justify-content-center">
            <Button variant="contained" color="success" onClick={handleClick}>
              {slideProgress == 0 ? "Next" : "Join"}
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default JoinInform;
