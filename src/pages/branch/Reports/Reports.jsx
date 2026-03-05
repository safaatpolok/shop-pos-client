import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Calendar, TrendingUp } from 'lucide-react';


import React from 'react';
import SalesChat from '../Dashboard/SalesChat';
import PaymentBreakdown from '../Dashboard/PaymentBreakdown';
import PaymentMethodChart from './PaymentMethodChart';
import RecentOrders from '../Dashboard/RecentOrders';
import TopProducts from '../Dashboard/TopProducts';
import CashierPerformance from '../Dashboard/CashierPerformance';


const Reports = () => {
  return (
    <div className='sapce-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold tracking-tight'>
          Report & Analitics
        </h1>
        <div className=''>
          <Button variant="outline" >

            <Calendar />
            Today

          </Button>

        </div>

      </div>
      <Tabs className="mt-3">
        <TabsList>
          <TabsTrigger value="overview">
            <BarChart />
            OverView
          </TabsTrigger>

          <TabsTrigger value="sales" className="flex items-center gap-2">
            <TrendingUp className='h-4 w-4' />
            Sales

          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center gap-2">
            <TrendingUp className='h-4 w-4' />
            Products

          </TabsTrigger>
          <TabsTrigger value="cashier" className="flex items-center gap-2">
            <TrendingUp className='h-4 w-4' />
            Cashier Performance

          </TabsTrigger>

        </TabsList>
        <TabsContent value="overview">

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <SalesChat />
            </div>
            <div>
              <PaymentMethodChart />
            </div>
            <div>
              <RecentOrders></RecentOrders>
            </div>
          </div>

        </TabsContent>
        <TabsContent value="sales">

          <SalesChat />

        </TabsContent>
        <TabsContent value="products">

          <TopProducts />

        </TabsContent>
        <TabsContent value="cashier">

          <CashierPerformance />

        </TabsContent>
      </Tabs>

    </div>
  );
};

export default Reports;