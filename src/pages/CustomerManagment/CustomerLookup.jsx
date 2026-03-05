import React from 'react';
import PurchaseHistory from './PurchaseHistory';
import CustomerSearch from './CustomerSearch';
import CustomerList from './CustomerList';
import CustomerDetails from './CustomerDetails';
import { UserIcon } from 'lucide-react';

const CustomerLookup = () => {
  const [selectedCustomer, setSelectedCustomer] = React.useState(null);

  return (
    <div className='h-full flex flex-col'>
      <div className='p-4 bg-card border-b'>
        <h1 className='text-2xl font-bold'>Customer Managment  </h1>

      </div>
      <div className='flex-1 flex overflow-hidden'>


        <div className='w-1/3 border-r flex flex-col'>

          <CustomerSearch></CustomerSearch>
          <CustomerList setSelectedCustomer={setSelectedCustomer}></CustomerList>

        </div>
        {selectedCustomer ? (

          <div className='w-2/3 flex flex-col overflow-y-auto'>
            <CustomerDetails customer={selectedCustomer}></CustomerDetails>
            <PurchaseHistory customer={selectedCustomer}></PurchaseHistory>

          </div>) : (<div className=' w-2/3 h-[99vh] flex flex-col items-center justify-center   text-muted-foreground'>
            <UserIcon className='h-4 w-4 mr-1'></UserIcon>

            <p className=''>No customer selected</p>

          </div>)}




      </div>

    </div>
  );
};

export default CustomerLookup;