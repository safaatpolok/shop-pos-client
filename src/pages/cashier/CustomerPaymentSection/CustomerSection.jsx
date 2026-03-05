import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Edit, User } from 'lucide-react';
import React from 'react';
import CustomerDialog from './CustomerDialog';
import { useSelector } from 'react-redux';
import { selectSelectedCustomer } from '@/Redux Toolkit/features/Cart/CartSlice';


// let selectedCustomer = {
//   fullName: "John Doe",
//   phone: "123-456-7890",
// };
// selectedCustomer = null;

const CustomerSection = () => {


  const [showCustomerDialog, setShowCustomerDialog] = React.useState(false);
  const customer = useSelector(selectSelectedCustomer);
  console.log("selected customer", customer)

  return (
    <div className='p-4 border-b'>
      <h2 className='text-lg font-semibold mb-2 flex items-center'>
        <User className='w-5 h-5 mr-2'></User>Customer
      </h2>
      {
        customer ? (
          <Card className={"border-green-400 bg-green-50 dark:bg-green-950 dark:border-b-green-800"}>
            <CardContent className={"p-3 flex items-center justify-between gap-5"}>

              <div>
                <h3 className='font-medium text-green-800 dark:text-green-200'>{customer.fullName}</h3>
                <p className='text-sm text-green-600 dark:text-green-300'>
                  {customer.phone}
                </p>

              </div>
              <div>
                <Button
                  onClick={() => setShowCustomerDialog(true)}
                  variant={'outline'} className={"mt-2 w-full"} ><Edit></Edit></Button>
              </div>

            </CardContent>


          </Card>
        ) : (<div>
          {/* <p className='text-sm text-muted-foreground'>
            No Customer selected.Please select a customer to proceed.
          </p> */}
          <Button onClick={() => setShowCustomerDialog(true)} variant={"outline"} className={"w-full py-5"}>Select Customer</Button>

        </div>)
      }
      <CustomerDialog
        showCustomerDialog={showCustomerDialog}
        setShowCustomerDialog={setShowCustomerDialog}>

      </CustomerDialog>

    </div>
  );
};

export default CustomerSection;