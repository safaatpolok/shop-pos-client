import BranchSideBar from '@/pages/branch/Sidebar/BranchSidebar';

import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import StoreTopBar from '../StoreTopBar/StoreTopBar';
import { BadgeDollarSign, BarChart2, CreditCard, FileText, LayoutDashboard, Settings, ShoppingCart, Store, Tag, Truck, Users } from 'lucide-react';
import { BarChart } from 'recharts';
import { useDispatch } from 'react-redux';
import { getStoreByAdmin } from '@/Redux Toolkit/features/Store/stoteThunk';


const navLinks = [
  {
    name: "Dashboard",
    path: "/store/dashboard",
    icon: <LayoutDashboard className='w-5 h-5' />,
  },

  {
    name: "Stores",
    path: "/store/stores",
    icon: <Store className='w-5 h-5' />,
  },
  {
    name: "Branch",
    path: "/store/branches",
    icon: <LayoutDashboard className='w-5 h-5' />,
  },
  {
    name: "Products",
    path: "/store/products",
    icon: <ShoppingCart className='w-5 h-5' />,
  },
  {
    name: "Categories",
    path: "/store/categories",
    icon: <Tag className='w-5 h-5' />,
  },
  {
    name: "Employees",
    path: "/store/employees",
    icon: <Users className='w-5 h-5' />,
  },
  {
    name: "Alerts",
    path: "/store/alerts",
    icon: <Truck className='w-5 h-5' />,
  },
  {
    name: "Sales",
    path: "/store/sales",
    icon: <BarChart2 className='w-5 h-5' />,
  },
  {
    name: "Transactions",
    path: "/store/transaction",
    icon: <CreditCard className='w-5 h-5' />,
  },
  {
    name: "Reports",
    path: "/store/reports",
    icon: <FileText className='w-5 h-5' />,
  },
  {
    name: "Upgrade Plan",
    path: "/store/upgrade",
    icon: <BadgeDollarSign className='w-5 h-5' />,
  },
  {
    name: "Settings",
    path: "/store/settings",
    icon: <Settings className='w-5 h-5' />,
  },

];


const StoreDashboardLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoreByAdmin())

  }, [])

  return (
    <div className="flex h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <BranchSideBar navItems={navLinks} />

      <div className="flex-1 flex flex-col">
        <StoreTopBar />

        <main className="flex-1 overflow-y-auto p-8 md:p-10 lg:p-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StoreDashboardLayout;