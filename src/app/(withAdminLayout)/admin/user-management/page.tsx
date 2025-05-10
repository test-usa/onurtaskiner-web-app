import UserManagement from "@/components/AdminPage/UserManagement/UserManagement";
import MapReuseComponent from "@/components/AdminPage/VenueManagement/MapReuseComponent";
import ReuseProfile from "@/components/AdminPage/VenueManagement/ReuseProfile";
import React from "react";

const UserManagementPage = () => {
  return (
    <div>
      <ReuseProfile />
      <UserManagement />
      <MapReuseComponent />
    </div>
  );
};

export default UserManagementPage;
