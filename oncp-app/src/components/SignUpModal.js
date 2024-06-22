import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const SignUpModal = ({ show, handleClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSignUp = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { email, password });

      // Example user data
      const userData = {
        name: 'John Doe',
        imageUrl: 'path/to/profile-image.jpg',
        appointments: [],
        labTests: [],
        prescriptions: [],
        messages: [],
      };

      dispatch(login(userData));
      localStorage.setItem('token', 'example_token');
      onSuccess(); // Call the onSuccess handler
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', { email, password });
      const { token } = res.data;
      localStorage.setItem('token', token);
      navigate('/'); // Navigate to the homepage after successful sign-in
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Access Portal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSignIn}>
          Sign In
        </Button>
        <Button variant="link" onClick={handleSignUp}>
          Sign Up for Access
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUpModal;


