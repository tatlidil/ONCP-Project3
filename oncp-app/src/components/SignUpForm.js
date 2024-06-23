import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const SignUpForm = ({ onSuccess }) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    childName: '',
    childDob: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', userData);
      onSuccess(); // Close the modal after successful sign-up
      alert('Sign Up Successful! Please Sign In to access the portal.');
      setUserData({
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        phone: '',
        childName: '',
        childDob: '',
        password: ''
      });
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formDob">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          name="dob"
          value={userData.dob}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter phone number"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formChildName">
        <Form.Label>Child's Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter child's name"
          name="childName"
          value={userData.childName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formChildDob">
        <Form.Label>Child's Date of Birth</Form.Label>
        <Form.Control
          type="date"
          name="childDob"
          value={userData.childDob}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Create Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Create password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;