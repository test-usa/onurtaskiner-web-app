"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LabelList,
} from "recharts"

const barData = [
  { name: "Jan", Ads: 6.4, Subscriptions: 7.5, Bookings: 9 },
  { name: "Feb", Ads: 6.4, Subscriptions: 7.9, Bookings: 9 },
  { name: "Mar", Ads: 4, Subscriptions: 8.5, Bookings: 10 },
  { name: "Apr", Ads: 7.3, Subscriptions: 6, Bookings: 9 },
  { name: "May", Ads: 8.3, Subscriptions: 9.2, Bookings: 8 },
  { name: "Jun", Ads: 4, Subscriptions: 8.1, Bookings: 9.9 },
]

const donutData = [
  { name: "Subscriptions", value: 26.9 },
  { name: "Bookings", value: 48.8 },
  { name: "Ads", value: 24.3 },
]

const COLORS = ["#324DDD", "#272A3E", "#6CB9AD"]

export default function RevenueDashboard() {
  return (
    <div className="w-full pt-10">
      <h2 className="text-2xl font-semibold text-[#003366] mb-4">
        Total Revenue Breakdown
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Bar Chart */}
        <Card className="lg:col-span-2 bg-[#EDF2F7] shadow-sm rounded-2xl">
          <CardContent className="p-4">
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} barCategoryGap="10%">
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(val) => `${val}k`} domain={[0, 11]} />
                  <Tooltip />
                  <Legend iconType="plainline"  />
                  <Bar dataKey="Ads" fill="#6CB9AD">
                    <LabelList dataKey="Ads" position="top" formatter={(val:number) => `${val}k`} />
                  </Bar>
                  <Bar dataKey="Subscriptions" fill="#324DDD">
                    <LabelList dataKey="Subscriptions" position="top" formatter={(val:number) => `${val}k`} />
                  </Bar>
                  <Bar dataKey="Bookings" fill="#272A3E">
                   <LabelList dataKey="Ads" position="top" formatter={(val: number) => `${val}k`} />

                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Donut Chart */}
        <Card className="bg-[#FFF9EC] shadow-sm rounded-2xl">
          <CardContent className="p-1">
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
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-xs font-bold text-[#333]">Revenue in %</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
