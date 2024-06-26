import React from 'react';
import PropTypes from 'prop-types';

const LabTestList = ({ labTests }) => {
  if (!labTests) {
    return <p>No lab tests available.</p>;
  }

  return (
    <ul className="list-group">
      {labTests.map((test, index) => (
        <li key={index} className="list-group-item">
          {test}
        </li>
      ))}
    </ul>
  );
};

LabTestList.propTypes = {
  labTests: PropTypes.arrayOf(PropTypes.string)
};

export default LabTestList;
