import { OutlinedInput, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { setValidation } from "../../../../utils/validation/formValidation";
import { useValidator } from "../../../../utils/validation/validator";

const InformForm = ({ forwardFieldData, submitStatus, setSubmitStatus }) => {
  const [fieldsData, setFieldsData] = useState(setValidation.joinValidation);
  const validator = useValidator();
  // event fire on field changes
  const onFieldChange = (event, index) => {
    setFieldsData(() =>
      fieldsData.map(
        (el, fieldIndex) =>
          fieldIndex == index ? { ...el, value: event.target.value } : el // assigning values by checking their index
      )
    );
    // forward data to mother components
    // forwardFieldData(fieldsData);
  };
  
  console.log(submitStatus);
  //checking validation on button click
  useEffect(() => {
    if (submitStatus) {
      let checkedField = fieldsData.map((el) => {
        let inValidData = validator(fieldsData).filter(
          (els) => els.field == el.title
        );
        console.log(inValidData);
        if (inValidData.length != 0) {
          return { ...el, error: inValidData[0].error };
        } else {
          delete el.error;
          return el;
        }
      });

      setFieldsData(checkedField);
      if (!validator(fieldsData).length) {
        forwardFieldData(fieldsData);
      }
    }
    setSubmitStatus(false);
  }, [submitStatus]);
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
                <TextField
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
              </FormControl>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default InformForm;
