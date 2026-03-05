import React, { useEffect } from 'react';
import ShiftReportHeader from './ShiftReportHeader';
import ShiftInFormation from './ShiftInFormation';
import SalesSummaryCard from './SalesSummaryCard';
import PaymentSummaryCard from './PaymentSummaryCard';
import TopSellingItems from './TopSellingItems';
import RecentOrdersTable from './RecentOrdersTable';
import RefundsTable from './RefundsTable';
import { useDispatch } from 'react-redux';
import { getCurrentshiftProgress } from '@/Redux Toolkit/features/ShiftReport/ShiftRepoerThunk';

const ShiftSummaryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentshiftProgress())
  }, [])
  return (
    <div className='h-full flex flex-col'>

      <ShiftReportHeader></ShiftReportHeader>

      <div className='flex-1 overflow-auto p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
          <ShiftInFormation></ShiftInFormation>
          <SalesSummaryCard></SalesSummaryCard>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
          <PaymentSummaryCard></PaymentSummaryCard>
          <TopSellingItems></TopSellingItems>


        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
          <RecentOrdersTable></RecentOrdersTable>
          <RefundsTable></RefundsTable>

        </div>

      </div>

    </div>
  );
};

export default ShiftSummaryPage;