import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import React from 'react';

const ExtraFeatureList = ({
  values,
  handleExtraFeatureChange,
  handleRemoveExtraFeature,
  handleAddExtraFeatures
}) => {
  return (
    <div className='space-y-5'>
      {values.extraFeatures.map((feature, idx) => (
        <div className='flex items-center gap2 spaxe-y-2' key={idx}>
          <Input
            value={feature}
            placeholder="Extra Feature..."
            onChange={(e) =>
              handleExtraFeatureChange(idx, e.target.value)
            }
          />

          <Button
            type="button"
            disabled={values.extraFeatures.length === 1}
            variant="ghost"
            onClick={() => handleRemoveExtraFeature(idx, values)}
          >
            Remove
          </Button>
        </div>
      ))}

      <Button type="button" onClick={handleAddExtraFeatures}>
        <Plus /> Add Feature
      </Button>
    </div>
  );
};

export default ExtraFeatureList;