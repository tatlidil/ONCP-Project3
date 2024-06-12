import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentForm = ({ doctorId }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [availability, setAvailability] = useState({});

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const res = await axios.get(`/api/availability/${doctorId}`);
        setAvailability(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAvailability();
  }, [doctorId]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/appointments', { doctorId, date, time, reason }, {
        headers: { 'x-auth-token': token }
      });
      alert('Appointment requested successfully');
    } catch (error) {
      console.error(error);
      alert('Error requesting appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date</label>
        <select value={date} onChange={e => setDate(e.target.value)}>
          {availability.availableDates && availability.availableDates.map(d => (
            <option key={d} value={d}>{new Date(d).toLocaleDateString()}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Time</label>
        <select value={time} onChange={e => setTime(e.target.value)}>
          {availability.availableTimes && availability.availableTimes.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Reason</label>
        <textarea value={reason} onChange={e => setReason(e.target.value)} />
      </div>
      <button type="submit">Request Appointment</button>
    </form>
  );
};

export default AppointmentForm;
