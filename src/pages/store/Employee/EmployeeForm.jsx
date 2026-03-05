import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getAllBranchesByStore } from '@/Redux Toolkit/features/Branch/branchThunk';
import { createBranchEmployee, createStoreEmployee, updateEmployee } from '@/Redux Toolkit/features/Employee/employeeThunk';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EmployeeForm = ({ initialData, roles, type }) => {
  const dispatch = useDispatch();
  const { branch, branches } = useSelector((state) => state.branch);
  const { store } = useSelector((state) => state.store);
  // const {role}=useSelector((state)=>state.store)

  const formik = useFormik({
    initialValues: initialData || {
      fullName: "",
      email: "",
      password: " ",
      phone: "",
      role: "",
      branchId: initialData ? initialData.branchId : ""
    },
    onSubmit: (values) => {
      console.log("employee information", values);
      initialData ? handleEditEmployee(values)
        : type === "branch" ? handleAddBranchEmployee(values)
          : handleAddStoreEmployee(values)
    },
  });



  const handleAddBranchEmployee = (values) => {
    const data = {
      employee: values,
      branchId: branch?.id
    };
    dispatch(createBranchEmployee(data));
  };

  const handleAddStoreEmployee = (values) => {
    console.log("store employee", values)
    dispatch(createStoreEmployee({
      employee: {
        ...values,
        storeId: store?.id,
        username: values.email.splite("@")[0]
      }

    }))
  }

  const handleEditEmployee = (values) => {
    const data = {
      employeeId: initialData.id,
      employeeDetails: values
    };
    dispatch(updateEmployee(data));
    console.log("handle update employee", data);
  };

  useEffect(() => {
    if (initialData) {
      formik.setValues(initialData);
    } else {
      formik.resetForm();
    }
  }, [initialData]);

  useEffect(() => {

    if (store?.id) {
      dispatch(getAllBranchesByStore({ id: store?.id }))
    }

  }, [store?.id]);
  console.log("branch details", branch)

  return (
    <form onSubmit={formik.handleSubmit} className={"space-y-4 py-2"}>
      <div className='space-y-2'>
        <Label>Full Name</Label>
        <Input
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          placeholder={"Enter Employee Name"}
        />
      </div>

      <div className='space-y-2'>
        <Label>Email</Label>
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder={"Enter Employee Email"}
        />
      </div>

      <div className='space-y-2'>
        <Label>Password</Label>
        <Input
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder={"Enter Employee password"}
        />
      </div>

      <div className='space-y-2'>
        <Label>Phone</Label>
        <Input
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder={"Enter Employee phone"}
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label>Role</Label>
          <Select
            className="w-full"
            value={formik.values.role}
            onValueChange={(value) =>
              formik.setFieldValue("role", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {formik.values.role === "ROLE_BRANCH_MANAGER" && <div className='space-y-2'>
          <Label>Branch</Label>
          <Select
            className="w-full"
            value={formik.values.branchId}
            onValueChange={(value) =>
              formik.setFieldValue("branchId", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="select branch" />
            </SelectTrigger>
            <SelectContent>
              {branches?.map((branch) => (
                <SelectItem key={branch.id} value={branch.id}>
                  {branch.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>}


      </div>

      <div>
        <Button onClick={formik.handleSubmit} type={"submit"}>
          {initialData ? "save change" : "Add Employe"}
        </Button>
      </div>
    </form>
  );
};

export default EmployeeForm;