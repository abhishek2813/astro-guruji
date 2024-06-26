import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const FormStepOne = ({ nextStep, handleFormData, values }) => {
  const [errors, setErrors] = useState({});

  const submitFormData = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!values.name) formErrors.name = "Name is required";
    if (!values.email) formErrors.email = "Email is required";
    if (!values.phone) formErrors.phone = "Phone number is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  return (
    <Form onSubmit={submitFormData}>
    <Form.Group controlId="formName" className="mb-3">
      <Form.FloatingLabel label="Name">
        <Form.Control
          type="text"
          name="name"
          value={values.name}
          onChange={handleFormData('name')}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.FloatingLabel>
    </Form.Group>

    <Form.Group controlId="formEmail" className="mb-3">
      <Form.FloatingLabel label="Email">
        <Form.Control
          type="email"
          name="email"
          value={values.email}
          onChange={handleFormData('email')}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.FloatingLabel>
    </Form.Group>

    <Form.Group controlId="formPhone" className="mb-3">
      <Form.FloatingLabel label="Phone">
        <Form.Control
          type="text"
          name="phone"
          value={values.phone}
          onChange={handleFormData('phone')}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.FloatingLabel>
    </Form.Group>

    <Button variant="primary" type="submit">
      Next
    </Button>
  </Form>
  );
};

export default FormStepOne;
