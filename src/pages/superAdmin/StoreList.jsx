import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Info } from 'lucide-react';


import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllStore, moderateStore } from '@/Redux Toolkit/features/Store/stoteThunk';

// const stores = [1]


const StoreList = () => {

  const dispatch = useDispatch()
  const { stores } = useSelector((state) => state.store)

  useEffect(() => {
    dispatch(getAllStore())

  }, [])

  const handleAccept = (storeId) => {
    console.log("handle accept")
    dispatch(moderateStore({ storeId, action: "ACTIVE" }))
  }
  const handleReject = (storeId) => {
    console.log("handle reject")
    dispatch(moderateStore({ storeId, action: "PENDING" }))

  }


  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold tracking-tight'>Manage All Store</h1>



      </div>

      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Store Name</TableHead>
                <TableHead className="">Owner </TableHead>
                <TableHead className="">Contact</TableHead>
                <TableHead className="">Business Type </TableHead>
                <TableHead className="">Status </TableHead>
                <TableHead className="text-right">Submited On</TableHead>


              </TableRow>
            </TableHeader>
            <TableBody>
              {stores.map((item) => (

                <TableRow key={item.id}>
                  {/* <TableCell>{item.sku}</TableCell> */}
                  <TableCell>{item.brand}</TableCell>
                  <TableCell>
                    <div>
                      <p className='font-bold'>{item.storeAdmin?.fullName}</p>
                      <p>{item.storeAdmin?.email}</p>
                    </div>


                  </TableCell>
                  <TableCell>
                    <div>
                      <p className='font-bold'>{item.contact.email}</p>
                      <p>{item.contact.email}</p>
                      <p>{item.contact.address}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.storeType}</TableCell>
                  <TableCell className="text-right">{item.status}</TableCell>
                  <TableCell className="text-right">{item.createdAt.split("T")[0]}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center gap-2">

                      <Button
                        onClick={() => handleAccept(item.id)}
                        variant={"outline"}
                        className={"bg-green-50"}
                      >

                        <Check />
                        Accept
                      </Button>
                      <Button
                        onClick={handleReject(item.id)}
                        variant={"outline"}
                        className={"bg-red-50"}
                      >

                        <Check />
                        Reject
                      </Button>
                    </div>

                  </TableCell>


                </TableRow>
              ))}


            </TableBody>
          </Table>

        </CardContent>
      </Card>






    </div>
  );
};

export default StoreList;