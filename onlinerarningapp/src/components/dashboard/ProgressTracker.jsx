import React from 'react';

const ProgressTracker = ({ progress }) => {
  const percentage = progress ?? 0;

  return (
    <div className="mb-3">
      <h5>Progress</h5>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: \\%\ }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
