import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import { resetOrder, selectCartItems, selectNote, selectSelectedCustomer, selectTotal } from '@/Redux Toolkit/features/Cart/CartSlice';
import { createOrder } from '@/Redux Toolkit/features/Order/orderThunk';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const paymentMethods = [
  { id: 1, name: "Card", key: "CARD" },
  { id: 2, name: "bkash", key: "bkash" },
  { id: 3, name: "Cash", key: "Cash" },
];

const PaymentDialog = ({ showPaymentDialog, setShowPaymentDialog }) => {

  const [paymentMethod, setPaymentMethod] = React.useState("CARD");

  const dispatch = useDispatch();
  const totalAmount = useSelector(selectTotal);
  const { branch } = useSelector(state => state.branch);
  const { user } = useSelector(state => state);
  const selectedCustomer = useSelector(selectSelectedCustomer);
  const cart = useSelector(selectCartItems) || [];
  const note = useSelector(selectNote);

  const handleCreate = async () => {

    if (cart.length == 0) {
      toast("please add item to cart before processing payment");
      return;
    }

    if (!selectedCustomer) {
      console.log("select customer");
      return;
    }

    try {

      const orderData = {
        totalAmount,
        branchId: branch?.id,
        cashierId: user.userProfile?.id,
        customer: selectedCustomer,
        items: cart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity
        })),
        paymentType: paymentMethod,
        note
      };

      console.log("order data", orderData);

      await dispatch(createOrder(orderData)).unwrap();

      dispatch(resetOrder());

    } catch (error) {

      console.log("error", error);

    }
  };


  return (
    <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
      <DialogContent>

        <DialogHeader>
          <DialogTitle>
            Payment
          </DialogTitle>
        </DialogHeader>

        <div className='space-y-4'>

          <div className='text-center'>
            <h1>{totalAmount}$</h1>
            <p className='text-sm text-muted-forground'>
              Amount to be paid
            </p>
          </div>

          <div>
            {paymentMethods.map((method) => (
              <Button
                onClick={() => setPaymentMethod(method.key)}
                variant={paymentMethod === method.key ? "default" : "outline"}
                key={method.id}
                className={"w-full text-left"}
              >
                {method.name}
              </Button>
            ))}
          </div>

        </div>

        <DialogFooter>
          <Button onClick={handleCreate}>
            Finished Order
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;