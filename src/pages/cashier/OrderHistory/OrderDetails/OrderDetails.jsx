import React from 'react';
import OrderInformation from './OrderInformation';
import CustomerInformation from './CustomerInformation';
import OrderITemsTable from './OrderITemsTable';



const OrderDetails = ({ selectedOrder }) => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <OrderInformation selectedOrder={selectedOrder}></OrderInformation>
        <CustomerInformation selectedOrder={selectedOrder}></CustomerInformation>
      </div>
      <OrderITemsTable selectedOrder={selectedOrder}>

      </OrderITemsTable>

    </div>

  );
};

export default OrderDetails;