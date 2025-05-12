import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className=" w-full px-10 py-4 mx-auto h-full">{children}</div>;
};

export default Wrapper;
