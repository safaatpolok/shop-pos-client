


import React, { useEffect, useState } from 'react';
import OrderTable from './OrderTable';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
// import HeldOrderDialog from '../../CartSection/HeldOrderDialog';
import OrderDetails from './OrderDetails/OrderDetails';
import HeldOrderDialog from '../CartSection/HeldOrderDialog';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersByCashier } from '@/Redux Toolkit/features/Order/orderThunk';

const OrderHistory = () => {

  const [showOrderInvoiceDialog, setShowOrderInvoiceDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { userProfile } = useSelector(state => state.user)

  const dispatch = useDispatch();

  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order)
    setShowOrderInvoiceDialog(true);
  };
  useEffect(() => {
    if (userProfile?.id) {
      dispatch(getOrdersByCashier(userProfile.id))
    }


  }, [userProfile])
  return (
    <div className='h-full flex flex-col'>
      <div className='flex-1 p-4 overflow-auto'>
        <OrderTable handleViewOrderDetails={handleViewOrderDetails}>

        </OrderTable>

      </div>
      <Dialog open={showOrderInvoiceDialog} onOpenChange={setShowOrderInvoiceDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              Order-Invoice
            </DialogTitle>
          </DialogHeader>
          <OrderDetails selectedOrder={selectedOrder}></OrderDetails>

          <HeldOrderDialog ></HeldOrderDialog>

          <DialogFooter>
            <Button>
              <Download></Download>
              Download PDF
            </Button>
          </DialogFooter>


        </DialogContent>
      </Dialog>

    </div>
  );
};

export default OrderHistory;
