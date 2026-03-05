import BranchSideBar from '@/pages/branch/Sidebar/BranchSidebar';

import React from 'react';
import { Outlet } from 'react-router';

import { LayoutDashboard, Settings, Store, Users } from 'lucide-react';
import AdminTopbar from './adminTopbar';




const navLinks = [
  {
    name: "Dashboard",
    path: "/super-admin/dashboard",
    icon: <LayoutDashboard className='w-5 h-5' />,
  },

  {
    name: "Stores",
    path: "/super-admin/stores",
    icon: <Store className='w-5 h-5' />,
  },
  {
    name: "Subscription Plans",
    path: "/super-admin/subscription",
    icon: <LayoutDashboard className='w-5 h-5' />,
  },

  {
    name: "Pending Requests",
    path: "/super-admin/request",
    icon: <Users className='w-5 h-5' />,
  },




  {
    name: "Settings",
    path: "/super-admin/settings",
    icon: <Settings className='w-5 h-5' />,
  },

];


const AdminLayOut = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <BranchSideBar navItems={navLinks} />

      <div className="flex-1 flex flex-col">
        <AdminTopbar />

        <main className="flex-1 overflow-y-auto p-8 md:p-10 lg:p-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayOut;