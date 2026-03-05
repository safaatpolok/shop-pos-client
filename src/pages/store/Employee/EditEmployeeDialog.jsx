import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import EmployeeForm from './EmployeeForm';
import { Edit, Plus } from 'lucide-react';

const roles = [
  "ROLE_BRANCH_ADMIN",
  "ROLE_BRANCH_CASHIER",
  "ROLE_ BRANCH_MANAGER"
]


const EditEmployeeDialog = ({ selectedEmployee, handleOpenEditDialog }) => {
  console.log("selected employee", selectedEmployee)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={handleOpenEditDialog} variant={"outline"} className={""}>
          <Edit />


        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Employee</DialogTitle>
        </DialogHeader>
        <EmployeeForm roles={roles} initialData={selectedEmployee} />

      </DialogContent>
    </Dialog>
  );
};

export default EditEmployeeDialog;