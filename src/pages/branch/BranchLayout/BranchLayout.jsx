import React from 'react';
import { Outlet } from 'react-router-dom';
import BranchSidebar from '../Sidebar/BranchSidebar';
import BranchTopbar from '../Topbar/BranchTopbar';
import { CreditCard, FileText, LayoutDashboard, Package, Settings, ShoppingBag, UserCircle, Users } from 'lucide-react';
import { useSelector } from 'react-redux';
// const branch = {
//   name: "dk east brach",
//   address: "street 123,near sarder garder"
// }


const navItems = [
  {
    name: "Dashboard",
    path: "/branch/dashboard",
    icon: <LayoutDashboard className='w-5 h-5' />,
  },
  {
    name: "orders",
    path: "/branch/orders",
    icon: <ShoppingBag className='w-5 h-5' />,
  },
  {
    name: "Transactions",
    path: "/branch/transactions",
    icon: <CreditCard className='w-5 h-5' />,
  },
  {
    name: "Inventory",
    path: "/branch/inventory",
    icon: <Package className='w-5 h-5' />,
  },
  {
    name: "Employees",
    path: "/branch/employees",
    icon: <Users className='w-5 h-5' />,
  },
  {
    name: "Customers",
    path: "/branch/customer",
    icon: <UserCircle className='w-5 h-5' />,
  },
  {
    name: "Reports",
    path: "/branch/reports",
    icon: <FileText className='w-5 h-5' />,
  },
  {
    name: "Settings",
    path: "/branch/settings",
    icon: <Settings className='w-5 h-5' />,
  },

];




const BranchLayout = () => {
  const { branch } = useSelector(state => state.branch)
  return (
    <div className="flex h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <BranchSidebar branch={branch} navItems={navItems} />

      <div className="flex-1 flex flex-col">
        <BranchTopbar />

        <main className="flex-1 overflow-y-auto p-8 md:p-10 lg:p-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default BranchLayout;
