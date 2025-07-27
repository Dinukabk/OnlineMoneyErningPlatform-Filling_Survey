import React from 'react';

const QuickActions = () => {
  return (
    <div className='card mb-3'>
      <div className='card-header'>Quick Actions</div>
      <div className='card-body'>
        <button className='btn btn-primary me-2'>Start Task</button>
        <button className='btn btn-secondary me-2'>View Reports</button>
        <button className='btn btn-success'>Withdraw Earnings</button>
      </div>
    </div>
  );
};

export default QuickActions;
