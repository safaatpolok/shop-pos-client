import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { createCustomer } from '@/Redux Toolkit/features/Customer/customerThunk';
import { Form, Formik } from 'formik';
// import { Form } from 'radix-ui';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CustomerForm = ({ showCustomerForm, setShowCustomerForm }) => {
  const { customers } = useSelector(state => state.customer)
  const dispatch = useDispatch()
  const initialValues = {
    fullName: " ",
    phone: "",
    email: "",
  }
  console.log("customerForm Rendered", showCustomerForm);

  const handleCreateCustomer = (value) => {
    dispatch(createCustomer(value))
  }
  return (

    <Dialog open={showCustomerForm} onOpenChange={setShowCustomerForm}>
      <DialogContent className={"max-w-md"}>
        <DialogHeader>
          <DialogTitle>
            Add new Customer
          </DialogTitle>
        </DialogHeader>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("Form Submitted:", values);
            handleCreateCustomer(values)
          }}>
          {({ values, handleChange, handleBlur }) => (
            <Form className='space-y-5'>
              <Input
                name="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Input
                name="phone"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Input
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Button type="submit ">Add Customer</Button>


            </Form>
          )

          }

        </Formik>
      </DialogContent>
    </Dialog>


  );
};

export default CustomerForm;