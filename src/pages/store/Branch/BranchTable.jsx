import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Delete, Edit, Trash } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBranchesByStore } from '@/Redux Toolkit/features/Branch/branchThunk';



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
//   }

// ];
const BranchTable = ({ onEdit }) => {

  const dispatch = useDispatch();
  const { store } = useSelector((state) => state.store)
  const { branches } = useSelector((state) => state.branch)

  useEffect(() => {
    if (store?.id) {
      dispatch(getAllBranchesByStore({ id: store.id }))
    }

  }, [store?.id, dispatch])


  return (
    <div>



      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Branch Name </TableHead>
            <TableHead className="">Address </TableHead>
            <TableHead className="">Manager </TableHead>
            <TableHead className="">Phone</TableHead>

            <TableHead className="text-right">Action</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {branches.map((branch) => (
            <TableRow key={branch.id}>
              <TableCell>{branch.name}</TableCell>
              <TableCell>{branch.manager?.fullName}</TableCell>
              <TableCell>{branch.manager?.phone}</TableCell>


              <TableCell className="text-right ">

                <div children="flex gap-2 items-center justify-end">
                  <Button variant={"outline"}
                    onClick={
                      () => onEdit(branch)

                    }>
                    <Edit />
                  </Button>

                  <Button variant={"outline"}
                    onClick={
                      () => () => onEdit(branch)

                    }>
                    <Trash />
                  </Button>

                </div>



              </TableCell>
            </TableRow>
          ))}


        </TableBody>
      </Table>

    </div>
  );
};

export default BranchTable;

