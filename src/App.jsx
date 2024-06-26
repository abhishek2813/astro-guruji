import { useState } from "react";

import "./App.css";

import MultiStepForm from "./Components/MultiStepForm";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <MultiStepForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
