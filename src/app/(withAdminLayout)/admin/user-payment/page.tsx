import InputForm from "@/components/AdminPage/VenueManagement/InputForm";
import MapReuseComponent from "@/components/AdminPage/VenueManagement/MapReuseComponent";
import PaymentProfile from "@/components/AdminPage/VenueManagement/PaymentProfile";
import Wrapper from "@/components/wrapper/wrapper";
import React from "react";

const UserPayment = () => {
  return (
    <Wrapper>
      <PaymentProfile />
      <MapReuseComponent />
      <InputForm />
    </Wrapper>
  );
};

export default UserPayment;
