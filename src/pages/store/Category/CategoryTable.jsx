import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Delete, Edit, Trash } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, getCategoriesByStore } from '@/Redux Toolkit/features/Category/categoryThunk';



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
const CategoryTable = ({ onEdit }) => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const { store } = useSelector((state) => state.store)

  useEffect(() => {
    if (store?.id) {
      dispatch(getCategoriesByStore({ storeId: store.id }))
    }
  }, [store]);

  const handleDeleteCategory = (id) => {
    dispatch(deleteCategory({ id }))
  }


  return (
    <div>



      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">ID</TableHead>
            <TableHead className="">Category Name </TableHead>



            <TableHead className="text-right">Action</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>#{category.id}</TableCell>

              <TableCell>{category.name}</TableCell>

              <TableCell className="text-right ">

                <div children="flex gap-2 items-center justify-end">
                  <Button variant={"outline"}
                    onClick={
                      () => onEdit(category)

                    }>
                    <Edit />
                  </Button>

                  <Button variant={"outline"}
                    onClick={
                      () => handleDeleteCategory(category.id)
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

export default CategoryTable;

