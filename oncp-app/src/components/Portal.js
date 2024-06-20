// src/components/Portal.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppointmentForm from './AppointmentForm';
import LabTestList from './LabTestList';
import PrescriptionList from './PrescriptionList';
import Availability from './Availability';

const Portal = () => {
  const [appointments, setAppointments] = useState([]);
  const [labTests, setLabTests] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };

      try {
        const [appointmentsRes, labTestsRes, prescriptionsRes, availabilityRes] = await Promise.all([
          axios.get('http://127.0.0.1:5000/api/appointments', config),
          axios.get('http://127.0.0.1:5000/api/labtests', config),
          axios.get('http://127.0.0.1:5000/api/prescriptions', config),
          axios.get('http://127.0.0.1:5000/api/availability', config),
        ]);

        setAppointments(appointmentsRes.data);
        setLabTests(labTestsRes.data);
        setPrescriptions(prescriptionsRes.data);
        setAvailability(availabilityRes.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Patient Portal</h1>
      <hr />
      <h2>Appointments</h2>
      <AppointmentForm appointments={appointments} />
      <hr />
      <h2>Lab Tests</h2>
      <LabTestList labTests={labTests} />
      <hr />
      <h2>Prescriptions</h2>
      <PrescriptionList prescriptions={prescriptions} />
      <hr />
      <h2>Doctor's Availability</h2>
      <Availability availability={availability} />
    </div>
  );
};

export default Portal;
