import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignUpForm = ({ onSuccess }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users', data);
      console.log('Response:', response.data);
      onSuccess(); // Close the modal after successful sign-up
      alert('Sign Up Successful! Please Sign In to access the portal.');
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
      alert('Error signing up. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              {...register('firstName', { required: 'First name is required' })}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              {...register('lastName', { required: 'Last name is required' })}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formDateOfBirth">
            <Form.Label>Date of Birth <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="date"
              {...register('dateOfBirth', { required: 'Date of birth is required' })}
              isInvalid={!!errors.dateOfBirth}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dateOfBirth?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register('email', { 
                required: 'Email is required', 
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: 'Invalid email address'
                }
              })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              {...register('phoneNumber')}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formChildName">
            <Form.Label>Child's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter child's name"
              {...register('childName')}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formChildDateOfBirth">
            <Form.Label>Child's Date of Birth</Form.Label>
            <Form.Control
              type="date"
              {...register('childDateOfBirth')}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPassword">
            <Form.Label>Create Password <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="password"
              placeholder="Create password"
              {...register('password', { 
                required: 'Password is required', 
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                }
              })}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit" className="w-100">
        Sign Up
      </Button>
      <Form.Text className="text-muted mt-2">
        <span className="text-danger">*</span> Indicates required fields
      </Form.Text>
    </Form>
  );
};

export default SignUpForm;
