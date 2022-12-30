import { OutlinedInput, FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ConfirmForm = ({ setOtpConfirm }) => {
  const [fieldsData, setFieldsData] = useState([
    {
      title: "OTP",
      value: "",
      validation: "Error",
      placeholder: "Enter your OTP",
    },
    {
      title: "Password",
      value: "",
      validation: "Error",
      placeholder: "Enter a password",
    },
    {
      title: "Password",
      value: "",
      validation: "Error",
      placeholder: "Confirm password",
    },
  ]);

  useEffect(() => {
    if(fieldsData[0].value.length==5){
        console.log("Enter your otp")
    }
  }, [fieldsData])
  
  return (
    <div style={{ width: "100%" }}>
      <Container
        className="d-flex gap-5 flex-column flex-shrink-0"
        style={{ width: "85vw" }}
      >
        <Row gap={5}>
          {fieldsData.map((field, index) => (
            <Col
              key={index}
              md={4}
              sm={12}
              className="d-flex justify-content-center mt-4"
            >
              <FormControl sx={{ width: "80%" }}>
                <OutlinedInput
                  onChange={(e) =>
                    setFieldsData(() =>
                      fieldsData.map((el, fieldIndex) =>
                        fieldIndex == index ? {...el,value:e.target.value} : el // assigning values by checking their index
                      )
                    )
                  }
                  sx={{ color: "white", border: "1px solid gray" }}
                  placeholder={field.placeholder}
                />
              </FormControl>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ConfirmForm;
