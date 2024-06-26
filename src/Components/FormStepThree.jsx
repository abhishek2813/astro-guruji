import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";

const FormStepThree = ({ prevStep, values, handleSubmit }) => {
  return (
    <div>
      <h3>Confirmation</h3>
      <ListGroup>
        <ListGroup.Item>
          <strong>Name:</strong> {values.name}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Email:</strong> {values.email}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Phone:</strong> {values.phone}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Address Line 1:</strong> {values.address1}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Address Line 2:</strong> {values.address2}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>City:</strong> {values.city}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>State:</strong> {values.state}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Zip Code:</strong> {values.zip}
        </ListGroup.Item>
      </ListGroup>
      <Row className="my-3">
        <Col>
          <Button variant="secondary" onClick={prevStep}>
            Back
          </Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FormStepThree;
