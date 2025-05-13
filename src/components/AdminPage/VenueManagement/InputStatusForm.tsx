"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Wrapper from "@/components/wrapper/wrapper";

const InputStatusForm = () => {
  const [status, setStatus] = useState("active");

  return (
    <Wrapper>
      <div className="space-y-6">
        {/* Status Field with Color Indicator */}
        <div className="flex flex-col space-y-3 w-full">
          <div className="flex items-center space-x-2">
            <Label htmlFor="status" className="text-xl">
              Status
            </Label>
          </div>
          <Select onValueChange={(value) => setStatus(value)} value={status}>
            <SelectTrigger id="status" className="w-full bg-white">
              <SelectValue placeholder="Active" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="active">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Active
                </div>
              </SelectItem>
              <SelectItem value="deactivated">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Deactivated
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Earnings & Commission */}
        <div className="w-full flex flex-wrap gap-4">
          <div className="flex-1 min-w-[300px]">
            <Label
              htmlFor="earning"
              className="mb-2 text-[20px] font-normal leading-6"
            >
              Total Earning
            </Label>
            <Input
              id="earning"
              className="bg-white text-[15px]"
              type="text"
              placeholder="$ 12,245.63"
            />
          </div>
          <div className="flex-1 min-w-[300px]">
            <Label
              htmlFor="commission"
              className="mb-2 text-[20px] font-normal leading-6"
            >
              Total Commission
            </Label>
            <Input
              id="commission"
              className="bg-white text-[15px]"
              type="text"
              placeholder="$ 2,245.63"
            />
          </div>
        </div>

        {/* Owner Information */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Owner Information</h2>
          <div className="w-full flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <Label htmlFor="email" className="mb-2 text-[13px] font-normal">
                Email
              </Label>
              <Input
                id="email"
                className="bg-white text-[15px]"
                type="text"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="flex-1 min-w-[300px]">
              <Label htmlFor="phone" className="mb-2 text-[13px] font-normal">
                Phone
              </Label>
              <Input
                id="phone"
                className="bg-white text-[15px]"
                type="text"
                placeholder="+123456789"
              />
            </div>
          </div>
        </div>

        {/* Role */}
        <div className="flex-1 min-w-[300px]">
          <Label htmlFor="role" className="mb-2 text-[13px] font-normal">
            Role
          </Label>
          <Input
            id="role"
            className="bg-white text-[15px]"
            type="text"
            placeholder="Venue Owner"
          />
        </div>

        {/* Notes */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="notes" className="text-[13px]">
            Notes
          </Label>
          <Textarea
            id="notes"
            className="bg-white h-[76px]"
            placeholder="Additional info."
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default InputStatusForm;
