import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import React, { useEffect } from 'react';
import CustomerForm from './CustomerForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCustomer } from '@/Redux Toolkit/features/Customer/customerThunk';
import { setSelectedCustomer } from '@/Redux Toolkit/features/Cart/CartSlice';
// import { getAllCustomer } from '@/Redux Toolkit/features/User/userThunk';

// const customers = [
//   {
//     id: 1,
//     fullName: "John Doe",
//     phone: "123-456-7890",
//     email: "john@example.com"
//   },
//   {
//     id: 2,
//     fullName: "John Doe",
//     phone: "123-456-7890",
//     email: "john@example.com"
//   },
//   {
//     id: 3,
//     fullName: "John Doe",
//     phone: "123-456-7890",
//     email: "john@example.com"
//   },
//   {
//     id: 4,
//     fullName: "John Doe",
//     phone: "123-456-7890",
//     email: "john@example.com"
//   },
// ];

const CustomerDialog = ({ showCustomerDialog, setShowCustomerDialog }) => {
  const [showCustomerForm, setShowCustomerForm] = React.useState(false);
  const { customers } = useSelector(state => state.customer)
  const dispatch = useDispatch()


  const handleSelectCustomer = (customer) => {
    console.log("Selected Customer:", customer);
    dispatch(setSelectedCustomer(customer))

    setShowCustomerDialog(false);
  };

  useEffect(() => {
    dispatch(getAllCustomer())
  }, []);


  return (

    <Dialog
      open={showCustomerDialog}
      onOpenChange={setShowCustomerDialog}

    >
      <DialogContent className={"max-w-2xl"}>

        <DialogHeader>
          <DialogTitle>
            Select Customer
          </DialogTitle>
        </DialogHeader>
        <div className='mb-4'>

          <Input placeholder="Search Customer" />

        </div>
        <div className='max-h-96 overflow-y-auto '>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Name </TableHead>
                <TableHead className="w-[150px]">Pnone </TableHead>
                <TableHead className="w-[150px]">Email </TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.fullName}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.email}</TableCell>

                  <TableCell>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handleSelectCustomer(customer)}
                    >
                      Select
                    </Button>
                  </TableCell>
                </TableRow>
              ))}


            </TableBody>
          </Table>

        </div>
        <CustomerForm showCustomerForm={showCustomerForm}
          setShowCustomerForm={setShowCustomerForm}></CustomerForm>
        < DialogFooter>
          <Button onClick={() => {
            setShowCustomerForm(true)

          }}>Add New Customer</Button>
        </DialogFooter>


      </DialogContent>

    </Dialog>

  );
};

export default CustomerDialog;