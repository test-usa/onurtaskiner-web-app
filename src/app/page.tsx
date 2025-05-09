import React from "react";

const Page = async () => {
  
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("janina");
    }, 2000);
  }); // just see loader usecase only
  return (
    <div className="bg-black h-screen">
     
    </div>
  );
};

export default Page;
