import ActiveUserManagement from "@/components/AdminPage/ActiveUserManagement/ActiveUserManagement";
import MapReuseComponent from "@/components/AdminPage/Shared/MapReuseComponent";
import ReuseProfile from "@/components/AdminPage/Shared/ReuseProfile";
import InputStatusForm from "@/components/AdminPage/VenueManagement/InputStatusForm";
import Wrapper from "@/components/wrapper/wrapper";
import React from "react";

const ActiveUserDetails = () => {
  return (
    <Wrapper>
      <div className="space-y-5">
        <ReuseProfile />
        <ActiveUserManagement />
        <MapReuseComponent />
        <InputStatusForm />
      </div>
    </Wrapper>
  );
};

export default ActiveUserDetails;
