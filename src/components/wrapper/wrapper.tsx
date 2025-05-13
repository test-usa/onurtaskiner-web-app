import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-4 sm:py-4 md:py-6 mx-auto h-full">
      {children}
    </div>
  );
};

export default Wrapper;
