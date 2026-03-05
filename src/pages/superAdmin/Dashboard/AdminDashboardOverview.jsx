import { DollarSign, Package, ShoppingBag, Users } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const overview = {
  totalStore: 79,
  pendingStore: 25,
  activeStore: 39,
  blockedStore: 15,
};

const AdminDashboardOverview = () => {
  // const { dashboardSummary } = useSelector((state) => state.adminDashboard)
  // console.log(dashboardSummary);

  const kpis = [
    {
      title: "Total Store",
      value: `$${overview.totalStore ?? "-"}`,
      icon: <DollarSign className='w-8 h-8 text-primary' />,
      description: "from last month",
    },
    {
      title: "Pending Store",
      value: overview.pendingStore ?? "-",
      icon: <ShoppingBag className='w-8 h-8 text-primary' />,
      description: "awating approval",
    },
    {
      title: "Active Store",
      value: overview.activeStore ?? "-",
      icon: <Users className='w-8 h-8 text-primary' />,
      description: "currently operational",
    },
    {
      title: "Block Store",
      value: overview.blockedStore ?? "-",
      icon: <Package className='w-8 h-8 text-primary' />,
      description: "suspend account",
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {kpis.map((kpi) => (
        <Card key={kpi.title}>
          <CardContent className="p-6">
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm font-medium text-gray-500'>{kpi.title}</p>
                <h3 className='text-xl font-bold'>{kpi.value}</h3>
                <p className='text-xs text-muted-foreground'>{kpi.description}</p>
              </div>
              <div className='p-3 bg-primary/10 rounded-full'>
                {kpi.icon}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminDashboardOverview;