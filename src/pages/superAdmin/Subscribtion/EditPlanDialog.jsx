import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Formik } from 'formik';
import React from 'react';
import PlanForm from './PlanForm';

const EditPlanDialog = ({ open, onOpenChange, onSuccess }) => {
  const initialValues = {
    name: 'plan 2',
    description: 'for new business',
    price: 499,
    billingCycle: 'monthly',
    maxBranches: 5,
    maxUsers: 10,
    maxProducts: 100,
    enableAdvancedReports: false,
    enableInventory: false,
    enableIntegrations: false,
    enableEcommerce: false,
    enableInvoiceBranding: false,
    prioritySupport: false,
    enableMultiLocation: false,
    extraFeatures: ['intregate api', "manage inventory"],
  };
  const handleSubmit = (values) => {
    console.log("handle update", values)
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Subscription Plan</DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[65vh] pr-5">


          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {/* <PlanForm setFieldValue={} /> */}
            {(props) => <PlanForm {...props} />}

          </Formik>

        </div>
      </DialogContent>

    </Dialog>
  );
};

export default EditPlanDialog;