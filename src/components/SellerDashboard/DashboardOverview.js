import React from 'react';

const DashboardOverview = () => {
  // Sample data (you can use actual data from your backend)
  const totalSales = 100;
  const totalRevenue = 5000;
  const numOrders = 50;

  return (
    <div className="dashboard-overview">
      <h2>Overview</h2>
      <div>Total Sales: {totalSales}</div>
      <div>Total Revenue: ${totalRevenue}</div>
      <div>Number of Orders: {numOrders}</div>
    </div>
  );
};

export default DashboardOverview;