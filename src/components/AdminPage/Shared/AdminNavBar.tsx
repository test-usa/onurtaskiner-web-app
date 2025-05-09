import profile from "../../../assets/images/profile.png";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";

const AdminNavBar = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 gap-4 sm:gap-0">
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
  );
};

export default AdminNavBar;
