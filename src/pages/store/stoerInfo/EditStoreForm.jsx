import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { updateStore } from '@/Redux Toolkit/features/Store/stoteThunk';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const loading = false;

const STORE_TYPE_OPTIONS = [
  { value: "Retail Store", label: "Retail Store" },
  { value: "Supermarket", label: "Supermarket" },
  { value: "Mall", label: "Mall" },
  { value: "Department Store", label: "Department Store" },
  { value: "Convenience Store", label: "Convenience Store" },
  { value: "Specialty Store", label: "Specialty Store" },
];


const EditStoreForm = ({
  initialValues,
  onSubmit,
  onCancel,

}) => {


  const dispatch = useDispatch();
  const { store } = useSelector((state) => state.store)

  const handleSubmit = async (values) => {
    console.log("values", values);
    dispatch(updateStore({ id: store.id, storeData: values }));
    onSubmit();
  }


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >

      {({ isSubmitting, setFiledValue }) => (

        <Form className='space-y-4 py-2 pr-2'>
          <div className="space-y-2">
            <Label htmlFor="brand" className='block text-sm font-medium'>
              Store  Name
            </Label>
            <Field
              as={Input}
              id="brand"
              name="brand"
              placeholder="enter store name"

            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor="storeType" className='block text-sm font-medium'>
              Store Type
            </Label>

            <Field name="storeType">
              {({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => setFiledValue("storeType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Store Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {STORE_TYPE_OPTIONS.map((type) => (
                      <SelectItem
                        key={type.label}
                        value={type.value}
                      >
                        {type.label}

                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </Field>
          </div>

          <div className='space-y-2'>
            <label htmlFor="description" className='block text-sm font-medium'>
              Description
            </label>
            <Field
              as={Input}
              id="description"
              name="description"
              placeholder="Enter description"
            />
          </div>


          <div className=''>
            <h1 className='text-lg font-medium mb-4'>Contact Information</h1>
            <div className='space-y-4'>
              <div>
                < Label className='block text-sm font-medium'>
                  Address
                </Label>
                <Field
                  as={Textarea}
                  id="mrp"
                  name="mrp"
                  type="0.01"
                  min="0"
                  placeholder="0.00"

                />

              </div>

              <div>
                <Label htmlFor="contact.phone"> Phone Number</Label>
                <Field
                  as={Input}
                  id="contact.phone"
                  name="contact.phone"
                  placeholder="Enter phone Number"

                />
              </div>

              <div>
                <Label htmlFor="contact.email">Email Address</Label>
                <Field
                  as={Input}
                  id="contact.email"
                  name="contact.email"
                  placeholder="Enter email address"
                />
              </div>
            </div>
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
            >Update Store Details

            </Button>

          </div>



        </Form>
      )


      }


    </Formik>
  );
};

export default EditStoreForm;