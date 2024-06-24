import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';

const SignUpModal = ({ show, handleClose, content }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/auth/login', { email, password });
      const { token } = res.data;
      localStorage.setItem('token', token);
      handleClose(); // Call the onSuccess handler to close modal
      navigate('/portal'); // Navigate to the portal after successful sign-in
    } catch (error) {
      console.error('Error signing in', error);
      alert('Error signing in. Please try again.');
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
          <Form onSubmit={handleSignIn}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
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
