import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/Context/hook/useSidebar';
import { TextAlignJustify } from 'lucide-react';
// import { Avatar } from 'radix-ui';
import React from 'react';

const POSHeader = () => {
  const { setSidebarOpen } = useSidebar()
  return (
    <div className='bg-card border-b px-6 py-4'>

      <div className='flex items-center justify-between'>

        <div>
          <Button
            onClick={() => setSidebarOpen(true)}
          >
            <TextAlignJustify />
          </Button>
        </div>
        <div>
          <h1 className='text-2xl font-bold text-foreground   '>POS Terminal</h1>
          <p className='text-sm text-muted-foreground'>Create new Order</p>
        </div>

        <div className='flex items-center space-x-2 '>
          <Avatar >
            <AvatarImage src="https://pixabay.com/images/download/simonar-rabbit-373691_1920.jpg " />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

        </div>

      </div>

    </div>
  );
};

export default POSHeader;