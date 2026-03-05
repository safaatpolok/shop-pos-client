import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { getCategoriesByStore } from '@/Redux Toolkit/features/Category/categoryThunk';
import { createProduct, updateProduct } from '@/Redux Toolkit/features/Product/productThunk';
import { Field, Form, Formik } from 'formik';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

const loading = false;



const ProductForm = ({
  initialValues,
  onSubmit,
  onCancel,
  isEditing = false,
}) => {


  const { store } = useSelector(state => state.store)
  const { categories } = useSelector((state) => state.category);

  const defaultValues = {

    name: "",
    sku: "",
    description: "",
    mrp: "",
    sellingPrice: "",
    brand: "",
    categpryId: "",
    color: "",
    image: "",
    ...initialValues,

  };

  const dispatch = useDispatch();



  const handleSubmit = async (values) => {  //{ setSubmitting, resetForm })
    console.log("values", values);
    const dto = {
      ...values,
      mrp: parseFloat(values.mrp),
      sellingPrice: parseFloat(values.sellingPrice),
      storeId: store.id,
      cagegoryId: parseInt(values.cagegoryId)
    };
    if (isEditing && initialValues?.id) {
      dispatch(updateProduct({ id: initialValues.id, dto }));
    } else {
      dispatch(createProduct(dto));
    }

    onSubmit();
  }
  useEffect(() => {
    if (store?.id) {
      dispatch(getCategoriesByStore({ storeId: store.id }))
    }
  }, [store]);


  return (
    <Formik initialValues={defaultValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >

      {({ isSubmitting, setFiledValue }) => (

        <Form className='space-y-4 py-2 pr-2'>
          <div className="space-y-2">
            <label htmlFor="name" className='block text-sm font-medium'>
              Product Name
            </label>
            <Field
              as={Input}
              id="name"
              name="name"
              placeholder="enter product name"

            />
          </div>

          <div className='space-y-2'>
            <label htmlFor="sku" className='block text-sm font-medium'>
              SKU
            </label>

            <Field
              as={Input}
              id="sku"
              name="sku"
              placeholder="Enter SKU"

            />
          </div>

          <div className='space-y-2'>
            <label htmlFor="brand" className='block text-sm font-medium'>
              Brand
            </label>
            <Field
              as={Input}
              id="brand"
              name="brand"
              placeholder="Enter brand"
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor="categoryId" className='block text-sm font-medium'>
              Category
            </label>
            <Field name="categoryId">
              {({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => setFiledValue("categoryId", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id.toString()}
                      >
                        {category.name}

                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </Field>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label htmlFor="mrp" className='block text-sm font-medium'>
                MRP
              </label>
              <Field
                as={Input}
                id="mrp"
                name="mrp"
                type="0.01"
                min="0"
                placeholder="0.00"

              />

            </div>
            <div className='space-y-2'>
              <label htmlFor="sellingPrice" className='block text-sm font-medium'>
                Selling Price
              </label>
              <Field
                as={Input}
                id="sellingPrice"
                name="sellingPrice"
                type="number"
                min="0"
                placeholder="0.00"

              />
            </div>

          </div>

          <div className='space-y-2'>
            <label htmlFor="color" className='block text-sm font-medium'>
              Color
            </label>
            <Field
              as={Input}
              id="color"
              name="color"

              placeholder="Enter color"

            />
          </div>
          <div className='space-y-2'>
            <label htmlFor="image" className='block text-sm font-medium'>
              Image
            </label>
            <Field
              as={Input}
              id="image"
              name="image"

              placeholder="Past image URL"

            />
          </div>
          <div className='space-y-2'>
            <label htmlFor="description" className='block text-sm font-medium'>
              Description
            </label>
            <Field
              as={Textarea}
              id="description"
              name="description"

              placeholder="Enter product description"
              rows={3}

            />
          </div>

          <div className='flex justify-end gap-3 pt-4'>
            {
              onCancel && (
                <Button type="button" variant='outline' onClick={onCancel}>

                  Cancel

                </Button>
              )}
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={isSubmitting || loading}
            >{
                isEditing ? (
                  "Update Product"
                ) : (
                  "Add Product"
                )
              }

            </Button>

          </div>



        </Form>
      )


      }


    </Formik>
  );
};

export default ProductForm;