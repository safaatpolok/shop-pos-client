import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
// import { BarChart } from 'lucide-react';
import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: "2025-08-06",
    sales: 400,
  },
  {
    name: "2025-08-05",
    sales: 600,
  },
  {
    name: "2025-08-04",
    sales: 500,
  },
  {
    name: "2025-08-03",
    sales: 400,
  },
  {
    name: "2025-08-02",
    sales: 700,
  }
]

const StoreRegistrationChart = () => {
  const config = {
    sales: {
      label: "Sales",
      color: "#3b82f6"
    }
  }
  return (
    <Card>
      <CardTitle className={"text-xl font-semibold pl-6"}>
        Store Registration(last 7 days)
      </CardTitle>


      <CardContent>

        <ChartContainer config={config}>
          <ResponsiveContainer height={320} width={"100%"}>

            <BarChart data={data}>
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
                    formatter={(value) => [`$${value}`, "Sales"]}

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

export default StoreRegistrationChart;