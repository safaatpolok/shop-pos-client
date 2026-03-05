import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';



const orders = [
  {
    id: 1,
    createdAt: "Jul 4,2025,12:35PM",
    customer: {
      fullName: "PAblo Pikasp",
      phone: "1234566"
    },
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

]
const OrderTable = ({ handleSelectOrder }) => {


  return (
    <div>



      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Order ID </TableHead>
            <TableHead className="">Date/Time </TableHead>
            <TableHead className="">Customer </TableHead>
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
              <TableCell>{order.totalAmount}</TableCell>
              <TableCell>{order.paymentType}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell className="text-right">

                <Button onClick={

                  () => handleSelectOrder(order)

                }>
                  select for return


                </Button>

              </TableCell>
            </TableRow>
          ))}


        </TableBody>
      </Table>

    </div>
  );
};

export default OrderTable;

