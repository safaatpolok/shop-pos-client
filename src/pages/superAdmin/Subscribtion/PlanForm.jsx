import { Input } from '@/components/ui/input';
import { Field, Form } from 'formik';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import FeatureSwitchGrid from './FeatureSwitchGrid';
import ExtraFeatureList from './ExtrafeatureList';
import { Button } from '@/components/ui/button';

const BILLING_CYCLES = [
  { label: 'Monthly', value: 'MONTHLY' },
  { label: 'Yearly', value: 'YEARLY' }
];

const PlanForm = ({ values, isSubmitting, setFieldValue }) => {

  const handleFratureSwitch = (key, value) => {
    setFieldValue(key, value);
  };

  const handleExtraFeatureChange = (idx, value) => {
    const arr = [...values.extraFeatures];
    arr[idx] = value;
    setFieldValue("extraFeatures", arr);
  };

  const handleRemoveExtraFeature = (idx, value) => {
    console.log("new arr", value)
    const arr = values.extraFeatures.filter((_, i) => i !== idx);
    setFieldValue("extraFeatures", arr.length ? arr : [""]);
    console.log("new arr", arr)

  };

  const handleAddExtraFeatures = () => {
    setFieldValue("extraFeatures", [...values.extraFeatures, ""]);
  };

  return (
    <Form className="space-y-4">

      <div>
        <label htmlFor="plan-name" className='block font-medium'>Name</label>
        <Field as={Input} name="name" placeholder="plan name..." />
      </div>

      <div>
        <label className='block font-medium' htmlFor="plan-description">
          Description
        </label>
        <Field
          as={Input}
          id="plan-description"
          name="description"
          placeholder="Description"
        />
      </div>

      <div className='flex gap-4'>
        <div className='flex-1'>
          <label className='block font-medium' htmlFor="plan-price">
            Price($)
          </label>
          <Field
            as={Input}
            id="plan-price"
            name="price"
            type="number"
            min="0"
            placeholder="Price"
          />
        </div>

        <div className='flex-1'>
          <label
            className='block font-medium'
            htmlFor="plan-billing-cycle"
          >
            Billing Cycle
          </label>

          <Field name="billingCycle">
            {({ field }) => (
              <Select
                value={field.value}
                onValueChange={(val) =>
                  setFieldValue("billingCycle", val)
                }
              >
                <SelectTrigger
                  className="w-full"
                  id="plan-billing-cycle"
                >
                  <SelectValue placeholder="Select cycle" />
                </SelectTrigger>

                <SelectContent>
                  {BILLING_CYCLES.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </Field>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex-1'>
          <label className='block font-medium' htmlFor="plan-branches">
            Branches
          </label>
          <Field
            as={Input}
            id="plan-branches"
            name="maxBranches"
            type="number"
            min="1"
            placeholder="Branches"
          />
        </div>

        <div className='flex-1'>
          <label className='block font-medium' htmlFor="plan-users">
            Users
          </label>
          <Field
            as={Input}
            id="plan-users"
            name="maxUsers"
            type="number"
            min="1"
            placeholder="Users"
          />
        </div>

        <div className='flex-1'>
          <label className='block font-medium' htmlFor="plan-products">
            Products
          </label>
          <Field
            as={Input}
            id="plan-products"
            name="maxProducts"
            type="number"
            min="1"
            placeholder="Products"
          />
        </div>
      </div>

      <div>
        <label className='block font-medium mb-2'>Features</label>
        <FeatureSwitchGrid handleFratureSwitch={handleFratureSwitch} />
      </div>

      <div>
        <label className='block font-medium mb-1'>Extra Features</label>
        <ExtraFeatureList
          values={values}
          handleExtraFeatureChange={handleExtraFeatureChange}
          handleRemoveExtraFeature={handleRemoveExtraFeature}
          handleAddExtraFeatures={handleAddExtraFeatures}
        />
      </div>

      <div>
        <Button type={"submit"} >Submit</Button>
      </div>

    </Form>
  );
};

export default PlanForm;