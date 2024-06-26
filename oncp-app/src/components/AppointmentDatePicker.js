import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentDatePicker = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    if (selectedDate) {
      onDateSelect(selectedDate);
    } else {
      alert('Please select a date');
    }
  };

  return (
    <div className="date-picker-container">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        inline
      />
      <button className="btn btn-primary mt-3" onClick={handleSubmit}>
        Request Appointment
      </button>
    </div>
  );
};

export default AppointmentDatePicker;