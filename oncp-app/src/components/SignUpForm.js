import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form'; // React Hook Form for form validation
import axios from 'axios'; // Axios for making HTTP requests

const SignUpForm = ({ onSuccess }) => {
  // React Hook Form usage
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      // Send POST request to backend to create user
      const response = await axios.post('http://localhost:5000/api/users', data);
      console.log('Response:', response.data); // Log response data to console
      onSuccess(); // Close the modal or perform success action
      alert('Sign Up Successful! Please Sign In to access the portal.'); // Show success message to user
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message); // Log error details
      alert('Error signing up. Please try again.'); // Alert user of sign-up error
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
            {/* First name input field with validation */}
            <Form.Control
              type="text"
              placeholder="Enter first name"
              {...register('firstName', { required: 'First name is required' })}
              isInvalid={!!errors.firstName} // Display invalid state based on validation errors
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName?.message} {/* Display validation error message */}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
            {/* Last name input field with validation */}
            <Form.Control
              type="text"
              placeholder="Enter last name"
              {...register('lastName', { required: 'Last name is required' })}
              isInvalid={!!errors.lastName} // Display invalid state based on validation errors
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName?.message} {/* Display validation error message */}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formDateOfBirth">
            <Form.Label>Date of Birth <span className="text-danger">*</span></Form.Label>
            {/* Date of birth input field with validation */}
            <Form.Control
              type="date"
              {...register('dateOfBirth', { required: 'Date of birth is required' })}
              isInvalid={!!errors.dateOfBirth} // Display invalid state based on validation errors
            />
            <Form.Control.Feedback type="invalid">
              {errors.dateOfBirth?.message} {/* Display validation error message */}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
            {/* Email input field with validation */}
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register('email', { 
                required: 'Email is required', // Required validation message
                pattern: { // Pattern validation for email format
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: 'Invalid email address'
                }
              })}
              isInvalid={!!errors.email} // Display invalid state based on validation errors
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message} {/* Display validation error message */}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            {/* Phone number input field */}
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              {...register('phoneNumber')} // Register phone number field
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formChildName">
            <Form.Label>Child's Name</Form.Label>
            {/* Child's name input field */}
            <Form.Control
              type="text"
              placeholder="Enter child's name"
              {...register('childName')} // Register child's name field
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formChildDateOfBirth">
            <Form.Label>Child's Date of Birth</Form.Label>
            {/* Child's date of birth input field */}
            <Form.Control
              type="date"
              {...register('childDateOfBirth')} // Register child's date of birth field
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPassword">
            <Form.Label>Create Password <span className="text-danger">*</span></Form.Label>
            {/* Password input field with validation */}
            <Form.Control
              type="password"
              placeholder="Create password"
              {...register('password', { 
                required: 'Password is required', // Required validation message
                minLength: { // Minimum length validation for password
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                }
              })}
              isInvalid={!!errors.password} // Display invalid state based on validation errors
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message} {/* Display validation error message */}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit" className="w-100">
        Sign Up {/* Submit button to trigger form submission */}
      </Button>
      <Form.Text className="text-muted mt-2">
        <span className="text-danger">*</span> Indicates required fields {/* Required fields note */}
      </Form.Text>
    </Form>
  );
};

export default SignUpForm;