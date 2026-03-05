import React, { useEffect } from 'react';

import TodayOverview from './TodayOverview';
import PaymentBreakdown from './PaymentBreakdown';
import SalesChat from './SalesChat';
import TopProducts from './TopProducts';
import CashierPerformance from './CashierPerformance';
import RecentOrders from './RecentOrders';
import { useDispatch, useSelector } from 'react-redux';
import { getPaymentBreakdown, getTodayOverview } from '@/Redux Toolkit/features/Branch Analytics/BranchAnalyticsThunk';

// const branch = { name: "sx east branch" }

const Dashboard = () => {



  const { branch } = useSelector(state => state.branch)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodayOverview(branch?.id))
    const today = new Date().toISOString().slice(0, 10)
    dispatch(getPaymentBreakdown({ branchId: branch?.id, date: today }))
  }, [branch])

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold tracking-tight'> Branch Dashboard</h1>
        {branch && <p className='text-gray-600 text-lg'>{branch.name}</p>}
      </div>
      <TodayOverview></TodayOverview>
      <PaymentBreakdown></PaymentBreakdown>

      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <SalesChat />
        <TopProducts />

      </div>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <CashierPerformance />
        <RecentOrders />

      </div>
    </div>
  );
};

export default Dashboard;