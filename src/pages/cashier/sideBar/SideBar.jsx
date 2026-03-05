import { Button } from '@/components/ui/button';
import { getBranchById } from '@/Redux Toolkit/features/Branch/branchThunk';
import { logout } from '@/Redux Toolkit/features/User/userThunk';
import { X } from 'lucide-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router';


// const branch = { name: "sx east branch", address: "street 123" }

const SideBar = ({ navItems, onClose }) => {

  const { userProfile } = useSelector(state => state.user)
  const { branch } = useSelector(state => state.branch)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userProfile?.branchId) {
      dispatch(getBranchById({ id: userProfile.branchId }))
    }
  }, [userProfile])

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }
  return (
    <div className='w-64 border-r border-border bg-sidebar p-4 flex flex-col h-full relative'>

      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold text-sidebar-forground'> POS SYSTEM</h1>

        <Button size={"icon"} onClick={onClose}>
          <X />
        </Button>
      </div>
      <nav className='space-y-2 flex-1'>
        {
          navItems.map((item) => <Link onClick={() => { if (onClose) onClose(); }}
            className={`flex items-center justify-between p-3 rounded-md
          hover:bg-sidbar-accent transition-color ${location.pathname === item.path ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground"}`} key={item.path} to={item.path}>
            <div className='flex items-center gap-3'>
              {item.icon}
              <span>{item.label}</span>

            </div>


          </Link>)
        }
      </nav>

      {branch && (<div className='mt-6 px-4 py-3 bg-sidebar-accent rounded-lg'>
        <h3 className='font-medium text-sidebar-accent-foreground'>{branch?.name}</h3>
        <p className='text-xs text-secondary-foreground/70 mt-1'>{branch?.address}</p>
      </div>)}

      <div className='pt-10'>
        <Button className={"py-5 w-full"} onClick={handleLogout}>
          Logout
        </Button>
      </div>


    </div>
  );
};

export default SideBar;