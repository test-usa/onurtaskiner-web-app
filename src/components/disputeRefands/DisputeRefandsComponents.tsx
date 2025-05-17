import React from "react";
import CalculateCard from "../reuseabelComponents/calculateCard";
import DisputeList from "./DisputeList";
import Title from "../reuseabelComponents/Title";

const DisputeRefandsComponents = () => {
  return (
    <div className="w-full  mx-auto  ">
      <div className="flex justify-between items-center mb-10">
        <Title title="Dispute & Refund Management"></Title>
      </div>
      <h2 className="text-xl text-primary font-semibold pb-5">Key Metrics</h2>
      <CalculateCard />
      <DisputeList />
    </div>
  );
};

export default DisputeRefandsComponents;
