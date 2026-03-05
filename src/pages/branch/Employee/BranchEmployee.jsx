import React, { useEffect } from 'react';
import AddEmployeeDialog from './AddEmployeeDialog';
import EmployeeState from './EmployeeState';
import EmployeeTable from './EmployeeTable';
import { useDispatch, useSelector } from 'react-redux';
import { getDailySalesChart } from '@/Redux Toolkit/features/Branch Analytics/BranchAnalyticsThunk';
import { findBranchEmployee } from '@/Redux Toolkit/features/Employee/employeeThunk';

const BranchEmployee = () => {

  const { branch } = useSelector((state) => state.branch);

  const dispatch = useDispatch();

  useEffect(() => {

    if (branch) {
      dispatch(findBranchEmployee({ branchId: branch?.id }));
    }


  }, [branch]);

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold tracking-tight'>Employee Managment</h1>
        <AddEmployeeDialog />

      </div>
      <EmployeeState />
      <EmployeeTable />

    </div>
  );
};

export default BranchEmployee;