import { Button } from '@/components/ui/button';
import { Pause, ShoppingCart, Trash2 } from 'lucide-react';
import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import HeldOrderDialog from './HeldOrderDialog';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectCartItems, selectHeldOrders } from '@/Redux Toolkit/features/Cart/CartSlice';


// const CartItems = [
//   {
//     name: "Men slim Fit Checkered Spread Coller Casual Shirt(Pack of 2) ",
//     sku: "SHRT-S-COTTON-BLACK-20025",
//     quantity: 2,
//     sellingPrice: 799.99
//   },
//   {
//     name: "Men slim Fit Checkered Spread Coller Casual Shirt(Pack of 2) ",
//     sku: "SHRT-S-COTTON-BLACK-20025",
//     quantity: 2,
//     sellingPrice: 799.99
//   },
//   {
//     name: "Men slim Fit Checkered Spread Coller Casual Shirt(Pack of 2) ",
//     sku: "SHRT-S-COTTON-BLACK-20025",
//     quantity: 2,
//     sellingPrice: 799.99
//   },

// ];

const CartSection = () => {
  const [showHeldOrdersDialog, setShowHeldOrdersDialog] = React.useState(false);

  const cartItems = useSelector(selectCartItems) || []

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart)
  }



  return (
    <>
      <div className='border w-2/5 flex  flex-col bg-card'>

        <div className='p-4 border-b bg-muted'>
          <div className='flex irems-center justify-between'>
            <h2 className='text-lg font-semibold flex irems-center'>
              <ShoppingCart></ShoppingCart> Cart({cartItems.length})  item

            </h2>

            <div className='flex space-x-2'>

              <Button onClick={() => setShowHeldOrdersDialog(true)} variant={"outline"} className="" size={"sm"}>
                <Pause className='w-4 h-4 mr-1  '></Pause>
                Held
              </Button>

              <Button onClick={handleClearCart} variant={"outline"} className="" size={"sm"}>
                <Trash2 className='w-4 h-4 mr-1'></Trash2>
                Clear
              </Button>
            </div>

          </div>

        </div>
        <div className='p-4 space-y-3'>
          {
            cartItems.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
        </div>
        {cartItems.length && <CartSummary></CartSummary>}

      </div>
      <HeldOrderDialog showHeldOrdersDialog={showHeldOrdersDialog} setShowHeldOrdersDialog={setShowHeldOrdersDialog}></HeldOrderDialog>
    </>
  );
};

export default CartSection;