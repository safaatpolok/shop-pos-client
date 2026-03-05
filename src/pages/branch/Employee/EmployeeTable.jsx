import React, { useState } from 'react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import EditEmployeeDialog from './EditEmployeeDialog';




const EmployeeTable = () => {
  const [selectedEmployee, setSelectedEmployee] = useState();
  const handleOpenEditDialog = () => {
    setSelectedEmployee({ name: "pablo panday", role: "BRANCH_CASHIER", email: "pablo@gmail.com", phone: "12345678", password: "1234" })
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Name </TableHead>
          <TableHead className="">Roll </TableHead>
          <TableHead className="">Email </TableHead>
          <TableHead className="">Login Access </TableHead>
          <TableHead className="">Assign Since</TableHead>

          <TableHead className="">Status</TableHead>
          <TableHead className="text-right">Action</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {[{}].map((order, index) => (
          <TableRow key={index}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.createdAt}</TableCell>
            <TableCell>{order.fullName}</TableCell>
            <TableCell>{order.cashierId}</TableCell>
            <TableCell>{order.totalAmount}</TableCell>
            <TableCell>{order.paymentType}</TableCell>

            <TableCell className="text-right">

              <EditEmployeeDialog handleOpenEditDialog={handleOpenEditDialog} selectedEmployee={selectedEmployee} />

            </TableCell>
          </TableRow>
        ))}


      </TableBody>
    </Table>
  );
};

export default EmployeeTable;