import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createBranch, updateBranch } from '@/Redux Toolkit/features/Branch/branchThunk';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



const BranchForm = ({ onSubmit, onCancel, initialValues, isEditing }) => {
  const dispatch = useDispatch();
  const { store } = useSelector((state) => state.store)

  const handleSubmit = (values) => {
    const branchData = {
      ...values,
      storeId: store?.id

    };
    console.log("branch data to submit", branchData);

    if (isEditing) {
      dispatch(updateBranch({ id: initialValues.id, dto: branchData }))
    } else {
      dispatch(createBranch({ dto: branchData }));

    }
    onSubmit();

  }
  return (
    <Formik initialValues={
      initialValues || {
        name: "",
        address: "",
        email: "",
        phone: "",

      }
    }
      onSubmit={handleSubmit}

    >

      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div className='space-y-2'>
            <Label>Branch Name</Label>
            <Field as={Input} name="name" placeholder="Enter branch name" />
          </div>

          <div className='space-y-2'>
            <label htmlFor="address">Address</label>
            <Field
              as={Input}
              id="address"
              name="address"
              placeholder="Enter branch address"
            />
          </div>

          {/* 
          <div className='space-y-2'>
            <label htmlFor="manager">Manager Name</label>
            <Field as={Input}
              id="manage"
              name="manage"
              placeholder="Enter branch manager name" />
          </div> */}
          <div className='space-y-2'>
            <label htmlFor="email">Branch Email</label>
            <Field as={Input}
              id="email"
              name="email"
              placeholder="Enter branch email" />
          </div>

          <div className='space-y-2'>
            <label htmlFor="phone">Phone Number</label>
            <Field as={Input}
              id="phone"
              name="phone"
              placeholder="Enter branch phne number" />
          </div>

          <div className='flex justify-end gap-2 pt-4'>
            <Button type="button" variant='outline' onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" >

              {

                isEditing
                  ? "Update Branch"
                  : "Add Branch"}

            </Button>
          </div>

        </Form>


      )}

    </Formik>

  );
};

export default BranchForm;