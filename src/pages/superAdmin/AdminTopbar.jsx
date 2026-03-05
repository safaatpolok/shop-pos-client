import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, User } from 'lucide-react';
import React from 'react';

const store = {
  name: "Polok shopping",
  address: "street 123,near sarder garder",

};

const userProfile = {
  name: "Pablo panay",
  email: "pablo@gmail.com"
}

const AdminTopbar = () => {
  return (
    <header className=' bg-background border-b px-6 py-4 flex items-center justify-between'>
      <div>
        <h1 className='font-bold text-2xl'>{"Admin Dashboard"}</h1>

      </div>

      <div className='flex items-center gap-4'>
        <Button>
          <Bell className='h-5 w-5'></Bell>
          <Badge>3</Badge>
        </Button>
        <div className='flex items-center gap-3'>

          <div className='h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center'>

            <User />

          </div>
          <div className='hidden md:block'>

            <p className='text-sm font-medium text-foreground'>{userProfile.name}</p>
            <p className='text-xs text-muted-forefround'>{userProfile.email}</p>

          </div>

        </div>

      </div>
    </header>
  );
};

export default AdminTopbar;