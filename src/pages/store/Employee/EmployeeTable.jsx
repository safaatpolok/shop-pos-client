import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import EditEmployeeDialog from "./EditEmployeeDialog";
import { useDispatch, useSelector } from "react-redux";
import { findStoreEmployee } from "@/Redux Toolkit/features/Employee/employeeThunk";

const EmployeeTable = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const dispatch = useDispatch();
  const store = useSelector((state) => state.store.store);
  const employees = useSelector((state) => state.employee.employees);

  // const handleOpenEditDialog = (employee) => {
  //   setSelectedEmployee(employee);
  // };

  useEffect(() => {
    if (store?.id) {
      dispatch(findStoreEmployee({ storeId: store.id }));
    }
  }, [store?.id, dispatch]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Login Access</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {employees?.map((employee, index) => (
          <TableRow key={index}>
            <TableCell>{employee.fullName}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.role}</TableCell>
            <TableCell>#BRH-{employee.role}</TableCell>

            <TableCell className="text-right">
              <EditEmployeeDialog
                handleOpenEditDialog={() => {
                  console.log(employee);
                  setSelectedEmployee(employee)
                }
                }
                selectedEmployee={selectedEmployee}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EmployeeTable;