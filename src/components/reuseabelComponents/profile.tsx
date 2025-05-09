import React from "react";
import Wrapper from "../wrapper/wrapper";
import bgimage from "@/assets/images/profilebg.jpg";
// import profil from "@/assets/images/profile.png";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { Button } from "../ui/button";
const Profile = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "var(--font-roboto)",
      }}
      className="max-w-full mx-auto h-[190px] relative"
    >
      <Wrapper>
        {/* BG IMAGE TO OVERLAY PROFILE SECTION */}
        <div className="space-y-[8px] absolute top-[140px] left-1/2 transform -translate-x-1/2 md:left-[10%] md:translate-x-0 w-[90%] md:w-[500px] gap-[24px] sm:gap-[36px]">
           <div className="w-full">
            <div>title</div>
            <div className="flex  gap-x-14 w-full">
              <div className="bg-amber-800 w-full">name</div>
              <div className="bg-black w-full">age</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Profile;
