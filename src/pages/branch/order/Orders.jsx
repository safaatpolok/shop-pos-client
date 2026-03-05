import { Button } from '@/components/ui/button';
import { Download, Eye, RefreshCw } from 'lucide-react';
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import OrderDetails from '@/pages/cashier/OrderHistory/OrderDetails/OrderDetails';
import HeldOrderDialog from '@/pages/cashier/CartSection/HeldOrderDialog';

const orders = [
  {
    id: 1,
    createdAt: "Jul 4,2025,12:35PM",
    customer: {
      fullName: "PAblo Pikasp",
      phone: "1234566"
    },
    cashierId: 45,
    totalAmount: 2499,
    paymentType: "CASH",
    status: "COMPLETED",
    items: [
      {
        id: 2,
        product: {
          image: "",
          name: "men black t-shirt",
          sellingPrice: 499,
          sku: "SHIRT-S-COTTON "

        },
        quantity: 2,
      }

    ]
  }

];

const Orders = () => {

  const [showOrderInvoiceDialog, setShowOrderInvoiceDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order)
    setShowOrderInvoiceDialog(true);
  };

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl tracking-tight'>Orders</h1>
        <Button className={"gap-2"} variant={"outline"}>
          <RefreshCw></RefreshCw>
          Refresh
        </Button>
      </div>
      <div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Order ID </TableHead>
              <TableHead className="">Date/Time </TableHead>
              <TableHead className="">Customer </TableHead>
              <TableHead className="">Cashier </TableHead>
              <TableHead className="">Amount</TableHead>
              <TableHead className="">Payment Type</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="text-right">Action</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
                <TableCell>{order.customer?.fullName}</TableCell>
                <TableCell>{order.cashierId}</TableCell>
                <TableCell>{order.totalAmount}</TableCell>
                <TableCell>{order.paymentType}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell className="text-right">

                  <Button onClick={() =>

                    handleViewOrderDetails(order)

                  }>

                    <Eye />

                  </Button>

                </TableCell>
              </TableRow>
            ))}


          </TableBody>
        </Table>
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
              <Download ></Download>
              Download PDF
            </Button>
          </DialogFooter>


        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Orders;