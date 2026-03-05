import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { getDailySalesChart, getTopProductsByQuantity } from '@/Redux Toolkit/features/Branch Analytics/BranchAnalyticsThunk';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const COLORS = ["#130f40", "#30336b", "#93afc0", "#bfdbfe", "#dbeafe"];

const TopProducts = () => {

  const { branch } = useSelector((state) => state.branch);
  const { topProducts } = useSelector(state => state.branchAnalytics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopProductsByQuantity(branch?.id));

  }, [branch]);


  // const data = [
  //   { name: "men shirt", value: 34, percentage: 20 },
  //   { name: "t-shirt", value: 10, percentage: 10 },
  //   { name: "shoes", value: 50, percentage: 40 },
  //   { name: "watches", value: 34, percentage: 30 },
  // ];

  // Fixed reduce

  const data = topProducts?.map((item) => ({
    name: item.productName,
    value: item.quantitySold,
    percentage: item.percentage
  })) || []
  console.log("top products data", data)

  // const config = data.length && data?.reduce((acc, item, idx) => {
  //   acc[item.name] = {
  //     label: item.name,
  //     color: COLORS[idx % COLORS.length],
  //   };
  //   return acc;
  // }, {});
  const config = Array.isArray(data) && data.length ?
    data.reduce((acc, item, idx) => {
      acc[item.name] = {
        label: item.name,
        ...(idx > 0 && { color: COLORS[idx % COLORS.length] })
      };
      return acc;
    }, {}) : {};

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
        Product Performance
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
              <ChartLegend
                content={<ChartLegendContent nameKey="name" />}
                className="-translate-y-2 flex-warp gap-2 *:basis-1/4 *:justify-between"

              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TopProducts;
