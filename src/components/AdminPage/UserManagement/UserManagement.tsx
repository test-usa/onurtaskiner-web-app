import Image from "next/image";
import iconLocation from "@/assets/icon/location.png";
import iconStar from "@/assets/icon/star.png";
import iconMans from "@/assets/icon/mans.png";
import iconWifi from "@/assets/icon/wifi.png";
import booking from "@/assets/icon/booking.png";
import Wrapper from "@/components/wrapper/wrapper";

const UserManagement = () => {
  return (
    <div className="mt-50">
      <div className="space-y-5">
        <div className="flex justify-baseline items-center mt-2 space-x-7.5">
          <div className="flex items-center gap-2">
            <Image src={iconLocation} alt="" height={24} width={24} />
            <p>New York, USAA</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={iconStar} alt="" height={24} width={24} />
            <p className="text-black text-base font-semibold leading-[120%] font-['Roboto']">
              5.0
            </p>
            <p className="text-[#ABB7C2] font-roboto text-base not-italic font-normal leading-[120%]">
              (345 reviews)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Image src={booking} alt="" height={24} width={24} />
            <p>Total Booking: 125+ </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={booking} alt="" height={24} width={24} />
            <p>Current Booking: 18</p>
          </div>
          <br />
        </div>
        <div className="flex items-center gap-2">
          <Image src={iconMans} alt="" height={24} width={24} />
          <p>200 Guests</p>
        </div>
        {/* Amenitics */}
        <div className="space-y-4">
          <h2 className="text-[#333] font-roboto text-[20px] font-semibold leading-[120%] capitalize">
            Amenities
          </h2>
          <div className="flex justify-baseline items-center space-x-7.5">
            <div className="flex justify-end items-center gap-2 px-3 py-2 rounded-[34px] bg-[#FBF7EB] shadow-[0_3px_10px_rgba(0,0,0,0.06)]">
              <Image src={iconWifi} alt="" height={16} width={16} />
              <p className="text-[#333] text-center font-roboto text-sm not-italic font-normal leading-[120%] capitalize">
                Wifi
              </p>
            </div>

            <div className="flex justify-end items-center gap-2 px-3 py-2 rounded-[34px] bg-[#FBF7EB] shadow-[0_3px_10px_rgba(0,0,0,0.06)]">
              <Image src={iconWifi} alt="" height={16} width={16} />
              <p className="text-[#333] text-center font-roboto text-sm not-italic font-normal leading-[120%] capitalize">
                Parking
              </p>
            </div>

            <div className="flex justify-end items-center gap-2 px-3 py-2 rounded-[34px] bg-[#FBF7EB] shadow-[0_3px_10px_rgba(0,0,0,0.06)]">
              <Image src={iconWifi} alt="" height={16} width={16} />
              <p className="text-[#333] text-center font-roboto text-sm not-italic font-normal leading-[120%] capitalize">
                AC
              </p>
            </div>
            <div className="flex justify-end items-center gap-2 px-3 py-2 rounded-[34px] bg-[#FBF7EB] shadow-[0_3px_10px_rgba(0,0,0,0.06)]">
              <Image src={iconWifi} alt="" height={16} width={16} />
              <p className="text-[#333] text-center font-roboto text-sm not-italic font-normal leading-[120%] capitalize">
                Pool
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="font-semibold">Description</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Interdum ac hac nec etiam.
          Augue etiam ornare eu velit ultrices pharetra. Velit fringilla tellus
          justo sed et praesent quam praesent in. Scelerisque venenatis leo nunc
          convallis vel amet faucibus mattis parturient.
        </p>
      </div>
    </div>
  );
};

export default UserManagement;
