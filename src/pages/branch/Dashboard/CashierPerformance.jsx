import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { getTopCashiersByRevenue } from '@/Redux Toolkit/features/Branch Analytics/BranchAnalyticsThunk';
// import { BarChart } from 'lucide-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

// const data = [
//   {
//     name: "Kamrul",
//     sales: 400,
//   },
//   {
//     name: "Murad",
//     sales: 600,
//   },
//   {
//     name: "Tanvir",
//     sales: 500,
//   },
//   {
//     name: "Shouvo",
//     sales: 400,
//   },
//   {
//     name: "Asif",
//     sales: 700,
//   }
// ]

const CashierPerformance = () => {
  const { branch } = useSelector((state) => state.branch);
  const { topCashiers } = useSelector(state => state.branchAnalytics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopCashiersByRevenue(branch?.id));

  }, [branch]);

  const data = topCashiers?.map((item) => ({
    name: item.cashierName,
    sales: item.totalRevenue,
  }));


  const config = {
    sales: {
      label: "Sales",
      color: "#3b82f6"
    }
  }
  return (
    <Card>
      <CardTitle className={"text-xl font-semibold pl-6"}>
        Cashier Performance</CardTitle>


      <CardContent>

        <ChartContainer config={config}>
          <ResponsiveContainer height={320} width={"100%"}>

            <BarChart layout='vertical' data={data}>
              <XAxis
                type='number'
                // dataKey={"name"}
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$ ${value}`}></XAxis>

              <YAxis
                dataKey={"name"}
                type='category'
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              // tickFormatter={(value) => `$${value}`}
              >
              </YAxis>

              <ChartTooltip
                content={({ active, payload }) => (
                  <ChartTooltipContent
                    active={active}
                    payload={payload}
                    formatter={(value) => [`$${value}`, "Reveenue"]}

                  />
                )}>
              </ChartTooltip>

              <Bar dataKey="sales" fill="#130f40" radius={4} />

            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

      </CardContent>

    </Card>
  );
};

export default CashierPerformance;