import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { useForm } from 'react-hook-form';

const SignUpModal = ({ show, handleClose, content }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signInError, setSignInError] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSignIn = async (data) => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/auth/login', data);
      const { token } = res.data;
      localStorage.setItem('token', token);
      handleClose();
      navigate('/portal');
    } catch (error) {
      console.error('Error signing in', error);
      setSignInError('Please check your email or password and try again.');
    }
  };
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{content === 'signup' ? 'Sign Up' : 'Sign In'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {content === 'signup' ? (
          <SignUpForm onSuccess={handleClose} />
        ) : (
          <Form onSubmit={handleSubmit(handleSignIn)} className="p-3">
            {signInError && <Alert variant="danger">{signInError}</Alert>}
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formBasicEmail">
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
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
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
              Sign In
            </Button>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUpModal;
