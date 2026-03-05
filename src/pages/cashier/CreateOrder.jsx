import React from 'react';
import Production from './ProductSection/ProductSection';
import CartSection from './CartSection/CartSection';
import CustomerPaymentSection from './CustomerPaymentSection/CustomerPaymentSection';
import POSHeader from './Header/POSHeader';
import HeldOrderDialog from './CartSection/HeldOrderDialog';

const CreateOrder = () => {
  return (
    <div className='h-full flex flex-col bg-background '>
      <POSHeader></POSHeader>
      <div className='flex-1 flex overflow-hidden ' >
        <Production></Production>
        <CartSection></CartSection>
        <CustomerPaymentSection></CustomerPaymentSection>
      </div>
      <HeldOrderDialog></HeldOrderDialog>

    </div>
  );
};

export default CreateOrder;