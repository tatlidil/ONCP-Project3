import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

const PrivateRoute = ({ component: Component }) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
