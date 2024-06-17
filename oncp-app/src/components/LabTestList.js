import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LabTestList = () => {
  const [labTests, setLabTests] = useState([]);

  useEffect(() => {
    const fetchLabTests = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/labtests', {
        headers: { 'x-auth-token': token }
      });
      setLabTests(res.data);
    };

    fetchLabTests();
  }, []);

  return (
    <div>
      <h2>Lab Tests</h2>
      <ul>
        {labTests.map(test => (
          <li key={test._id}>
            {test.testName} - {test.result} (Date: {new Date(test.date).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabTestList;
