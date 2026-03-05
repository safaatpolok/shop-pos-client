import { CheckCircle, Info, Star, Store } from 'lucide-react';
import React from 'react';
const plans = [
  {
    id: 1,
    description: "Basic plan for small",
    name: "Basic",
    price: 599,
    billingCycle: "monthly",
    extraFratures: [
      "Api Integration",
      "Advance Reporting"
    ]
  },
  {
    id: 2, name: "Pro", price: 999, billingCycle: "monthly", extraFratures: [
      "Api Integration",
      "Advance Reporting"
    ]
  },
  {
    id: 3, name: "Advance", price: 1599, billingCycle: "monthly", extraFratures: [
      "Api Integration",
      "Advance Reporting"
    ]
  }
];
const currentSubscription = {
  plan: {
    id: 1
  }
}

const Upgrade = () => {
  return (
    <div className='max-w-7xl max-auto py-12 px-4'>
      <h1 className='font-bold text-2xl text-center pb-5'>Upgrade your subscription</h1>
      <div className='mb-8 p-4 bg-green-50 border
       border-gray-200 rounded-lg text-green-900 flex items-center gap-3'>
        <CheckCircle className='w-6 h-6 text-green-500'></CheckCircle>
        <div>
          <h1>
            Current Plan:Basic Plan
          </h1>
          <h2>Status:Action</h2>
          <h2>
            Valide till: 03/09/2025
          </h2>
        </div>


      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {plans?.map((plan) =>
          <div className={`bg-card rounded-2xl p-8 shadow-lg border
        flex flex-col relative ${currentSubscription.plan.id == plan.id ? "ring-2 ring-primary" : " "}`
          } key={plan.id}>

            {currentSubscription?.plan?.id == plan.id &&
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Your Plan
                </span>
              </div>}

            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold text-foreground mb-2'>
                {plan.name}
              </h3>
              <div className='flex items-baseline justify-center'>
                <span className='text-4xl font-bold text-foreground'>${plan.price}</span>
                <span className='text-muted-foreground ml-1'>
                  /{plan.billingCycle?.toLowerCase()}
                </span>
              </div>
            </div>

            <ul className='text-center mb-8'>
              <li className='text-muted-foreground mb-3 flex items-center gap-2'>
                <Info />
                {plan.description}</li>
              <li className='text-muted-foreground flex items-center gap-2'>
                <Store className='w-5 h-5 text-purple-500' />
                Max Branches:{plan.maxBranches}
              </li>
              <li className='text-muted-foreground flex items-center gap-2'>
                <Store className='w-5 h-5 text-purple-500' />
                Max User:{plan.maxUser}
              </li>
              <li className='text-muted-foreground flex items-center gap-2'>
                <Store className='w-5 h-5 text-purple-500' />
                Max Products:{plan.maxProducts}
              </li>

              <li className="text-muted-foreground gap-2">
                <span className="font-medium flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Extra Feature
                </span>
                <ul className="ml-7 list-disc space-y-1 ">
                  {plan.extraFratures?.map((feature, idx) => (
                    <li key={idx}>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </li>

            </ul>


          </div>

        )}



      </div>

    </div>
  );
};

export default Upgrade;