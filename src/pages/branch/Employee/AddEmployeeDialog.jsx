import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';

import { Plus } from 'lucide-react';
import EmployeeForm from '@/pages/store/Employee/EmployeeForm';


const roles = [
  "ROLE_BRANCH_ADMIN",
  "ROLE_BRANCH_CASHIER",
  "ROLE_ BRANCH_MANAGER"
]

const AddEmployeeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={""}>
          <Plus />
          Add Employee

        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
        </DialogHeader>
        <EmployeeForm type="store" roles={roles} />

      </DialogContent>
    </Dialog>
  );
};

export default AddEmployeeDialog;