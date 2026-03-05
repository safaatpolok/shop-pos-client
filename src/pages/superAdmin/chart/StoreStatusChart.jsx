import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const COLORS = ["#130f40", "#30336b", "#93afc0", "#bfdbfe", "#dbeafe"];

const StoreStatusChart = () => {

  const data = [
    { name: "men shirt", value: 34, percentage: 20 },
    { name: "t-shirt", value: 10, percentage: 10 },
    { name: "shoes", value: 50, percentage: 40 },
    { name: "watches", value: 34, percentage: 30 },
  ];

  // Fixed reduce
  const config = data.reduce((acc, item, idx) => {
    acc[item.name] = {
      label: item.name,
      color: COLORS[idx % COLORS.length],
    };
    return acc;
  }, {});

  // Fixed custom label function
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    const percentValue = data[index]?.percentage ?? percent * 100;

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${percentValue.toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card>
      <CardTitle className="text-xl font-semibold pl-6">
        Store Status Distribution
      </CardTitle>

      <CardContent>
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <ChartTooltip
                content={({ active, payload }) => (
                  <ChartTooltipContent
                    active={active}
                    payload={payload}
                    formatter={(value) => [
                      `${value ?? "-"}`,
                      "Sales ",
                    ]}
                  />
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default StoreStatusChart;
