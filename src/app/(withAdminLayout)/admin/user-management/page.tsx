import UserManagement from "@/components/AdminPage/UserManagement/UserManagement";
import MapReuseComponent from "@/components/AdminPage/Shared/MapReuseComponent";
import ReuseProfile from "@/components/AdminPage/Shared/ReuseProfile";
import InputStatusForm from "@/components/AdminPage/VenueManagement/InputStatusForm";

const UserManagementPage = () => {
  return (
    <div className="space-y-5">
      <ReuseProfile />
      <UserManagement />
      <MapReuseComponent />
      <InputStatusForm />
    </div>
  );
};

export default UserManagementPage;
