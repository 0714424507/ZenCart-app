import React from 'react';
import DashboardOverview from './DashboardOverview';
import SalesChart from './SalesChart';
import RevenueBreakdownChart from './RevenueBreakdownChart';
import RecentOrdersTable from './RecentOrdersTable';
import Notifications from './Notifications';
import FilterAndDateRangeSelector from './FilterAndDateRangeSelector';

const SellerDashboard = () => {
  return (
    <div className="seller-dashboard">
      <h1>Seller Dashboard</h1>

      <div className="dashboard-section">
        <DashboardOverview />
      </div>

      <div className="dashboard-section">
        <SalesChart />
      </div>


      <div className="dashboard-section">
        <RevenueBreakdownChart />
      </div>

      <div className="dashboard-section">
        <RecentOrdersTable />
      </div>

      <div className="dashboard-section">
        <Notifications />
      </div>

      <div className="dashboard-section">
        <FilterAndDateRangeSelector />
      </div>
    </div>
  );
};

export default SellerDashboard;
