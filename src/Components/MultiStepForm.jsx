import React, { useState, useEffect } from "react";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import { Tabs, Tab, Row, Col, Alert } from "react-bootstrap";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleFormData = (input) => (e) => {
    const newFormData = { ...formData, [input]: e.target.value };
    setFormData(newFormData);
    localStorage.setItem("formData", JSON.stringify(newFormData));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    setShow(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    });
    setStep(1);
    localStorage.removeItem("formData");
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <FormStepOne
            nextStep={nextStep}
            handleFormData={handleFormData}
            values={formData}
          />
        );
      case 2:
        return (
          <FormStepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleFormData}
            values={formData}
          />
        );
      case 3:
        return (
          <FormStepThree
            prevStep={prevStep}
            values={formData}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return (
          <FormStepOne
            nextStep={nextStep}
            handleFormData={handleFormData}
            values={formData}
          />
        );
    }
  };
console.log(formData);
  return (
    <div className="container mt-5">
      <div className="form-box">
        {show && (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Form Submitted Successfully!</Alert.Heading>
          </Alert>
        )}

        <h3 className="text-center my-2">Multi-Step Form</h3>
        <Tabs
          activeKey={step.toString()}
          onSelect={(k) => {
            const selectedStep = parseInt(k);
            if (selectedStep === 2 && !formData.name && !formData.email && !formData.phone) {
                
                return;
              }
              if (selectedStep === 3 && !formData.address1 && !formData.city && !formData.state && !formData.zip) {
                return;
              }
            setStep(selectedStep);
          }}
          className="mb-3"
        >
          <Tab eventKey={1} title="Step 1">
            {renderFormStep()}
          </Tab>
          <Tab
            eventKey={2}
            title="Step 2"
            disabled={
              !formData.name || !formData.email || !formData.phone
            }
          >
            {renderFormStep()}
          </Tab>
          <Tab
            eventKey={3}
            title="Step 3"
            disabled={
              !formData.address1 ||
              !formData.city ||
              !formData.state ||
              !formData.zip
            }
          >
            {renderFormStep()}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default MultiStepForm;
