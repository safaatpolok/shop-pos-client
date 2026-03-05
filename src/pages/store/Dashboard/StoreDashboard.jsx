import React, { useEffect } from 'react';
import DashboardState from './DashboardState';
import RecentSales from './RecentSales';
import SalesTrend from './SalesTrend';
import { useDispatch } from 'react-redux';
import { getStoreByAdmin } from '@/Redux Toolkit/features/Store/stoteThunk';

const StoreDashboard = () => {

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold trackong-tight'>Dashboard</h1>
      <DashboardState />

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <RecentSales />
        <SalesTrend />
      </div>

    </div>
  );
};

export default StoreDashboard;