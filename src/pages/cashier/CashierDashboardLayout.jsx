
import SideBar from './sideBar/SideBar';
import { Clock, ReceiptIcon, RotateCcw, ShoppingCart } from 'lucide-react';
import { useSidebar } from '@/Context/hook/useSidebar';
import { SideBarProvider } from '@/Context/hook/SidebarProvider';
import { Outlet } from 'react-router-dom';

const navItems = [


  {
    path: "/cashier",
    icon: <ShoppingCart size={20}></ShoppingCart>,
    label: "POS Terminal"
  },

  {
    path: "/cashier/orders",
    icon: <Clock size={20}></Clock>,
    label: "Order History"
  },
  {
    path: "/cashier/returns",
    icon: <RotateCcw size={20}></RotateCcw>,
    label: "Returns/Refund"
  },
  {
    path: "/cashier/shift-summary",
    icon: <ReceiptIcon size={20}></ReceiptIcon>,
    label: "Shift Summary"
  }
]

const LayoutContent = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <div className='flex h-screen bg-background'>

      {sidebarOpen && <div className='fixed inset-0 bg-black/40'> </div>}

      <div className={`fixed x-30 h-full transition-transform duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <SideBar navItems={navItems} onClose={() => setSidebarOpen(false)}> </SideBar>
      </div >

      <div className='flex-1 overflow-auto'>
        <Outlet></Outlet>
      </div>

    </div>


  );
};




const CashierDashboardLayout = () => {
  return (
    <SideBarProvider>

      <LayoutContent> </LayoutContent>

    </SideBarProvider>
  );
};

export default CashierDashboardLayout;
