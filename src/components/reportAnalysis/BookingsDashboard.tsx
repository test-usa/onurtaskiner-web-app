"use client"

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot, LabelList } from "recharts"
import { ArrowUpRight, MapPin } from "lucide-react"
import Image from "next/image"
import bookingImg from "@/assets/images/booking.png"

const data = [
  { name: "Jan", bookings: 3200 },
  { name: "Feb", bookings: 3400 },
  { name: "Mar", bookings: 4100 },
  { name: "April", bookings: 4700 },
  { name: "May", bookings: 5100 },
  { name: "June", bookings: 5700 },
]

const venues = [
  {
    name: "The Grand Hall",
    location: "New York",
    image: bookingImg,
  },
  {
    name: "The Grand Hall",
    location: "New York",
    image: bookingImg,
  },
  {
    name: "The Grand Hall",
    location: "New York",
    image: bookingImg,
  },
]

export default function BookingsDashboard() {
  return (
    <div className="w-full pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bookings Section */}
        <div>
          <h1 className="text-2xl font-medium text-[#003366] mb-4">Bookings</h1>
          <div className="w-full rounded-xl bg-white p-4 shadow-md h-[300px]">
            <div className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#B1B9F8" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#B1B9F8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" tick={{ fill: "#6B7280", fontSize: 12 }} />
                  <YAxis hide />
                  <Tooltip
                    formatter={(value) => `${(value as number).toLocaleString()}k`}
                    labelStyle={{ color: "#1F2937" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="bookings"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    fill="url(#colorBookings)"
                    activeDot={{ r: 6 }}
                  >
                    <LabelList
                      dataKey="bookings"
                      position="top"
                      formatter={(val: number) => `${(val / 1000).toFixed(1)}k`}
                    />
                  </Area>
                  <ReferenceDot x="May" y={5100} r={5} fill="#2563EB" stroke="white" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Top Venues Section */}
        <div>
          <h2 className="text-2xl font-medium text-[#003366] mb-4">Top Venues</h2>
          <div className=" p-3 h-[300px] overflow-auto">
            <div className="space-y-3">
              {venues.map((venue, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={venue.image || "/placeholder.svg"}
                      alt={venue.name}
                      width={40}
                      height={40}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-[#333333]">{venue.name}</p>
                      <div className="flex items-center text-xs text-gray-500 gap-1">
                        <MapPin size={12} />
                        <span>{venue.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-[#D9D9D9]">
                          <ArrowUpRight className="text-[#003366]" />
                  </div>
            
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
