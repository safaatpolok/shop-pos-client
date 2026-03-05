import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useDispatch, useSelector } from 'react-redux';

import { getRecentOrdersByBranch } from '@/Redux Toolkit/features/Order/orderThunk';



// const orders = [
//   {
//     id: 1,
//     createdAt: "Jul 4,2025,12:35PM",
//     customer: {
//       fullName: "PAblo Pikasp",
//       phone: "1234566"
//     },
//     totalAmount: 2499,
//     paymentType: "CASH",
//     status: "COMPLETED",
//     items: [
//       {
//         id: 2,
//         product: {
//           image: "",
//           name: "men black t-shirt",
//           sellingPrice: 499,
//           sku: "SHIRT-S-COTTON "

//         },
//         quantity: 2,
//       }

//     ]
//   },
//   {
//     id: 1,
//     createdAt: "Jul 4,2025,12:35PM",
//     customer: {
//       fullName: "PAblo Pikasp",
//       phone: "1234566"
//     },
//     totalAmount: 2499,
//     paymentType: "CASH",
//     status: "COMPLETED",
//     items: [
//       {
//         id: 2,
//         product: {
//           image: "",
//           name: "men black t-shirt",
//           sellingPrice: 499,
//           sku: "SHIRT-S-COTTON "

//         },
//         quantity: 2,
//       }

//     ]
//   }

// ]
const RecentOrders = () => {

  const { recentOrders } = useSelector(state => state.order)
  const { branch } = useSelector((state) => state.branch);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecentOrdersByBranch(branch?.id));
  }, [branch]);


  return (
    <Card>

      <CardHeader>
        <CardTitle className="text-2xl font-bold mb-4">Recent Orders</CardTitle>

      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Order ID </TableHead>

              <TableHead className="">Customer </TableHead>
              <TableHead className="">Amount</TableHead>

              <TableHead className="">Status</TableHead>
              <TableHead className="text-right">Date/Time </TableHead>


            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>

                <TableCell>{order.customer?.fullName}</TableCell>
                <TableCell>${order.totalAmount}</TableCell>
                <TableCell>{order.paymentType}</TableCell>
                <TableCell className={"text-right"}>{order.createdAt}</TableCell>


              </TableRow>
            ))}


          </TableBody>
        </Table>

      </CardContent>
    </Card>
  );
};

export default RecentOrders;

