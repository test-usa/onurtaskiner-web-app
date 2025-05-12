"use client";

import InputForm from "@/components/AdminPage/VenueManagement/InputForm";
import MapReuseComponent from "@/components/AdminPage/Shared/MapReuseComponent";
import PaymentProfile from "@/components/AdminPage/VenueManagement/PaymentProfile";
import ReuseProfile from "@/components/AdminPage/Shared/ReuseProfile";
import Wrapper from "@/components/wrapper/wrapper";

const UserPayment = () => {
  /*  const pathname = usePathname();

  // Define routes that should hide the navbar
  const hideNavbarRoutes = ["/admin/user-payment"];

  const shouldHideNavbar = hideNavbarRoutes.includes(pathname); */

  return (
    <div>
      {/*  {!shouldHideNavbar && <AdminNavBar />} */}
      <Wrapper>
        <ReuseProfile />
        <PaymentProfile />
        <MapReuseComponent />
        <InputForm />
      </Wrapper>
    </div>
  );
};

export default UserPayment;
