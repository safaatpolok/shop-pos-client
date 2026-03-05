import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Delete, Edit, Trash } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByStore } from '@/Redux Toolkit/features/Product/productThunk';



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

// ]
const ProductTable = ({ onEdit }) => {

  const { products } = useSelector(state => state.product)
  const { store } = useSelector(state => state.store)
  const dispatch = useDispatch();
  useEffect(() => {
    if (store?.id) {
      dispatch(() => getProductsByStore(store.id))
    }

  }, [store])


  return (
    <div>



      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Image</TableHead>
            <TableHead className="">Product </TableHead>
            <TableHead className="">Category</TableHead>
            <TableHead className="">Price</TableHead>


            <TableHead className="text-right">Action</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <img className='w-10 h-10' src={product.image} alt="" />
              </TableCell>
              <TableCell>{product.name}</TableCell>

              <TableCell>{product.customer?.name}</TableCell>
              <TableCell>{product.sellingPrice}</TableCell>


              <TableCell className="text-right ">

                <div children="flex gap-2 items-center justify-end">
                  <Button variant={"outline"}
                    onClick={
                      () => onEdit(product)

                    }>
                    <Edit />
                  </Button>

                  <Button variant={"outline"}
                    onClick={
                      () => () => onEdit(order)

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

export default ProductTable;

