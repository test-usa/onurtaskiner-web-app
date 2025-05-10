
import React from "react";

const Page = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("janina");
    }, 2000);
  }); // just see loader use-case only
  return (
    <div className="h-screen">

    </div>
  );
};

export default Page;
