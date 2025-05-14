import React from "react";
import { Card } from "../ui/card";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
const LineCharts = () => {
//   const COLORS = ["#D1A13D", "#2D4CE0", "#58B1AC"];
  const chartData = [
    { name: "Jan", eventPlanner: 1000, venueOwner: 900, serviceProvider: 800 },
    {
      name: "Feb",
      eventPlanner: 2000,
      venueOwner: 1800,
      serviceProvider: 1600,
    },
    {
      name: "Mar",
      eventPlanner: 3500,
      venueOwner: 2800,
      serviceProvider: 2200,
    },
    {
      name: "Apr",
      eventPlanner: 5000,
      venueOwner: 3800,
      serviceProvider: 2800,
    },
    {
      name: "May",
      eventPlanner: 6200,
      venueOwner: 4500,
      serviceProvider: 3200,
    },
    {
      name: "Jun",
      eventPlanner: 7200,
      venueOwner: 5100,
      serviceProvider: 3400,
    },
  ];
  return (
    <div className="sm:w-[60%] w-full">
      <Card className=" bg-[var(--color-accent)] text-white h-full">
        <div className="h-full">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1a4d7c" />
              <XAxis dataKey="name" tick={{ fill: "#C0C0C0" }} />
              <YAxis
                tick={{ fill: "#C0C0C0" }}
                tickFormatter={(value) => `${value / 1000}k`}
                domain={[0, 10000]}
                ticks={[
                  0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,
                  10000,
                ]}
              />
              <Tooltip
                formatter={(value) => [`${value}`, ""]}
                contentStyle={{
                  backgroundColor: "#003366",
                  borderColor: "#1a4d7c",
                }}
                labelStyle={{ color: "#ffffff" }}
                itemStyle={{ color: "#ffffff" }}
              />
              <Line
                type="monotone"
                dataKey="eventPlanner"
                stroke="#6CB9AD"
                strokeWidth={3}
                dot={{ r: 0 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="venueOwner"
                stroke="#D4AF37"
                strokeWidth={3}
                dot={{ r: 0 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="serviceProvider"
                stroke="#324DDD"
                strokeWidth={3}
                dot={{ r: 0 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-8 mt-2">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-[#ffd700] rounded-full mr-2"></div>
              <span>Event Planner</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-[#4287f5] rounded-full mr-2"></div>
              <span>Venue Owner</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-[#8fffff] rounded-full mr-2"></div>
              <span>Service Provider</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LineCharts;
