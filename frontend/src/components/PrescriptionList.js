import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrescriptionList = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/prescriptions', {
        headers: { 'x-auth-token': token }
      });
      setPrescriptions(res.data);
    };

    fetchPrescriptions();
  }, []);

  return (
    <div>
      <h2>Prescriptions</h2>
      <ul>
        {prescriptions.map(prescription => (
          <li key={prescription._id}>
            {prescription.medication} - {prescription.dosage} (Date: {new Date(prescription.date).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrescriptionList;
