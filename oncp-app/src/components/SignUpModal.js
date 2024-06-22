import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice'; // Adjusted path

const SignUpModal = ({ show, handleClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    try {
      await axios.post('/api/auth/signup', { email, password });
      const userData = {
        name: 'John Doe', // Example user data
        imageUrl: 'path/to/profile-image.jpg', // Example profile image path
        appointments: [],
        labTests: [],
        prescriptions: [],
        messages: [],
      };

      dispatch(login(userData));
      localStorage.setItem('token', 'example_token'); // Set token in localStorage
      onSuccess(); // Call the onSuccess handler
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
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
        <Button variant="primary" onClick={handleSignUp}>
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUpModal;


