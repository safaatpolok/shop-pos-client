import React, { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const Products = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          Product Management
        </h1>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>

          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
            </DialogHeader>
            <div >
              <ProductForm onCancel={() => setIsAddDialogOpen(false)} />
            </div>


          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardContent>
          <ProductTable onEdit={(product) => {
            setSelectedProduct(product);
            setIsEditDialogOpen(true)
          }}
          />
        </CardContent>
      </Card>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>


        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>

          <ProductForm
            initialValues={selectedProduct}
            isEditing={true}
            onSubmit={() => setIsEditDialogOpen(false)}
            onCancel={() => setIsEditDialogOpen(false)} />
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Products;
