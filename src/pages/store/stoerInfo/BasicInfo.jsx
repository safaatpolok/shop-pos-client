import { Label } from '@/components/ui/label';
import { Badge } from 'lucide-react';
import React from 'react';

const BasicInfo = ({ storeData }) => {
  return (
    <div>
      <h3 className='text-lg font-semibold mb-4'>Basic Information</h3>
      <div className="space-y-4">

        <div>
          <Label className={"text-sm text-muted-foreground"}>Store Name</Label>
          <p className='font-medium'>{storeData?.brand}</p>
        </div>

        <div>
          <Label className={"text-sm text-muted-foreground"}>Store type</Label>
          <Badge variant={"secondery"} className={'mt-1'}>{storeData?.storeType}</Badge>
        </div>

        <div>
          <Label className={"text-sm text-muted-foreground"}>Description</Label>
          <p className='font-medium'>{storeData?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;