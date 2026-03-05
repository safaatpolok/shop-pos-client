import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit } from 'lucide-react';
import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EditStoreForm from './EditStoreForm';
import { getInitialValues } from './formUtil';
import { useSelector } from 'react-redux';
// const storeData =  {
//   brand: "Rutika Shoppping",
//   description: "shopp in minute",
//   storeType: "Retail Store ",
//   contact: {
//     phone: "+123 4567890",
//     address: "street 1 2 4,surat,new rutike shopping mall",
//     email: "rutika@shopping.com"


//   }
// }

const StoreInfo = () => {
  const [isOpenEditStoreDialog, setIsOpenEditStoreDialog] = useState(false);
  const { store } = useSelector((state) => state.store)

  const onSubmit = () => {
    setIsOpenEditStoreDialog(false)
  }
  const onCancel = () => {
    setIsOpenEditStoreDialog(false)
  }
  return (

    <>
      <Card>
        <CardHeader>
          <div className='flex justify-between items-center'>
            <CardTitle >Store Information</CardTitle>
            <Button onClick={() => setIsOpenEditStoreDialog(true)} variant={"outline"} size='sm'>
              {" "}
              <Edit /> eddit details

            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <BasicInfo storeData={store} />
            <ContactInfo storeData={store} />


          </div>
          <div className='mt-4 pt-3 border-t border-gray-200'>
            <p className='text-sm text-muted-foreground'>
              Store created on {new Date().toLocaleString()}</p>

          </div>
        </CardContent>
      </Card>
      <Dialog open={isOpenEditStoreDialog}
        onOpenChange={setIsOpenEditStoreDialog}
      >
        <DialogContent className={"sm:max-w-[600px] mx-h-[90vh] overflow-auto"}>
          <DialogHeader>
            <DialogTitle>Edit Store Details</DialogTitle>
          </DialogHeader>
          <EditStoreForm onSubmit={onSubmit} onCancel={onCancel} initialValues={getInitialValues(store)} />
        </DialogContent>

      </Dialog>
    </>
  );
};

export default StoreInfo;