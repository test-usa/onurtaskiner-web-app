import UserManagement from "@/components/AdminPage/UserManagement/UserManagement";
import MapReuseComponent from "@/components/AdminPage/Shared/MapReuseComponent";
import ReuseProfile from "@/components/AdminPage/Shared/ReuseProfile";
import InputStatusForm from "@/components/AdminPage/VenueManagement/InputStatusForm";
import Wrapper from "@/components/wrapper/wrapper";

const UserManagementPage = () => {
  return (
    <Wrapper>
      <div className="space-y-5">
        <ReuseProfile />
        <UserManagement />
        <MapReuseComponent />
        <InputStatusForm />
      </div>
    </Wrapper>
  );
};

export default UserManagementPage;
