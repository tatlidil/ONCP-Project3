import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedComponent = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/auth/check-auth');
        if (response.status === 200) {
          setAuthenticated(true);
        }
      } catch (error) {
        setAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (!authenticated) {
    return <div>Please log in to view this page.</div>;
  }

  return <div>Protected Content</div>;
};

export default ProtectedComponent;