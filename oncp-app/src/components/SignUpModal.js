import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm'; 
import { useForm } from 'react-hook-form'; // React Hook Form for form validation

const SignUpModal = ({ show, handleClose, content }) => {
  // React Hook Form usage
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signInError, setSignInError] = useState(''); // State to hold sign-in errors
  const navigate = useNavigate(); // useNavigate hook for navigation within React Router

  // Function to handle sign-in form submission
  const handleSignIn = async (data) => {
    try {
      // Send POST request to backend to authenticate user
      const res = await axios.post('http://127.0.0.1:5000/api/auth/login', data);
      const { token } = res.data; // Extract token from response data
      localStorage.setItem('token', token); // Store token in localStorage for future API requests
      handleClose(); // Close the modal upon successful login
      navigate('/portal'); // Navigate to '/portal' route using React Router
    } catch (error) {
      console.error('Error signing in', error); // Log any errors encountered during sign-in process
      setSignInError('Please check your email or password and try again.'); // Set error state for display
    }
  };
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        {/* Display modal title based on 'content' prop */}
        <Modal.Title>{content === 'signup' ? 'Sign Up' : 'Sign In'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {content === 'signup' ? ( // Conditionally render  Sign In form
          <SignUpForm onSuccess={handleClose} /> // Render Sign in Form component
        ) : (
          <Form onSubmit={handleSubmit(handleSignIn)} className="p-3"> {/* Sign In form */}
            {signInError && <Alert variant="danger">{signInError}</Alert>} {/* Display sign-in error message */}
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
                  {/* Email input field with validation using React Hook Form */}
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
                    {errors.email?.message} {/* Display email validation error message */}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                  {/* Password input field with validation using React Hook Form */}
                  <Form.Control
                    type="password"
                    placeholder="Password"
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
                    {errors.password?.message} {/* Display password validation error message */}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" className="w-100">
              Sign In {/* Submit button to trigger sign-in form submission */}
            </Button>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close {/* Close button to dismiss the modal */}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUpModal;
