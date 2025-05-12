import UserManagement from "@/components/AdminPage/UserManagement/UserManagement";
import MapReuseComponent from "@/components/AdminPage/VenueManagement/MapReuseComponent";
import ReuseProfile from "@/components/AdminPage/VenueManagement/ReuseProfile";

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
