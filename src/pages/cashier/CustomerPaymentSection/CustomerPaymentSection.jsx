import React from 'react';
import CustomerSection from './CustomerSection';
import DiscountSection from './DiscountSection';
import NoteSection from './NoteSection';
import PaymentSection from './PaymentSection';

const CustomerPaymentSection = () => {
  return (
    <div className='w-1/5 flex flex-col'>
      <CustomerSection></CustomerSection>
      <DiscountSection> </DiscountSection>
      <NoteSection></NoteSection>
      <PaymentSection></PaymentSection>
    </div>
  );
};

export default CustomerPaymentSection;