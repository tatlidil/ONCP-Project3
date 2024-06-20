// src/components/Availability.js
import React from 'react';

const Availability = ({ availability }) => {
  return (
    <div>
      <h3>Doctor's Availability</h3>
      <ul>
        {availability.map((slot, index) => (
          <li key={index}>{slot}</li>
        ))}
      </ul>
    </div>
  );
};

export default Availability;
