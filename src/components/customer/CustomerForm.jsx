import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';

function CustomerForm() {
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/customers', customerData);
      alert('Customer added successfully!');
      navigate('/customers');
    } catch (error) {
      console.error('Error adding customer:', error);
      alert('Failed to add customer. Please try again.');
    }
  };
  
  return (
    <div>
      <NavBar />
      <div>
        <h1>Add Customer</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="customerName" label="Name" className="mb-3">
          <Form.Control
            type="text"
            name="name"
            value={customerData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="customerEmail" label="Email" className="mb-3">
          <Form.Control
            type="email"
            name="email"
            value={customerData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="customerPhone" label="Phone Number" className="mb-3">
          <Form.Control
            type="text"
            name="phone"
            value={customerData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </FloatingLabel>
        <Button variant="outline-success" type="submit" className="mt-3">
          Add Customer
        </Button>
      </Form>
    </div>
  );
}

export default CustomerForm;