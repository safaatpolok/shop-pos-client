import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';

import { Edit, Plus } from 'lucide-react';
import EmployeeForm from '@/pages/store/Employee/EmployeeForm';

const roles = [
  "BRANCH_ADMIN",
  "BRANCH_CASHIER",
  "BRANCH_MANAGER"
]

const EditEmployeeDialog = ({ selectedEmployee, handleOpenEditDialog }) => {
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