import { OutlinedInput, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { setValidation } from "../../../../utils/validation/formValidation";

const ConfirmForm = ({
  setOtpConfirm,
  forwardFieldData,
  ButtonState,
  verifyState,
  onVerify,
  otpState,
  joinState,
  onJoin
}) => {
  const [fieldsData, setFieldsData] = useState(setValidation.confirmValidation);
  console.log(fieldsData);

  const onFieldChange = (event, index) => {
    setFieldsData(() =>
      fieldsData.map(
        (el, fieldIndex) =>
          fieldIndex == index ? { ...el, value: event.target.value } : el // assigning values by checking their index
      )
    );
  };
  useEffect(() => {
    if (verifyState) {
      forwardFieldData((previousData) => [...previousData, ...fieldsData]);
    }
    onVerify(false);
  }, [verifyState]);

  useEffect(()=>{
    if (joinState) {
      forwardFieldData((previousData) => [...previousData, ...fieldsData]);
    }
    onJoin(false)
  },[joinState])
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
                {field.title == "OTP" ? (
                  <>
                    <TextField
                      disabled={otpState ? true : false}
                      error={field.error ? true : false}
                      helperText={field?.error}
                      InputProps={{
                        style: { color: "gray" },
                      }}
                      InputLabelProps={{
                        style: { color: "gray" },
                      }}
                      label={field.placeholder}
                      variant="standard"
                      onChange={(e) => onFieldChange(e, index)}
                    />
                  </>
                ) : (
                  <>
                    <TextField
                      disabled={otpState ? false : true}
                      error={field.error ? true : false}
                      helperText={field?.error}
                      InputProps={{
                        style: { color: "gray" },
                      }}
                      InputLabelProps={{
                        style: { color: "gray" },
                      }}
                      label={field.placeholder}
                      variant="standard"
                      onChange={(e) => onFieldChange(e, index)}
                    />
                  </>
                )}
              </FormControl>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ConfirmForm;
