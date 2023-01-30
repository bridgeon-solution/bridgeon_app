import {
  OutlinedInput,
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { setValidation } from "../../../../utils/validation/formValidation";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ConfirmForm = ({
  forwardFieldData,
  verifyState,
  onVerify,
  otpState,
  joinState,
  onJoin,
}) => {
  //setting up initial fields
  const [fieldsData, setFieldsData] = useState(setValidation.confirmValidation);
  //on password action
  const [showPassword, onShowPassword] = useState(true);
  const handleClickShowPassword = () => onShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //field changes
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

  useEffect(() => {
    if (joinState) {
      forwardFieldData((previousData) => [...previousData, ...fieldsData]);
    }
    onJoin(false);
  }, [joinState]);
  return (
    <div style={{ width: "100%" }}>
      <Container
        className="d-flex gap-5 flex-column flex-shrink-0"
        style={{ width: "85vw" }}
      >
        <Row gap={5} className="d-flex justify-content-center">
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
                ) : field.title == "Password" ? (
                  <>
                    <TextField
                      disabled={otpState ? false : true}
                      error={field.error ? true : false}
                      helperText={field?.error}
                      InputProps={{
                        style: { color: "gray" },
                        type: !showPassword ? "text" : "password",
                        endAdornment: (
                          <>
                            <InputAdornment position="end">
                              <IconButton
                                sx={{ color: "gray" }}
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          </>
                        ),
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

// endAdornment={

// }
export default ConfirmForm;
