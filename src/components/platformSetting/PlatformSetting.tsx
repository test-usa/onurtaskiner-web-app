"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EllipsisVertical, Plus } from "lucide-react"

export default function PlatformSettings() {

  return (
    <div className="">
      <h1 className="md:text-4xl text-2xl font-medium text-primary ">Platform Setting</h1>
      {/* Booking Commissions Section */}
      <div className="mb-10 pt-10">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#1D1B28]">
            Booking Commissions
          </h2>
          <EllipsisVertical className="h-5 w-5 text-[#D4AF37]" />
        </div>

        <div className="space-y-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="md:w-[800px] w-full text-base md:text-2xl text-[#1D1B28] font-medium">
              Venue :
            </label>
            <div className="relative flex-1 w-full">
              <Input
                type="text"
                className="pr-8 w-full"
                placeholder="0%"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="md:w-[800px] w-full text-base md:text-2xl text-[#1D1B28] font-medium">
              Service Provider :
            </label>
            <div className="relative flex-1 w-full">
              <Input
                type="text"
                placeholder="0%"
                className="pr-8 w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-[#003366] hover:bg-[#0a3b6d]/90">
            Update Commissions
          </Button>
        </div>
      </div>

      {/* Compare Plans Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#1D1B28]">Compare Plans</h2>
          <Button variant="ghost" className="h-8 px-2 text-[#D4AF37]">
            Add <Plus className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Standard Plan */}
          <div className="p-6 border-r border-l ">
            <div className="text-center mb-3">
              <p className="text-base font-bold text-[#1D1B28] mb-1">Standard</p>
              <p className="md:text-[28px] text-lg font-bold text-[#1D1B28]">Free</p>
            </div>

            <button className="w-full mb-2 px-2 py-3 border border-transparent rounded-lg hover:border-[#50496E33]">
              Select Plan
            </button>
            <button className="w-full mb-2 px-2 py-3 border border-transparent rounded-lg hover:border-[#50496E33]">
              Only Plan
            </button>
            <button className="w-full mb-2 px-2 py-3 border border-transparent rounded-lg hover:border-[#50496E33]">
              Only Plan
            </button>
          </div>
          
          {/* Featured Plan */}
          <div className="p-6 ">
            <div className="text-center mb-6">
              <p className="text-base font-bold text-[#003366] mb-1">Featured</p>
              <p className="md:text-[28px] text-lg font-bold text-[#1D1B28]">$20</p>
            </div>
            <button className="w-full mb-2 px-2 py-3 border border-transparent rounded-lg hover:bg-[#003366] hover:text-[#E0E0E0]">
              Start with Plus
            </button>
            <button className="w-full mb-2 px-2 py-3 border border-transparent rounded-lg hover:bg-[#003366] hover:text-[#E0E0E0]">
              Only Plan
            </button>
            <button className="w-full mb-2 px-2 py-3 border border-transparent rounded-lg hover:bg-[#003366] hover:text-[#E0E0E0]">
              Only Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
