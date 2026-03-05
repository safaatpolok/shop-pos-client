import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// const shiftData = {
//   cashier: {
//     fullName: "Pablo pikaso"
//   },
//   shiftStart: "Aug 8, 2025,09:34 AM",
//   shiftEnd: "",
// }


const ShiftInFormation = () => {

  const dispatch = useDispatch();


  const shiftData = useSelector(state => state.shiftReport?.currentShift)
  return (
    <Card>
      <CardContent>
        <h2 className='text-xl font-semibold mb-4'>Shift Information</h2>
        <div className='space-y-2'>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Cashire:</span>
            <span className='font-medium'>{shiftData?.cashier?.fullName}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Shift Start:</span>
            <span className='font-medium'>{shiftData?.shiftStart}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Shift End:</span>
            <span className='font-medium'>{shiftData?.shiftEnd ? shiftData.shiftEnd : "ongoing"}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Duration:</span>
            <span className='font-medium'>{"8 hours"}</span>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default ShiftInFormation;