import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SalesOverviewChart = () => {
  return (
    <div className="relative">
      <Image
        src="/dashboard/icons/prev.svg"
        alt="prev"
        width={18}
        height={18}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-not-allowed"
      />
      <div style={{ width: "100%", height: "163px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
              tickFormatter={(value) => `${value}m`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <Bar
              dataKey="series1"
              fill="#4F46E5"
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
            <Bar
              dataKey="series2"
              fill="#10B981"
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
            <Bar
              dataKey="series3"
              fill="#EF4444"
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Image
        src="/dashboard/icons/next.svg"
        alt="next"
        width={18}
        height={18}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-not-allowed"
      />
    </div>
  );
};

export default SalesOverviewChart;

const data = [
  {
    name: "Jan",
    series1: 35,
    series2: 27,
    series3: 9,
  },
  {
    name: "Feb",
    series1: 5,
    series2: 27,
    series3: 9,
  },
  {
    name: "Mar",
    series1: 14,
    series2: 6,
    series3: 3,
  },
  {
    name: "Apr",
    series1: 14,
    series2: 25,
    series3: 9,
  },
  {
    name: "May",
    series1: 9,
    series2: 2,
    series3: 6,
  },
  {
    name: "Jun",
    series1: 36,
    series2: 48,
    series3: 6,
  },
  {
    name: "Jul",
    series1: 23,
    series2: 36,
    series3: 17,
  },
  {
    name: "Aug",
    series1: 23,
    series2: 5,
    series3: 17,
  },
  {
    name: "Sep",
    series1: 36,
    series2: 33,
    series3: 5,
  },
];
