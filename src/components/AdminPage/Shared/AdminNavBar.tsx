<<<<<<< HEAD
const AdminNavBar = () => {
  return (
    <div className="w-full bg-[var-(--color-bgPrimary)] ">
      <div className="flex items-center justify-between p-4 ">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button className="btn btn-primary">Logout</button>
      </div>
    </div>
=======
import profile from "../../../assets/images/profile.png";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import Wrapper from "@/components/wrapper/wrapper";

const AdminNavBar = () => {
  return (
    <Wrapper>
      {/* Show only on large screens and hide on medium and small devices */}
      <div className="hidden lg:block w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-4">
          <div className="w-full sm:w-auto px-2">
            <div className="w-full sm:w-[782px] h-[44px] bg-white border rounded-[10px] px-4 py-2 flex items-center">
              <button className="text-gray-500 hover:text-gray-700 mr-2">
                <IoIosSearch />
              </button>
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button className="btn btn-primary h-10 w-10 flex items-center justify-center">
              <div className="h-5 w-4 mx-auto">
                <IoMdNotificationsOutline />
              </div>
            </button>
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <Image src={profile} alt="Profile" height={40} width={40} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
>>>>>>> f26a56f2b4c1bb7588e4fcd957fc6c2e36a1a748
  );
};

export default AdminNavBar;
