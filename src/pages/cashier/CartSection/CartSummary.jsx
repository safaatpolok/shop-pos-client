import { Separator } from '@/components/ui/separator';
import { selectSubtotal, selectTax, selectTotal } from '@/Redux Toolkit/features/Cart/CartSlice';
import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
  const subtotal = useSelector(selectSubtotal)
  const tax = useSelector(selectTax)
  const total = useSelector(selectTotal)
  return (
    <div className='border-t bg-muted p-4'>

      <div className='sapace-y-2  text-sm'>

        <div className='flex justify-between'>
          <span>Subtotal</span>
          <span>${subtotal}</span>

        </div>
        <div className='flex justify-between'>
          <span>Tax</span>
          <span>${tax}</span>

        </div>
        <Separator></Separator>
        <div className='flex justify-between'>
          <span>Total</span>
          <span>${total}</span>

        </div>
      </div>

    </div>
  );
};

export default CartSummary;