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
              dataKey="total_inflow"
              fill="#4F46E5"
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
            <Bar
              dataKey="MRR"
              fill="#10B981"
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
            <Bar
              dataKey="GMV"
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
    total_inflow: 35,
    MRR: 27,
    GMV: 9,
  },
  {
    name: "Feb",
    total_inflow: 5,
    MRR: 27,
    GMV: 9,
  },
  {
    name: "Mar",
    total_inflow: 14,
    MRR: 6,
    GMV: 3,
  },
  {
    name: "Apr",
    total_inflow: 14,
    MRR: 25,
    GMV: 9,
  },
  {
    name: "May",
    total_inflow: 9,
    MRR: 2,
    GMV: 6,
  },
  {
    name: "Jun",
    total_inflow: 36,
    MRR: 48,
    GMV: 6,
  },
  {
    name: "Jul",
    total_inflow: 23,
    MRR: 36,
    GMV: 17,
  },
  {
    name: "Aug",
    total_inflow: 23,
    MRR: 5,
    GMV: 17,
  },
  {
    name: "Sep",
    total_inflow: 36,
    MRR: 33,
    GMV: 5,
  },
];
