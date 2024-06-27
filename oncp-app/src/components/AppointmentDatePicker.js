// components/AppointmentDatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';

const AppointmentDatePicker = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async () => {
    if (selectedDate) {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        await axios.post(
          'http://127.0.0.1:5000/api/appointments',
          { date: selectedDate },
          { headers: { 'x-auth-token': token } } // Include token in request headers
        );
        onDateSelect(selectedDate);
      } catch (error) {
        console.error('Error saving appointment:', error);
      }
    } else {
      alert('Please select a date');
    }
  };

  return (
    <div className="container">
      <Row className="justify-content-center">
        <Col md={12} className="text-center">
          <div className="my-3">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              calendarClassName="bg-white rounded"
            />
          </div>
          <Button variant="primary" className="mt-3 w-100" onClick={handleSubmit}>
            Request Appointment
          </Button>
          <Button variant="secondary" className="mt-2 w-100" onClick={() => onDateSelect(null)}>
            Close
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AppointmentDatePicker;
