import { RecentActivityTable } from "@/components/AdminPage/VenueManagement/RecentActivityTable";
import { VenueListTable } from "@/components/AdminPage/VenueManagement/VenueListTable";
import React from "react";

const venueManagementPage = () => {
  return (
    <div>
      <RecentActivityTable />
      <VenueListTable />
    </div>
  );
};

export default venueManagementPage;
