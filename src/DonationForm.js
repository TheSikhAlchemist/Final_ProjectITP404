import React, { useState, useEffect } from 'react';
import { Form, Button, Toast } from 'react-bootstrap';
import './DonationForm.css'; // Assuming CSS file is named DonationForm.css


const DonationForm = () => {
  useEffect(() => {
    document.title = "Gradient News Domnation Page"; // Set the document title
  }, []);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    donationAmount: '',
    fullNameError: '',
    emailError: '',
    donationAmountError: '',
    showToast: false,
  });

  const validateForm = () => {
    let fullNameError = '';
    let emailError = '';
    let donationAmountError = '';

    if (!formData.fullName || !/^[a-zA-Z ]+$/.test(formData.fullName)) {
      fullNameError = 'Please enter a valid full name without special characters or numbers.';
    }

    if (!formData.email || !formData.email.includes('@')) {
      emailError = 'Please enter a valid email address.';
    }

    if (isNaN(formData.donationAmount) || formData.donationAmount <= 0) {
      donationAmountError = 'Please enter a valid donation amount.';
    }

    if (fullNameError || emailError || donationAmountError) {
      setFormData({
        ...formData,
        fullNameError,
        emailError,
        donationAmountError,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Simulating form submission (you'd send this data to your backend)
      setFormData({
        fullName: '',
        email: '',
        donationAmount: '',
        fullNameError: '',
        emailError: '',
        donationAmountError: '',
        showToast: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      donationAmount: '',
      fullNameError: '',
      emailError: '',
      donationAmountError: '',
      showToast: false,
    });
  };

  return (
    <div className="donation-form-container">
      <Form onSubmit={handleSubmit}>
      <Form.Group>
  <Form.Label>Full Name</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter your full name"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
  />
  <div className="invalid-feedback">{formData.fullNameError}</div>
</Form.Group>

<Form.Group>
  <Form.Label>Email</Form.Label>
  <div>
    <Form.Control
      type="email"
      placeholder="Enter your email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
    <div className="invalid-feedback">{formData.emailError}</div>
  </div>
</Form.Group>

<Form.Group>
  <Form.Label>Donation Amount</Form.Label>
  <div>
    <Form.Control
      type="number"
      placeholder="Enter donation amount"
      name="donationAmount"
      value={formData.donationAmount}
      onChange={handleChange}
    />
    <div className="invalid-feedback">{formData.donationAmountError}</div>
  </div>
</Form.Group>

        <div className="buttons-container">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" type="button" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </Form>

      <Toast
        show={formData.showToast}
        onClose={() => setFormData({ ...formData, showToast: false })}
        className="notification-toast"
      >
        <Toast.Body>Thank you for your donation!</Toast.Body>
      </Toast>
    </div>
    
  );
};

export default DonationForm;