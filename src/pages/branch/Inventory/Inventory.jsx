import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import InventoryFormDialog from './InventoryFormDialog';
import InventoryTable from './InventoryTable';
import { useDispatch, useSelector } from 'react-redux';
import { getDailySalesChart } from '@/Redux Toolkit/features/Branch Analytics/BranchAnalyticsThunk';
import { getInventoryByBranch } from '@/Redux Toolkit/features/Inventory/inventoryThunk';
import { getProductsByStore } from '@/Redux Toolkit/features/Product/productThunk';


const Inventory = () => {

  const [selectedProductId, setSelectedProductId] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editInventory, setEditEnventory] = useState(null);

  const handleAddInventory = () => {
    console.log(selectedProductId, quantity)
  }

  const { branch } = useSelector((state) => state.branch);
  const analytics = useSelector(state => state.branchAnalytics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInventoryByBranch(branch?.id))
    dispatch(getProductsByStore(branch?.storeId))

  }, [branch]);
  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold tracking-tight'>Inventory Management</h1>


        <div className='flex gap-2'>
          <Button onClick={() => setIsAddDialogOpen(true)} className="gap-2"><Plus />
            Add Inventory
          </Button>

        </div>


      </div>

      <InventoryTable setEditEnventory={setEditEnventory} setIsEditDialogOpen={setIsAddDialogOpen}></InventoryTable>


      <InventoryFormDialog open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        mode="add"

      />

      <InventoryFormDialog open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        mode="edit"
        editInventory={editInventory}

      />
    </div>
  );
};

export default Inventory;