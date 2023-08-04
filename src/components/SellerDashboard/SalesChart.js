import React from 'react';
import { Line } from 'react';

const SalesChart = () => {
  // Sample data (you can use actual data from your backend)
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="sales-chart">
      <h2>Sales Performance</h2>
      <Line data={salesData} />
    </div>
  );
};

export default SalesChart;