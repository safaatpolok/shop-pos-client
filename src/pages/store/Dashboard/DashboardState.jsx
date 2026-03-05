import { Card, CardContent } from '@/components/ui/card';
import { getStoreOverview } from '@/Redux Toolkit/features/StoreAnalytics/storeAnalyticsthunk';
import { DollarSign, ShoppingCart, Store, Users } from 'lucide-react';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const loading = false;

const DashboardState = () => {
  const { storeOverView } = useSelector((state) => state.storeAnalytics);
  const { store } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  useEffect(() => {


    if (store?.id) {
      dispatch(getStoreOverview(store.id));
    }

  }, [store])
  console.log("store oerview", storeOverView);
  const state = [
    {
      title: "Total Sales",
      value: storeOverView?.totalSales || 0,
      icon: <DollarSign className='w-8 h-8 text-emerald-500' />,
      change: 50,
      loading: loading
    },
    {
      title: "Total Branches",
      value: storeOverView?.totalBranches || 0,
      icon: <Store className='w-8 h-8 text-emerald-500' />,
      change: -4,
      loading: loading
    },
    {
      title: "Total Products",
      value: storeOverView?.totalProducts || 0,
      icon: <ShoppingCart className='w-8 h-8 text-emerald-500' />,
      change: 30,
      loading: loading
    },
    {
      title: "Total Employee",
      value: storeOverView?.totalEmployees || 0,
      icon: <Users className='w-8 h-8 text-emerald-500' />,
      change: 30,
      loading: loading
    }

  ]
  return (
    <div className='grid grid-cols-1  gap-4 md:grid-cools-2 lg:grid-cols-4'>

      {
        state.map((state, index) => (
          <Card key={index}>
            <CardContent>
              <div className='flex items-center justify-between'>
                <div className='space-y-2'>
                  <p className='text-sm font-medium text-gray-500'>{state.title}</p>
                  <h3 className='font-bold text-lg'>{state.value}</h3>
                  <p className={`text-xz font-medium mt-1 ${state.change > 0 ? 'text-emerald-500' : 'text-red-500'}`}>{state.change} </p>
                </div>
                <div className='p-3 bg-emerald-50 rounded-full'>
                  {state.icon}
                </div>
              </div>
            </CardContent>
          </Card>)
        )}

    </div>
  );
};

export default DashboardState;