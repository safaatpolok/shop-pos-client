import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { useSelector } from 'react-redux';


// const shiftData = {
//   cashier: {
//     fullName: "Pablo pikaso"
//   },
//   shiftStart: "Aug 8, 2025,09:34 AM",
//   shiftEnd: "",
//   totalOrders: 59,
//   totalSales: 69999,

//   totalRefund: 21999,
//   netSales: 48000
// }

const SalesSummaryCard = () => {
  const shiftData = useSelector(state => state.shiftReport?.currentShift)
  return (
    <Card>
      <CardContent>
        <h2 className='text-xl font-semibold mb-4'>Salse summary</h2>
        <div className='space-y-2'>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Total Orders:</span>
            <span className='font-medium'>{shiftData?.totalOrders}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Total Sales:</span>
            <span className='font-medium'>${shiftData?.totalSales}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Total Refund:</span>
            <span className='font-medium text-red-500'>-${shiftData?.totalRefund || 0}</span>
          </div>
          <div className='flex justify-between border-t'>
            <span className='text-muted-foreground'>Net Sales:</span>
            <span className='font-medium'>${shiftData?.totalSales - (shiftData?.totalRefund || 0)}</span>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default SalesSummaryCard;