import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const FormStepTwo = ({ nextStep, prevStep, handleFormData, values }) => {
  const [errors, setErrors] = useState({});

  const submitFormData = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!values.address1) formErrors.address1 = "Address Line 1 is required";
    if (!values.city) formErrors.city = "City is required";
    if (!values.state) formErrors.state = "State is required";
    if (!values.zip) formErrors.zip = "Zip Code is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  return (
    <Form onSubmit={submitFormData}>
      <Form.Group controlId="formAddress1" className="mb-3">
        <Form.FloatingLabel label="Address Line 1">
          <Form.Control
            type="text"
            name="address1"
            value={values.address1}
            onChange={handleFormData("address1")}
            isInvalid={!!errors.address1}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address1}
          </Form.Control.Feedback>
        </Form.FloatingLabel>
      </Form.Group>

      <Form.Group controlId="formAddress2" className="mb-3">
        <Form.FloatingLabel label="Address Line 2">
          <Form.Control
            type="text"
            name="address2"
            value={values.address2}
            onChange={handleFormData("address2")}
          />
        </Form.FloatingLabel>
      </Form.Group>

      <Form.Group controlId="formCity" className="mb-3">
        <Form.FloatingLabel label="City">
          <Form.Control
            type="text"
            name="city"
            value={values.city}
            onChange={handleFormData("city")}
            isInvalid={!!errors.city}
          />
          <Form.Control.Feedback type="invalid">
            {errors.city}
          </Form.Control.Feedback>
        </Form.FloatingLabel>
      </Form.Group>

      <Form.Group controlId="formState" className="mb-3">
        <Form.FloatingLabel label="State">
          <Form.Control
            type="text"
            name="state"
            value={values.state}
            onChange={handleFormData("state")}
            isInvalid={!!errors.state}
          />
          <Form.Control.Feedback type="invalid">
            {errors.state}
          </Form.Control.Feedback>
        </Form.FloatingLabel>
      </Form.Group>

      <Form.Group controlId="formZip" className="mb-3">
        <Form.FloatingLabel label="Zip Code">
          <Form.Control
            type="text"
            name="zip"
            value={values.zip}
            onChange={handleFormData("zip")}
            isInvalid={!!errors.zip}
          />
          <Form.Control.Feedback type="invalid">
            {errors.zip}
          </Form.Control.Feedback>
        </Form.FloatingLabel>
      </Form.Group>

      <Container>
        <Row>
          <Col>
            <Button variant="secondary" onClick={prevStep}>
              Back
            </Button>
          </Col>
          <Col className="text-end">
            <Button variant="primary" type="submit">
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default FormStepTwo;
