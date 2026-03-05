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

import CategoryForm from './CategoryForm';
import CategoryTable from './CategoryTable';

const Categories = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          Category Management
        </h1>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Category</DialogTitle>
            </DialogHeader>

            <CategoryForm
              onCancel={() => setIsAddDialogOpen(false)}
              onSubmit={() => setIsAddDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardContent>
          <CategoryTable onEdit={(category) => {
            setIsEditDialogOpen(true);
            setSelectedCategory(category);
            console.log("category", category)
          }}
          />
        </CardContent>
      </Card>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>


        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
          </DialogHeader>

          <CategoryForm isEditing={true}
            onCancel={() => setIsEditDialogOpen(false)}
            onSubmit={() => setIsEditDialogOpen(false)}
            initialValues={selectedCategory}


          />
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Categories;
