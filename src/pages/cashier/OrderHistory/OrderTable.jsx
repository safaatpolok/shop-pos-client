import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { EyeIcon, Printer } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersByCashier } from '@/Redux Toolkit/features/Order/orderThunk';


// const orders = [
//   {
//     id: 1,
//     createdAt: "",
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
const OrderTable = ({ handleViewOrderDetails }) => {
  const { orders } = useSelector(state => state.order)
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.user)
  useEffect(() => {
    if (userProfile?.id) {
      dispatch(getOrdersByCashier(userProfile.id))
    }
  }, [userProfile])


  return (
    <div>

      <h2 className='text-xl font-semibold mb-4'>Recent Orders</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Order ID </TableHead>
            <TableHead className="w-[150px]">Date/Time </TableHead>
            <TableHead className="w-[150px]">Customer </TableHead>
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
                <div className='flex justify-end gap-2'>
                  <Button onClick={
                    () => handleViewOrderDetails(order)
                  } variant={"ghost"} size={"icon"}>
                    <EyeIcon className='h-4 w-4' />


                  </Button>
                  <Button variant={"ghost"} size={"icon"}>
                    <Printer className='h-4 w-4'>

                    </Printer>
                  </Button>

                </div></TableCell>


            </TableRow>
          ))}


        </TableBody>
      </Table>

    </div>
  );
};

export default OrderTable;

