import React from 'react';
import AddEmployeeDialog from './AddEmployeeDialog';
import EmployeeTable from './EmployeeTable';

const StoreEmployee = () => {
  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold tracking-tight'>Employee Managment</h1>
        <AddEmployeeDialog />

      </div>

      <EmployeeTable />

    </div>
  );
};

export default StoreEmployee;