import React from 'react';
import PropTypes from 'prop-types';

const Availability = ({ availability }) => {
  if (!availability) {
    return <p>No availability information provided.</p>;
  }

  return (
    <ul className="list-group">
      {availability.map((timeSlot, index) => (
        <li key={index} className="list-group-item">
          {timeSlot}
        </li>
      ))}
    </ul>
  );
};

Availability.propTypes = {
  availability: PropTypes.arrayOf(PropTypes.string)
};

export default Availability;
