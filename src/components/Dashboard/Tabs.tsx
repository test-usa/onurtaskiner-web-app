"use client";
import React, { useState } from "react";
import Wrapper from "../wrapper/wrapper";
import { cn } from "@/lib/utils";

const Tabs = () => {
  const [tabs, setTabs] = useState<boolean>(true);
  return (
    <Wrapper>
      <div>
        <div className="flex items-center border-b-[1px]">
          <button
            className={cn(
              "py-[8px] sm:py-[12px] px-[15px] sm:px-[25px] text-xs sm:text-sm text-[var(--color-normalText)] cursor-pointer",
              tabs &&
                "border-b-[2.5px] border-[var(--color-accent)] text-[var(--color-accent)] font-semibold"
            )}
          >
            Overview
          </button>
          <button className="py-[8px] sm:py-[12px] px-[15px] sm:px-[25px] text-xs sm:text-sm text-[var(--color-normalText)] cursor-pointer">
            Reports
          </button>
          <button className="py-[8px] sm:py-[12px] px-[15px] sm:px-[25px] text-xs sm:text-sm text-[var(--color-normalText)] cursor-pointer">
            Settings
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tabs;
