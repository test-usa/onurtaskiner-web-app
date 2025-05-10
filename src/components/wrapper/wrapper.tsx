import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1480px] mx-auto h-full">{children}</div>;
};

export default Wrapper;
