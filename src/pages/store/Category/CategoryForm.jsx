import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createCategory, updateCategory } from '@/Redux Toolkit/features/Category/categoryThunk';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const loading = false;

const CategoryForm = ({ onCancel, initialValues, isEditing }) => {
  const { store } = useSelector(state => state.store)
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    // onSubmit();
    console.log("values", values);
    const dto = {
      ...values,
      storeId: store.id
    }
    if (isEditing) {
      dispatch(updateCategory({ id: initialValues.id, dto }))
    } else {
      dispatch(createCategory({ dto }))
    }

  };
  console.log("initial values", initialValues)
  return (
    <Formik initialValues={
      initialValues || {
        name: "",
        description: "",
      }}
      onSubmit={handleSubmit}
    >

      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div className='space-y-2'>
            <Label>Category Name</Label>
            <Field as={Input} name="name" placeholder="Enter category name" />
          </div>

          <div className='space-y-2'>
            <label htmlFor="description">Description</label>
            <Field
              as={Input}
              id="description"
              name="description"
              placeholder="Enter description"
            />
          </div>






          <div className='flex justify-end gap-2 pt-4'>
            <Button type="button" variant='outline' onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" >

              {isSubmitting || loading
                ? isEditing
                  ? "Updating .."
                  : "Adding.."
                : isEditing
                  ? "Update Category"
                  : "Add Category"}

            </Button>
          </div>

        </Form>


      )}

    </Formik>

  );
};

export default CategoryForm;