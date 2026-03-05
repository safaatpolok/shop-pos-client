import React from 'react';
import CustomerCard from './CustomerCard';


const customers = [
  {
    id: 1, fullName: "John Doe", phone: "123-456-7890", email: "john@example.com", loyaltyPoints: 200, totalOrders: 9, totalSpent: 1500, averageOrderValue: 50,
  },
  {
    id: 2, fullName: "John Do", phone: "123-456-7890", email: "john@example.com", loyaltyPoints: 100, totalOrders: 10, totalSpent: 1000, averageOrderValue: 50,
  },
  {
    id: 3, fullName: "John Doe", phone: "123-456-7890", email: "john@example.com", loyaltyPoints: 250, totalOrders: 19, totalSpent: 4000, averageOrderValue: 560,
  },
  {
    id: 4, fullName: "John Doe", phone: "123-456-7890", email: "john@example.com", loyaltyPoints: 100, totalOrders: 14, totalSpent: 2000, averageOrderValue: 50,
  },

]

const CustomerList = ({ setSelectedCustomer }) => {
  return (
    <div className='flex-1 overflow-auto '>
      <div className='divide-y '>
        {
          customers.map(customer => (
            <CustomerCard
              className="cursor-poiter hover:bg-accent"
              setSelectedCustomer={setSelectedCustomer}
              key={customer.id}
              customer={customer} />
          ))
        }

      </div>

    </div>
  );
};

export default CustomerList;