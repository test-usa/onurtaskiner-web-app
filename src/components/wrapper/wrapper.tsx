import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className=" w-full px-6 py-3 mx-auto h-full">{children}</div>;
};

export default Wrapper;
