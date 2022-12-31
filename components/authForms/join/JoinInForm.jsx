import React, { useState } from "react";
import style from "./JoinInForm.module.scss";
import { Button, FormControl, OutlinedInput } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import InformForm from "./forms/InformForm";
import ConfirmForm from "./forms/ConfirmForm";

const JoinInform = () => {
  const [slideProgress, setSlide] = useState("0%")
  const [otpConfirm, setOtpConfirm] = useState(false)
  return (
    <div className={style.container}>
      <form action="" method="post">
        <div className={style.slider} style={{transform:`translateX(${slideProgress})`}}>
          <InformForm />
          <ConfirmForm setOtpConfirm={setOtpConfirm}/>
        </div>
        <Row className="d-flex justify-content-center">
          <Col md={4} sm={12} className="d-flex justify-content-center">
            <Button variant="contained" color="success" onClick={()=>setSlide(progress=>progress=="-100%"?"0%":"-100%")}>
              {slideProgress=="0%"||"-100%"?"Next":"Join"}
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default JoinInform;
