"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function ActiveUsersDashboard() {
  // Sample data for the line chart
  const chartData = [
    { name: "Jan", eventPlanner: 1000, venueOwner: 900, serviceProvider: 800 },
    { name: "Feb", eventPlanner: 2000, venueOwner: 1800, serviceProvider: 1600 },
    { name: "Mar", eventPlanner: 3500, venueOwner: 2800, serviceProvider: 2200 },
    { name: "Apr", eventPlanner: 5000, venueOwner: 3800, serviceProvider: 2800 },
    { name: "May", eventPlanner: 6200, venueOwner: 4500, serviceProvider: 3200 },
    { name: "Jun", eventPlanner: 7200, venueOwner: 5100, serviceProvider: 3400 },
  ]

  return (
    <div className="w-full pt-10">
      <h1 className="text-2xl font-medium text-[#003366] pb-6">Active Users</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left side - User type cards */}
        <div className="lg:col-span-1 space-y-4">
          {/* Event Planner Card */}
          <Card className="p-4 bg-[#D4AF37] text-white rounded-[8px]">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-base font-semibold">Event Planner</h2>
                <div className="mt-2">
                  <div className="flex justify-between text-sm ">
                    <span>Total</span>
                    <span className="font-semibold" >3.4k</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>This Month</span>
                    <span className="font-semibold">1.1k</span>
                  </div>
                </div>
              </div>
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="#F2C643"
                    stroke="#003366"
                    strokeWidth="15"
                    strokeDasharray="251.2"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#ffd700"
                    strokeWidth="15"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - 0.48)}
                    transform="rotate(-90 50 50)"
                  />
                  <text x="50" y="55" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">
                    48%
                  </text>
                </svg>
              </div>
            </div>
          </Card>

          {/* Venue Owner Card */}
          <Card className="p-4 bg-[#34C759] text-white rounded-[8px]">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-base font-semibold">Venue Owner</h2>
                <div className="mt-2">
                  <div className="flex justify-between text-sm">
                    <span>Total</span>
                    <span className="font-semibold">3.4k</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>This Month</span>
                    <span className="font-semibold">1.1k</span>
                  </div>
                </div>
              </div>
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#003366"
                    strokeWidth="15"
                    strokeDasharray="251.2"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#8eff8e"
                    strokeWidth="15"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - 0.25)}
                    transform="rotate(-90 50 50)"
                  />
                  <text x="50" y="55" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">
                    25%
                  </text>
                </svg>
              </div>
            </div>
          </Card>

          {/* Service Provider Card */}
          <Card className="p-4 bg-[#324DDD] text-white rounded-[8px]">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-base font-semibold">Service Provider</h2>
                <div className="mt-2">
                  <div className="flex justify-between text-sm">
                    <span>Total</span>
                    <span className="font-semibold">3.4k</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>This Month</span>
                    <span className="font-semibold">1.1k</span>
                  </div>
                </div>
              </div>
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#003366"
                    strokeWidth="15"
                    strokeDasharray="251.2"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#8a8aff"
                    strokeWidth="15"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - 0.27)}
                    transform="rotate(-90 50 50)"
                  />
                  <text x="50" y="55" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">
                    27%
                  </text>
                </svg>
              </div>
            </div>
          </Card>
        </div>

        {/* Right side - Line chart */}
        <div className="lg:col-span-3">
          <Card className="p-4 bg-[#003366] text-white h-full">
            <div className="h-full">
              <ResponsiveContainer width="100%" height="90%">
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
                  <XAxis dataKey="name" stroke="#ffffff" tick={{ fill: "#ffffff" }} />
                  <YAxis
                    stroke="#ffffff"
                    tick={{ fill: "#ffffff" }}
                    tickFormatter={(value) => `${value / 1000}k`}
                    domain={[0, 10000]}
                    ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]}
                  />
                  <Tooltip
                    formatter={(value) => [`${value}`, ""]}
                    contentStyle={{ backgroundColor: "#003366", borderColor: "#1a4d7c" }}
                    labelStyle={{ color: "#ffffff" }}
                    itemStyle={{ color: "#ffffff" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="eventPlanner"
                    stroke="#ffd700"
                    strokeWidth={3}
                    dot={{ r: 0 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="venueOwner"
                    stroke="#4287f5"
                    strokeWidth={3}
                    dot={{ r: 0 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="serviceProvider"
                    stroke="#8fffff"
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
      </div>
    </div>
  )
}