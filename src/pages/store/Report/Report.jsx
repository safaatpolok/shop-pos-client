import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getMonthlySales, getSalesByCategory } from '@/Redux Toolkit/features/StoreAnalytics/storeAnalyticsthunk';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const Report = () => {
  const dispatch = useDispatch()
  const { userProfile } = useSelector((state) => state.user)

  const { monthlySales, salesByCategory } = useSelector((state) => state.storeAnalytics)

  useEffect(() => {
    if (userProfile?.id) {
      dispatch(getMonthlySales(userProfile.id))
      dispatch(getSalesByCategory(userProfile.id))
    }
  }, [userProfile.id, dispatch]);

  const salesData = monthlySales.map((item) => ({
    name: new Date(item.data).toLocaleDateString("en-US", {
      month: "short",

    }),
    sales: item.totalAmount,

  }));



  const categoryData = salesByCategory.map((item) => ({
    name: item.categoryName,
    value: item.totalSales,
  }));
  console.log("formattedDailySales", salesData);
  console.log("formattedSalesByPaymentMethod", categoryData)

  const salesConfig = {
    sales: {
      label: "Sales",
      color: "#10b981"
    }
  }
  const paymentConfig = {
    sales: {
      label: "Amount",
      color: "#3b82f6"
    }
  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
        <Card>
          <CardHeader>
            <CardTitle>
              Monthly Sales

            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={salesConfig}>
              <LineChart
                accessibilityLayer
                data={salesData}
                margin={{
                  top: 20,
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Line
                  dataKey="sales"
                  type="natural"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{
                    fill: "#10b981",
                  }}
                  activeDot={{
                    r: 6, fill: "#10b981"
                  }}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Line>
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Sales By Category
            </CardTitle>
          </CardHeader>
          <CardContent>

            <ChartContainer config={paymentConfig}>
              <ResponsiveContainer height={320} width={"100%"}>

                <BarChart data={categoryData}>
                  <XAxis
                    dataKey={"name"}
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}></XAxis>

                  <YAxis
                    // dataKey={"name"} 
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}></YAxis>

                  <ChartTooltip
                    content={({ active, payload }) => (
                      <ChartTooltipContent
                        active={active}
                        payload={payload}
                        formatter={(value) => [`$${value}`, "Amount"]}

                      />
                    )}>
                  </ChartTooltip>

                  <Bar dataKey="value" fill="currentColor" radius={4}
                    className='fill-primary' />

                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Report;