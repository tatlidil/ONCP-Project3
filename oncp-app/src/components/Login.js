import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../redux/userSlice'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/portal';

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform your login logic here. For example, make an API call to authenticate the user.

    // Assuming successful authentication:
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
    navigate(from, { replace: true }); // Redirect to the original requested page
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;