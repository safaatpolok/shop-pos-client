import { Switch } from '@/components/ui/switch';
import { Field } from 'formik';
import React from 'react';

const FEATURE_FIELDS = [
  { key: 'enableAdvantacedReports', label: 'Advanced Reports' },
  { key: 'enableInventory', label: 'Inventory System' },
  { key: 'enableIntregrations', label: 'Intregrations' },
  { key: 'enableEcommerce', label: 'eCommerce' },
  { key: 'enableInvouceBranding', label: 'Invoice Branding' },
  { key: 'prioritySupport', label: 'Priority support' },
  { key: 'enableMultiLocation', label: 'Multi-location' },
];

const FeatureSwitchGrid = ({ handleFratureSwitch }) => {
  return (
    <div className='grid grid-cols-2 gap-2'>

      {
        FEATURE_FIELDS.map((item) => <label>
          <Field name={item.key} type="checkbox">

            {({ field }) => <Switch checked={field.value}
              onCheckedChange={(val) =>
                handleFratureSwitch(item.key, val)} />}

          </Field>
          <span>{item.label}</span>
        </label>)
      }

    </div>
  );
};

export default FeatureSwitchGrid;