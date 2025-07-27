import React from 'react';

const EarningsCard = ({ earnings }) => {
  return (
    <div className="card text-white bg-success mb-3">
      <div className="card-header">Earnings</div>
      <div className="card-body">
        <h5 className="card-title">Total Earnings</h5>
        <p className="card-text display-4">{earnings ? ${earnings} : '0'}</p>
      </div>
    </div>
  );
};

export default EarningsCard;
