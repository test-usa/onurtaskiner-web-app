"use client";
import React, { useState } from "react";
import bgImage from "@/assets/images/profilebg.jpg";
import profile from "@/assets/images/profile.png";
// import EventOne from "@/assets/images/serviceOne.jpg";
// import EventTow from "@/assets/images/serviceTwo.jpg";
// import EventThree from "@/assets/images/serviceThree.jpg";
// import EventFour from "@/assets/images/serviceFour.jpg";
// import EventFive from "@/assets/images/serviceFive.jpg";
// import EventSix from "@/assets/images/serviceSix.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Wrapper from "@/components/wrapper/wrapper";

const UserProfile = () => {
  const [tabChange] = useState<boolean>(true);
  // const event = [
  //   {
  //     eventTitle: "Tech Innovators Summit 2025",
  //     eventOwner: "InnovateX",
  //     image: EventOne,
  //   },
  //   {
  //     eventTitle: "Global Health Conference",
  //     eventOwner: "MediWorld",
  //     image: EventTow,
  //   },
  //   {
  //     eventTitle: "Startup Launchpad Expo",
  //     eventOwner: "FoundersHub",
  //     image: EventThree,
  //   },
  //   {
  //     eventTitle: "Creative Design Workshop",
  //     eventOwner: "DesignSpark",
  //     image: EventFour,
  //   },
  //   {
  //     eventTitle: "AI & Future Tech Forum",
  //     eventOwner: "NeuroNext",
  //     image: EventFive,
  //   },
  //   {
  //     eventTitle: "Green Earth Sustainability Fair",
  //     eventOwner: "EcoVerse",
  //     image: EventSix,
  //   },
  // ];
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "var(--font-roboto)",
      }}
      className="max-w-full mx-auto h-48 relative"
    >
      <Wrapper>
        {/* BG IMAGE TO OVERLAY PROFILE SECTION */}
        <div className="space-y-[8px] pt-32 sm:pt-36 gap-6 sm:gap-9">
          <Avatar className="w-28 h-28 border-2 border-white">
            <AvatarImage src={profile.src} alt="profile-photo" />
            <AvatarFallback>Alex Jones</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-x-8 ">
            <div className="flex items-center space-x-3">
              <h1>Alex Jones</h1>
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.29605 1.05107C8.89589 0.52334 8.10254 0.52334 7.70238 1.05107L6.70966 2.3603C6.49132 2.64825 6.13461 2.796 5.77661 2.74678L4.14889 2.52298C3.49278 2.43277 2.93179 2.99375 3.022 3.64987L3.2458 5.27759C3.29502 5.63559 3.14727 5.9923 2.85932 6.21064L1.5501 7.20336C1.02236 7.60351 1.02236 8.39687 1.5501 8.79702L2.85932 9.78975C3.14727 10.0081 3.29502 10.3648 3.2458 10.7228L3.022 12.3505C2.93179 13.0066 3.49278 13.5676 4.14889 13.4774L5.77661 13.2536C6.13461 13.2044 6.49132 13.3521 6.70966 13.6401L7.70238 14.9493C8.10254 15.477 8.89589 15.477 9.29605 14.9493L10.2888 13.6401C10.5071 13.3521 10.8638 13.2044 11.2218 13.2536L12.8495 13.4774C13.5057 13.5676 14.0666 13.0066 13.9764 12.3505L13.7526 10.7228C13.7034 10.3648 13.8512 10.0081 14.1391 9.78975L15.4483 8.79702C15.9761 8.39687 15.9761 7.60351 15.4483 7.20336L14.1391 6.21064C13.8512 5.9923 13.7034 5.63559 13.7526 5.27759L13.9764 3.64987C14.0666 2.99375 13.5057 2.43277 12.8495 2.52298L11.2218 2.74678C10.8638 2.796 10.5071 2.64825 10.2888 2.3603L9.29605 1.05107ZM11.4189 6.52041C11.6142 6.32515 11.6142 6.00857 11.4189 5.8133C11.2237 5.61804 10.9071 5.61804 10.7118 5.8133L7.76536 8.75975L6.65225 7.64664C6.45698 7.45138 6.1404 7.45138 5.94514 7.64664C5.74988 7.8419 5.74988 8.15848 5.94514 8.35374L7.41181 9.82041C7.50558 9.91418 7.63275 9.96686 7.76536 9.96686C7.89797 9.96686 8.02515 9.91418 8.11891 9.82041L11.4189 6.52041Z"
                    fill="#003366"
                  />
                </svg>
              </>
            </div>
            {/* changeable content button */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  "text-[var(--color-boldText)] text-sm sm:text-lg cursor-pointer",
                  tabChange &&
                    "text-[var(--color-secondary)] font-semibold border-b-[1px] border-[var(--color-secondary)] text-sm sm:text-lg"
                )}
              >
                Work
              </button>
              <button
                className={cn(
                  "text-[var(--color-boldText)] text-sm sm:text-lg cursor-pointer",
                  !tabChange &&
                    "text-[var(--color-secondary)] font-semibold border-b-[1px] border-[var(--color-secondary)] text-sm sm:text-lg"
                )}
              >
                Review
              </button>
            </div>
          </div>

          {/* vanue */}
          <div className="space-y-4">
            <h1 className="text-sm px-2 py-0.5 rounded-sm inline-block  bg-white">
              Total Venue 3
            </h1>
            <div className="bg-white px-14 py-3 flex flex-1 items-center justify-between rounded-lg">
              <div className="flex items-center space-x-5">
                <Avatar className="w-12 h-12 rounded-md">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-sm sm:text-lg font-semibold ">
                  The Grand Hall
                </h1>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-amber-300 rounded-full" />
                <p>active</p>
              </div>
              <h1>New york</h1>
              <Link href="#" className="underline font-semibold text-sm ">
                Details
              </Link>
            </div>
            <div className="bg-white px-14 py-3 flex items-center justify-between rounded-lg">
              <div className="flex items-center space-x-5">
                <Avatar className="w-12 h-12 rounded-md">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-sm sm:text-lg font-semibold ">
                  The Grand Hall
                </h1>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-amber-300 rounded-full" />
                <p>active</p>
              </div>
              <h1>New york</h1>
              <Link href="#" className="underline font-semibold text-sm ">
                Details
              </Link>
            </div>
            <div className="bg-white px-14 py-3 flex items-center justify-between rounded-lg">
              <div className="flex items-center space-x-5">
                <Avatar className="w-12 h-12 rounded-md">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-sm sm:text-lg font-semibold ">
                  The Grand Hall
                </h1>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-amber-300 rounded-full" />
                <p>active</p>
              </div>
              <h1>New york</h1>
              <Link href="#" className="underline font-semibold text-sm ">
                Details
              </Link>
            </div>
          </div>

          {/* divider */}
          <div className="w-full h-[1px] bg-[var(--color-grayOne)] my-8" />

          {/* status */}
          <div className="space-y-7">
            <h1 className="text-sm sm:text-2xl">Account Status</h1>
            <div className="flex justify-between ">
              <div>
                <h1 className="text-[var(--color-accent)] font-semibold text-sm sm:text-lg">
                  Active
                </h1>
                <p className="text-xs sm:text-sm">Toggle user status</p>
              </div>
              <label
                htmlFor="Toggle1"
                className="inline-flex items-center space-x-4 cursor-pointer"
              >
                <span className="relative">
                  <input id="Toggle1" type="checkbox" className="hidden peer" />

                  {/* conditional Track */}
                  <div className="w-10 h-6 rounded-full shadow-inner bg-[#333333] peer-checked:bg-[#333333]"></div>

                  {/* Knob */}
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow bg-white peer-checked:right-0 peer-checked:left-auto"></div>
                </span>
              </label>
            </div>
            <div className="flex justify-between ">
              <div>
                <h1 className="text-[var(--color-accent)] font-semibold text-sm sm:text-lg">
                  Suspended
                </h1>
                <p className="text-xs sm:text-sm">Toggle user status</p>
              </div>
              <label
                htmlFor="Toggle1"
                className="inline-flex items-center space-x-4 cursor-pointer"
              >
                <span className="relative">
                  <input id="Toggle1" type="checkbox" className="hidden peer" />

                  {/* conditional Track */}
                  <div className="w-10 h-6 rounded-full shadow-inner bg-[#333333] peer-checked:bg-[#333333]"></div>

                  {/* Knob */}
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow bg-white peer-checked:right-0 peer-checked:left-auto"></div>
                </span>
              </label>
            </div>
            <div className="flex justify-between ">
              <div>
                <h1 className="text-[var(--color-accent)] font-semibold text-sm sm:text-lg">
                  Reset Password
                </h1>
                <p className="text-xs sm:text-sm">Toggle user status</p>
              </div>
              <label
                htmlFor="Toggle1"
                className="inline-flex items-center space-x-4 cursor-pointer"
              >
                <span className="relative">
                  <input id="Toggle1" type="checkbox" className="hidden peer" />

                  {/* conditional Track */}
                  <div className="w-10 h-6 rounded-full shadow-inner bg-[#333333] peer-checked:bg-[#333333]"></div>

                  {/* Knob */}
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow bg-white peer-checked:right-0 peer-checked:left-auto"></div>
                </span>
              </label>
            </div>
            <div className="flex justify-between ">
              <div>
                <h1 className="text-[var(--color-accent)] font-semibold text-sm sm:text-lg">
                  View Booking History
                </h1>
                <p className="text-xs sm:text-sm">Toggle user status</p>
              </div>
              <label
                htmlFor="Toggle1"
                className="inline-flex items-center space-x-4 cursor-pointer"
              >
                <span className="relative">
                  <input id="Toggle1" type="checkbox" className="hidden peer" />

                  {/* conditional Track */}
                  <div className="w-10 h-6 rounded-full shadow-inner bg-[#333333] peer-checked:bg-[#333333]"></div>

                  {/* Knob */}
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow bg-white peer-checked:right-0 peer-checked:left-auto"></div>
                </span>
              </label>
            </div>
          </div>
          {/* divider */}
          <div className="w-full h-[1px] bg-[var(--color-grayOne)] my-8" />

          {/* FORM */}
          <div className="w-full">
            <h1 className="text-sm sm:text-xl">User Information</h1>
            <div className="space-y-3 my-4">
              <div className="w-full flex flex-col sm:flex-row items-center gap-4">
                <div className="flex flex-col w-full space-y-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your mail"
                    className="bg-white py-2 px-4 w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full  space-y-3">
                  <label htmlFor="email">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    className="bg-white py-2 px-4 w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full space-y-3">
                <label htmlFor="email">Role</label>
                <Select>
                  <SelectTrigger className="w-full bg-white py-5">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col w-full space-y-3">
                <label htmlFor="email">Email</label>
                <textarea
                  placeholder="Additional info"
                  rows={4}
                  cols={50}
                  className="bg-white py-2 px-4 w-full rounded-lg"
                />
              </div>

              {/* button section */}
              <div className="flex flex-col sm:flex-row gap-4 items-center  my-4">
                <Button
                  variant="outline"
                  className="flex bg-none items-center space-x-2 py-3 px-5 border border-[var(--color-accent)] hover:bg-[var(--color-accent)] w-full sm:w-fit cursor-pointer group"
                >
                  <span className="text-[var(--color-accent)] group-hover:text-white">
                    Delete Account
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="flex bg-none items-center space-x-2 py-3 px-5 border border-[var(--color-accent)] hover:bg-[var(--color-accent)] w-full sm:w-fit cursor-pointer group"
                >
                  <span className="text-[var(--color-accent)] group-hover:text-white">
                    Suspend Profile
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default UserProfile;
