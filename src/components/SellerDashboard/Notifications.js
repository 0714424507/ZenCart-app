import React from 'react';

const Notifications = () => {
  // Sample notification messages (you can use actual data from your backend)
  const notifications = [
    { message: 'New order received!', type: 'info' },
    { message: 'Low stock alert for Product A', type: 'warning' },
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.map((notification, index) => (
        <div key={index} className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;