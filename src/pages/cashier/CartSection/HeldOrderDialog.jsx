import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { resumeOrder, selectHeldOrders } from '@/Redux Toolkit/features/Cart/CartSlice';
import { Play } from 'lucide-react';
// import { timeStamp } from 'node:console';
// import { Dialog } from 'radix-ui';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// const heldOrders = [
//   {
//     id: "34567",
//     items: [1, 1, 1, 1],
//     timeStamp: "2023-10-01T12:00:00Z"
//   },
//   {
//     id: "34567",
//     items: [1, 1, 1, 1],
//     timeStamp: "2023-10-01T12:00:00Z"
//   }
// ];

const HeldOrderDialog = ({ showHeldOrdersDialog, setShowHeldOrdersDialog }) => {
  const dispatch = useDispatch();
  const handleResumeOrder = (order) => {
    console.log("Resuming order:", order)
    dispatch(resumeOrder(order))

  }
  const heldOrders = useSelector(selectHeldOrders)
  return (
    <Dialog open={showHeldOrdersDialog} onOpenChange={setShowHeldOrdersDialog}>
      <DialogContent>
        <DialogHeader>Held Order</DialogHeader>

        <div className='space-y-3'>
          {heldOrders.map((order) => (
            <Card key={order.id}>
              <CardContent>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='font-medium'>#Order ID:{order.id}</h3>
                    <p className='text-sm text-muted-foreground'>
                      Items:{order.items.length}
                    </p>
                    <p className='text-xs text-muted-forground'>

                      Time:{new Date(order.timeStamp).toLocaleString()}

                    </p>
                  </div>
                  <Button size={"sm"} onClick={() => handleResumeOrder(order)}>
                    <Play className="w-4 h-4 mr-1"></Play> Resume</Button>

                </div>

              </CardContent>


            </Card>
          ))}


        </div>
      </DialogContent>
    </Dialog>

  )
};

export default HeldOrderDialog;