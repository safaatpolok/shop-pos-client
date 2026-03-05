import { Button } from '@/components/ui/button';
import { getBranchById } from '@/Redux Toolkit/features/Branch/branchThunk';
import { clearUserState } from '@/Redux Toolkit/features/User/userSlice';
import { logout } from '@/Redux Toolkit/features/User/userThunk';
import { CreditCard, Cross, FileText, LayoutDashboard, LogOut, Package, PackageXIcon, Settings, ShoppingBag, UserCircle, Users, X } from 'lucide-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';





const BranchSideBar = ({ branch, navItems }) => {

  const { userProfile } = useSelector(state => state.user)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userProfile?.branchId) {
      dispatch(getBranchById({ id: userProfile.branchId }))
    }
  }, [userProfile])

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    dispatch(clearUserState())
    navigate("/")
  }
  return (
    <div className='w-64 border-r border-border bg-sidebar p-4 flex flex-col h-full relative'>

      <div className='flex justify-center'>
        <h1 className='flex items-center gap-3 text-2xl text-center font-bold text-sidebar-forground'>
          <Package className='w-7 h-7 text-primary m' /> POS SYSTEM</h1>
      </div>

      {branch && (<div className='mt-6 px-4 py-3 bg-sidebar-accent rounded-lg'>
        <h3 className='font-medium text-sidebar-accent-foreground'>{branch.name}</h3>
        <p className='text-xs text-secondary-foreground/70 mt-1'>{branch.address}</p>
      </div>)}
      <nav className='space-y-1 flex-1 mt-6'>
        {
          navItems.map((item) => <Link
            className={`flex items-center justify-between p-3 rounded-md
          hover:bg-sidbar-accent transition-color ${location.pathname === item.path ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground"}`} key={item.path} to={item.path}>
            <div className='flex items-center gap-3'>
              {item.icon}
              <span>{item.name}</span>

            </div>


          </Link>)
        }
      </nav>
      <div>
        <Button onClick={handleLogout} className={"w-full py-6"}> <LogOut />LogOut</Button>
      </div>


    </div>
  );
};

export default BranchSideBar;