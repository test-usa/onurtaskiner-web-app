import React from "react";
import { Card, CardContent } from "../ui/card";
import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";

const PieCharts = () => {
  const donutData = [
    { name: "Subscriptions", value: 26.9 },
    { name: "Bookings", value: 48.8 },
    { name: "Ads", value: 24.3 },
  ];

  const COLORS = ["#324DDD", "#272A3E", "#6CB9AD"];
  return (
    <div className="w-full sm:w-[40%] mx-auto relative">
      {/* Donut Chart */}
      <Card className="bg-[#FFF9EC] shadow-sm rounded-2xl">
        <CardContent className="">
          <div className="h-[320px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={100}
                    paddingAngle={1}
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(1)}%`
                    }
                  >
                    {donutData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-xs font-bold text-[#333]">
                  Revenue in %
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PieCharts;
