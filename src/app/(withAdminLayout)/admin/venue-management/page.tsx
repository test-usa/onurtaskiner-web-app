import { VenueListTable } from "@/components/AdminPage/VenueManagement/VenueListTable";
import CalculateCard from "@/components/reuseabelComponents/calculateCard";
import React from "react";

const venueManagementPage = () => {
  return (
    <div className="space-y-4">
      <CalculateCard />
      <VenueListTable />
    </div>
  );
};

export default venueManagementPage;
