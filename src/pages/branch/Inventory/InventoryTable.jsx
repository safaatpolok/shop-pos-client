import React from 'react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import { useSelector } from 'react-redux';

// const inventories = [{
//   name: " white men shirt",
//   quantity: 34,
//   category: "shirt",
//   sku: "SHIRT-MEN-WHITE",
// },
// ];

const InventoryTable = ({ setIsEditDialogOpen, setEditInventory }) => {
  const { inventories } = useSelector(state => state.inventory)
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">SKU</TableHead>
          <TableHead className="">Product Name </TableHead>
          <TableHead className="">Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Action</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {inventories.map((item) => (

          <TableRow key={item.id}>
            <TableCell>
              {item?.product?.sku}
            </TableCell>
            <TableCell>
              {item?.product?.name}
            </TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell className="text-right">{item?.product?.category}</TableCell>
            <TableCell className="text-right">
              <Button onClick={() => {
                setIsEditDialogOpen(true)
                setEditInventory(item)
              }

              } variant={"outline"} size={"icon"}>

                <Edit />
              </Button></TableCell>


          </TableRow>
        ))}


      </TableBody>
    </Table>
  );
};

export default InventoryTable;