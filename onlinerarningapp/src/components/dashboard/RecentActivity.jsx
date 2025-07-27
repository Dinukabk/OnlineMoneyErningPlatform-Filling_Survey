import React from 'react';

const RecentActivity = ({ activities }) => {
  return (
    <div className='card'>
      <div className='card-header'>Recent Activity</div>
      <ul className='list-group list-group-flush'>
        {activities && activities.length > 0 ? (
          activities.map((activity, index) => (
            <li key={index} className='list-group-item'>
              {activity}
            </li>
          ))
        ) : (
          <li className='list-group-item'>No recent activity</li>
        )}
      </ul>
    </div>
  );
};

export default RecentActivity;
