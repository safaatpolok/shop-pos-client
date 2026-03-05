import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { createInventory, updateInventory } from '@/Redux Toolkit/features/Inventory/inventoryThunk';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// const products = []

const InventoryFormDialog = ({ open, onOpenChange, mode, editInventory }) => {

  const isEdit = mode == "edit";

  const { products } = useSelector(state => state.product)
  const { branch } = useSelector((state) => state.branch);
  const analytics = useSelector(state => state.branchAnalytics)
  const dispatch = useDispatch();
  const [selectedProductId, setSelectedProductId] = useState({})
  const [quantity, setQuantity] = useState(1)

  const selectedProduct = {
    name: "men shirt"
  };
  const handleAddInventory = () => {
    const data = {
      branchId: branch?.id,
      productId: selectedProductId,
      quantity,
    }
    console.log("handle add inventory data", data);
    dispatch(createInventory(data))
  }
  const handleUpdateInventory = () => {

    const data = {
      id: editInventory.id,
      dto: {
        baranchId: branch?.id,
        productId: selectedProductId,
        quantity

      },
    };


    console.log("edit inventory", editInventory)
    dispatch(updateInventory(data))

  }
  const handleSubmit = () => {
    isEdit ? handleUpdateInventory() : handleAddInventory()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>

      <DialogContent>
        <DialogHeader>
          {isEdit ? "Edit Inventory" : "Add Inventory"}
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor="product">Product</label>
            {isEdit ? <Input
              id="product"
              value={editInventory?.product?.name}
              disabled
              className={"col-span-3"}


            /> : <Select value={selectedProductId}
              onValueChange={(value) => setSelectedProductId(value)}>

              <SelectTrigger className={"w-full col-span-3"}>
                <SelectValue placeholder="select product" />


              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"all"}>All Products</SelectItem>
                {products.map((product) => <SelectItem key={product.id} value={product.id}>{product.sku || product.name}</SelectItem>)}

              </SelectContent>

            </Select>}

          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor>Quantity</label>
            <Input
              type={"number"}
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={"col-span-3"}
            />

          </div>
        </div>

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}
            variant="outline">Cancel</Button>
          <Button onClick={handleSubmit}>{
            isEdit ? "Update Inventory" : "Add Inventory "}

          </Button>
        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
};

export default InventoryFormDialog;