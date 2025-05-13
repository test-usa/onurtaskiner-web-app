"use client";
import React, { useState } from "react";
import Wrapper from "../wrapper/wrapper";
import bgImage from "@/assets/images/profilebg.jpg";
import profile from "@/assets/images/profile.png";
import EventOne from "@/assets/images/serviceOne.jpg";
import EventTow from "@/assets/images/serviceTwo.jpg";
import EventThree from "@/assets/images/serviceThree.jpg";
import EventFour from "@/assets/images/serviceFour.jpg";
import EventFive from "@/assets/images/serviceFive.jpg";
import EventSix from "@/assets/images/serviceSix.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
import { Progress } from "../ui/progress";
const Profile = () => {
  const [tabChange] = useState<boolean>(true);
  const event = [
    {
      eventTitle: "Tech Innovators Summit 2025",
      eventOwner: "InnovateX",
      image: EventOne,
    },
    {
      eventTitle: "Global Health Conference",
      eventOwner: "MediWorld",
      image: EventTow,
    },
    {
      eventTitle: "Startup Launchpad Expo",
      eventOwner: "FoundersHub",
      image: EventThree,
    },
    {
      eventTitle: "Creative Design Workshop",
      eventOwner: "DesignSpark",
      image: EventFour,
    },
    {
      eventTitle: "AI & Future Tech Forum",
      eventOwner: "NeuroNext",
      image: EventFive,
    },
    {
      eventTitle: "Green Earth Sustainability Fair",
      eventOwner: "EcoVerse",
      image: EventSix,
    },
  ];

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
          <div className="flex flex-col sm:flex-row gap-x-5 space-y-4 sm:space-y-0 mt-4">
            <div className="space-y-1.5">
              <p>@alex.jones</p>
              <p>Photographer</p>
              <div className="flex items-center space-x-1">
                <MapPin className="w-5" />
                <p>New York</p>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center space-x-0.5 py-2 px-4 bg-[#DCE1E6] cursor-pointer"
              >
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_549_9774"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      className="w-6 h-5 text-white"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_549_9774)">
                      <path
                        d="M6 18L3.7 20.3C3.38333 20.6167 3.02083 20.6875 2.6125 20.5125C2.20417 20.3375 2 20.025 2 19.575V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6ZM5.15 16H20V4H4V17.125L5.15 16ZM7 14H13C13.2833 14 13.5208 13.9042 13.7125 13.7125C13.9042 13.5208 14 13.2833 14 13C14 12.7167 13.9042 12.4792 13.7125 12.2875C13.5208 12.0958 13.2833 12 13 12H7C6.71667 12 6.47917 12.0958 6.2875 12.2875C6.09583 12.4792 6 12.7167 6 13C6 13.2833 6.09583 13.5208 6.2875 13.7125C6.47917 13.9042 6.71667 14 7 14ZM7 11H17C17.2833 11 17.5208 10.9042 17.7125 10.7125C17.9042 10.5208 18 10.2833 18 10C18 9.71667 17.9042 9.47917 17.7125 9.2875C17.5208 9.09583 17.2833 9 17 9H7C6.71667 9 6.47917 9.09583 6.2875 9.2875C6.09583 9.47917 6 9.71667 6 10C6 10.2833 6.09583 10.5208 6.2875 10.7125C6.47917 10.9042 6.71667 11 7 11ZM7 8H17C17.2833 8 17.5208 7.90417 17.7125 7.7125C17.9042 7.52083 18 7.28333 18 7C18 6.71667 17.9042 6.47917 17.7125 6.2875C17.5208 6.09583 17.2833 6 17 6H7C6.71667 6 6.47917 6.09583 6.2875 6.2875C6.09583 6.47917 6 6.71667 6 7C6 7.28333 6.09583 7.52083 6.2875 7.7125C6.47917 7.90417 6.71667 8 7 8Z"
                        fill="#003366"
                      />
                    </g>
                  </svg>
                </>
                <span>Message</span>
              </Button>
            </div>
            {/* changeable content */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {event?.map((data, index) => (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${data?.image.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    fontFamily: "var(--font-roboto)",
                  }}
                  className="relative group w-full sm:max-w-[450px] h-[240px] overflow-hidden rounded-lg"
                >
                 
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent bg-opacity-50 brightness-75 group-hover:brightness-100 transition-all duration-500" />

                 
                  <div className="relative z-10 p-4 text-white transition-opacity duration-500 group-hover:opacity-0">
                    <h1 className="text-xl sm:text-2xl font-semibold">
                      {data.eventTitle}
                    </h1>
                    <p className="text-sm text-[var(--color-secondary)] bg-white/5 inline-block">{data.eventOwner}</p>
                  </div>
                </div>
              ))}
            </div> */}

            {/* reviews section */}
            <div className="w-full flex flex-col gap-y-8">
              {/* star section */}
              <div className="flex flex-col w-full">
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <mask
                      id="mask0_549_9345"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="56"
                      height="56"
                    >
                      <rect
                        x="0.167969"
                        width="55.6601"
                        height="55.6601"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_549_9345)">
                      <path
                        d="M28 39.8349L18.3055 45.6442C17.8772 45.9153 17.4295 46.0315 16.9623 45.9927C16.4951 45.954 16.0863 45.7991 15.7358 45.528C15.3854 45.2569 15.1129 44.918 14.9182 44.5114C14.7236 44.1047 14.6846 43.6497 14.8014 43.1462L17.3711 32.1666L8.78616 24.7888C8.39683 24.4403 8.15349 24.0433 8.05615 23.5979C7.95882 23.1526 7.98802 22.7169 8.14376 22.2908C8.29949 21.8648 8.53309 21.5163 8.84456 21.2452C9.15603 20.9741 9.58431 20.7998 10.1294 20.7223L21.4591 19.7348L25.8392 9.39423C26.0338 8.92949 26.3356 8.58093 26.7444 8.34856C27.1532 8.11619 27.5717 8 28 8C28.4283 8 28.8468 8.11619 29.2556 8.34856C29.6644 8.58093 29.9662 8.92949 30.1608 9.39423L34.5409 19.7348L45.8706 20.7223C46.4157 20.7998 46.844 20.9741 47.1554 21.2452C47.4669 21.5163 47.7005 21.8648 47.8562 22.2908C48.012 22.7169 48.0412 23.1526 47.9438 23.5979C47.8465 24.0433 47.6032 24.4403 47.2138 24.7888L38.6289 32.1666L41.1986 43.1462C41.3154 43.6497 41.2764 44.1047 41.0818 44.5114C40.8871 44.918 40.6146 45.2569 40.2641 45.528C39.9137 45.7991 39.5049 45.954 39.0377 45.9927C38.5705 46.0315 38.1228 45.9153 37.6945 45.6442L28 39.8349Z"
                        fill="#F0C020"
                      />
                    </g>
                  </svg>
                </>
                <div className="flex items-end">
                  <h1 className="text-lg sm:text-3xl font-extrabold text-[var(--color-textPrimary)]">
                    4.5
                  </h1>
                  <p className="text-[var(--color-boldText)] text-xs sm:text-sm">
                    (540)
                  </p>
                </div>
              </div>

              <div className="space-y-4 w-full">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex items-center gap-0.5">
                    <h1 className="text-sm sm:text-xl font-semibold inline-block">
                      1
                    </h1>
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 56 56"
                        fill="none"
                      >
                        <mask
                          id="mask0_549_9345"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <rect
                            x="0.167969"
                            width="55.6601"
                            height="55.6601"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_549_9345)">
                          <path
                            d="M28 39.8349L18.3055 45.6442C17.8772 45.9153 17.4295 46.0315 16.9623 45.9927C16.4951 45.954 16.0863 45.7991 15.7358 45.528C15.3854 45.2569 15.1129 44.918 14.9182 44.5114C14.7236 44.1047 14.6846 43.6497 14.8014 43.1462L17.3711 32.1666L8.78616 24.7888C8.39683 24.4403 8.15349 24.0433 8.05615 23.5979C7.95882 23.1526 7.98802 22.7169 8.14376 22.2908C8.29949 21.8648 8.53309 21.5163 8.84456 21.2452C9.15603 20.9741 9.58431 20.7998 10.1294 20.7223L21.4591 19.7348L25.8392 9.39423C26.0338 8.92949 26.3356 8.58093 26.7444 8.34856C27.1532 8.11619 27.5717 8 28 8C28.4283 8 28.8468 8.11619 29.2556 8.34856C29.6644 8.58093 29.9662 8.92949 30.1608 9.39423L34.5409 19.7348L45.8706 20.7223C46.4157 20.7998 46.844 20.9741 47.1554 21.2452C47.4669 21.5163 47.7005 21.8648 47.8562 22.2908C48.012 22.7169 48.0412 23.1526 47.9438 23.5979C47.8465 24.0433 47.6032 24.4403 47.2138 24.7888L38.6289 32.1666L41.1986 43.1462C41.3154 43.6497 41.2764 44.1047 41.0818 44.5114C40.8871 44.918 40.6146 45.2569 40.2641 45.528C39.9137 45.7991 39.5049 45.954 39.0377 45.9927C38.5705 46.0315 38.1228 45.9153 37.6945 45.6442L28 39.8349Z"
                            fill="#F0C020"
                          />
                        </g>
                      </svg>
                    </>
                  </div>
                  <Progress value={80} className="sm:max-w-[50%] w-full" />
                  <h1 className="inline-block">80%</h1>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5">
                    <h1 className="text-sm sm:text-xl font-semibold inline-block">
                      2
                    </h1>
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 56 56"
                        fill="none"
                      >
                        <mask
                          id="mask0_549_9345"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <rect
                            x="0.167969"
                            width="55.6601"
                            height="55.6601"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_549_9345)">
                          <path
                            d="M28 39.8349L18.3055 45.6442C17.8772 45.9153 17.4295 46.0315 16.9623 45.9927C16.4951 45.954 16.0863 45.7991 15.7358 45.528C15.3854 45.2569 15.1129 44.918 14.9182 44.5114C14.7236 44.1047 14.6846 43.6497 14.8014 43.1462L17.3711 32.1666L8.78616 24.7888C8.39683 24.4403 8.15349 24.0433 8.05615 23.5979C7.95882 23.1526 7.98802 22.7169 8.14376 22.2908C8.29949 21.8648 8.53309 21.5163 8.84456 21.2452C9.15603 20.9741 9.58431 20.7998 10.1294 20.7223L21.4591 19.7348L25.8392 9.39423C26.0338 8.92949 26.3356 8.58093 26.7444 8.34856C27.1532 8.11619 27.5717 8 28 8C28.4283 8 28.8468 8.11619 29.2556 8.34856C29.6644 8.58093 29.9662 8.92949 30.1608 9.39423L34.5409 19.7348L45.8706 20.7223C46.4157 20.7998 46.844 20.9741 47.1554 21.2452C47.4669 21.5163 47.7005 21.8648 47.8562 22.2908C48.012 22.7169 48.0412 23.1526 47.9438 23.5979C47.8465 24.0433 47.6032 24.4403 47.2138 24.7888L38.6289 32.1666L41.1986 43.1462C41.3154 43.6497 41.2764 44.1047 41.0818 44.5114C40.8871 44.918 40.6146 45.2569 40.2641 45.528C39.9137 45.7991 39.5049 45.954 39.0377 45.9927C38.5705 46.0315 38.1228 45.9153 37.6945 45.6442L28 39.8349Z"
                            fill="#F0C020"
                          />
                        </g>
                      </svg>
                    </>
                  </div>
                  <Progress value={45} className="sm:max-w-[50%] w-full" />
                  <h1 className="inline-block">45%</h1>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5">
                    <h1 className="text-sm sm:text-xl font-semibold inline-block">
                      3
                    </h1>
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 56 56"
                        fill="none"
                      >
                        <mask
                          id="mask0_549_9345"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <rect
                            x="0.167969"
                            width="55.6601"
                            height="55.6601"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_549_9345)">
                          <path
                            d="M28 39.8349L18.3055 45.6442C17.8772 45.9153 17.4295 46.0315 16.9623 45.9927C16.4951 45.954 16.0863 45.7991 15.7358 45.528C15.3854 45.2569 15.1129 44.918 14.9182 44.5114C14.7236 44.1047 14.6846 43.6497 14.8014 43.1462L17.3711 32.1666L8.78616 24.7888C8.39683 24.4403 8.15349 24.0433 8.05615 23.5979C7.95882 23.1526 7.98802 22.7169 8.14376 22.2908C8.29949 21.8648 8.53309 21.5163 8.84456 21.2452C9.15603 20.9741 9.58431 20.7998 10.1294 20.7223L21.4591 19.7348L25.8392 9.39423C26.0338 8.92949 26.3356 8.58093 26.7444 8.34856C27.1532 8.11619 27.5717 8 28 8C28.4283 8 28.8468 8.11619 29.2556 8.34856C29.6644 8.58093 29.9662 8.92949 30.1608 9.39423L34.5409 19.7348L45.8706 20.7223C46.4157 20.7998 46.844 20.9741 47.1554 21.2452C47.4669 21.5163 47.7005 21.8648 47.8562 22.2908C48.012 22.7169 48.0412 23.1526 47.9438 23.5979C47.8465 24.0433 47.6032 24.4403 47.2138 24.7888L38.6289 32.1666L41.1986 43.1462C41.3154 43.6497 41.2764 44.1047 41.0818 44.5114C40.8871 44.918 40.6146 45.2569 40.2641 45.528C39.9137 45.7991 39.5049 45.954 39.0377 45.9927C38.5705 46.0315 38.1228 45.9153 37.6945 45.6442L28 39.8349Z"
                            fill="#F0C020"
                          />
                        </g>
                      </svg>
                    </>
                  </div>
                  <Progress value={30} className="sm:max-w-[50%] w-full" />
                  <h1 className="inline-block">30%</h1>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5">
                    <h1 className="text-sm sm:text-xl font-semibold inline-block">
                      4
                    </h1>
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 56 56"
                        fill="none"
                      >
                        <mask
                          id="mask0_549_9345"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <rect
                            x="0.167969"
                            width="55.6601"
                            height="55.6601"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_549_9345)">
                          <path
                            d="M28 39.8349L18.3055 45.6442C17.8772 45.9153 17.4295 46.0315 16.9623 45.9927C16.4951 45.954 16.0863 45.7991 15.7358 45.528C15.3854 45.2569 15.1129 44.918 14.9182 44.5114C14.7236 44.1047 14.6846 43.6497 14.8014 43.1462L17.3711 32.1666L8.78616 24.7888C8.39683 24.4403 8.15349 24.0433 8.05615 23.5979C7.95882 23.1526 7.98802 22.7169 8.14376 22.2908C8.29949 21.8648 8.53309 21.5163 8.84456 21.2452C9.15603 20.9741 9.58431 20.7998 10.1294 20.7223L21.4591 19.7348L25.8392 9.39423C26.0338 8.92949 26.3356 8.58093 26.7444 8.34856C27.1532 8.11619 27.5717 8 28 8C28.4283 8 28.8468 8.11619 29.2556 8.34856C29.6644 8.58093 29.9662 8.92949 30.1608 9.39423L34.5409 19.7348L45.8706 20.7223C46.4157 20.7998 46.844 20.9741 47.1554 21.2452C47.4669 21.5163 47.7005 21.8648 47.8562 22.2908C48.012 22.7169 48.0412 23.1526 47.9438 23.5979C47.8465 24.0433 47.6032 24.4403 47.2138 24.7888L38.6289 32.1666L41.1986 43.1462C41.3154 43.6497 41.2764 44.1047 41.0818 44.5114C40.8871 44.918 40.6146 45.2569 40.2641 45.528C39.9137 45.7991 39.5049 45.954 39.0377 45.9927C38.5705 46.0315 38.1228 45.9153 37.6945 45.6442L28 39.8349Z"
                            fill="#F0C020"
                          />
                        </g>
                      </svg>
                    </>
                  </div>
                  <Progress value={15} className="sm:max-w-[50%] w-full" />
                  <h1 className="inline-block">15%</h1>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5">
                    <h1 className="text-sm sm:text-xl font-semibold inline-block">
                      5
                    </h1>
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 56 56"
                        fill="none"
                      >
                        <mask
                          id="mask0_549_9345"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <rect
                            x="0.167969"
                            width="55.6601"
                            height="55.6601"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_549_9345)">
                          <path
                            d="M28 39.8349L18.3055 45.6442C17.8772 45.9153 17.4295 46.0315 16.9623 45.9927C16.4951 45.954 16.0863 45.7991 15.7358 45.528C15.3854 45.2569 15.1129 44.918 14.9182 44.5114C14.7236 44.1047 14.6846 43.6497 14.8014 43.1462L17.3711 32.1666L8.78616 24.7888C8.39683 24.4403 8.15349 24.0433 8.05615 23.5979C7.95882 23.1526 7.98802 22.7169 8.14376 22.2908C8.29949 21.8648 8.53309 21.5163 8.84456 21.2452C9.15603 20.9741 9.58431 20.7998 10.1294 20.7223L21.4591 19.7348L25.8392 9.39423C26.0338 8.92949 26.3356 8.58093 26.7444 8.34856C27.1532 8.11619 27.5717 8 28 8C28.4283 8 28.8468 8.11619 29.2556 8.34856C29.6644 8.58093 29.9662 8.92949 30.1608 9.39423L34.5409 19.7348L45.8706 20.7223C46.4157 20.7998 46.844 20.9741 47.1554 21.2452C47.4669 21.5163 47.7005 21.8648 47.8562 22.2908C48.012 22.7169 48.0412 23.1526 47.9438 23.5979C47.8465 24.0433 47.6032 24.4403 47.2138 24.7888L38.6289 32.1666L41.1986 43.1462C41.3154 43.6497 41.2764 44.1047 41.0818 44.5114C40.8871 44.918 40.6146 45.2569 40.2641 45.528C39.9137 45.7991 39.5049 45.954 39.0377 45.9927C38.5705 46.0315 38.1228 45.9153 37.6945 45.6442L28 39.8349Z"
                            fill="#F0C020"
                          />
                        </g>
                      </svg>
                    </>
                  </div>
                  <Progress value={25} className="sm:max-w-[50%] w-full" />
                  <h1 className="inline-block">25%</h1>
                </div>
              </div>

              <div className="flex flex-1 items-center">
                <div className="flex items-center gap-0.5">
                  <h1 className="text-sm sm:text-xl font-semibold inline-block">
                    5
                  </h1>
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 56 56"
                      fill="none"
                    >
                      <mask
                        id="mask0_549_9345"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect
                          x="0.167969"
                          width="55.6601"
                          height="55.6601"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_549_9345)">
                        <path
                          d="M28 39.8349L18.3055 45.6442C17.8772 45.9153 17.4295 46.0315 16.9623 45.9927C16.4951 45.954 16.0863 45.7991 15.7358 45.528C15.3854 45.2569 15.1129 44.918 14.9182 44.5114C14.7236 44.1047 14.6846 43.6497 14.8014 43.1462L17.3711 32.1666L8.78616 24.7888C8.39683 24.4403 8.15349 24.0433 8.05615 23.5979C7.95882 23.1526 7.98802 22.7169 8.14376 22.2908C8.29949 21.8648 8.53309 21.5163 8.84456 21.2452C9.15603 20.9741 9.58431 20.7998 10.1294 20.7223L21.4591 19.7348L25.8392 9.39423C26.0338 8.92949 26.3356 8.58093 26.7444 8.34856C27.1532 8.11619 27.5717 8 28 8C28.4283 8 28.8468 8.11619 29.2556 8.34856C29.6644 8.58093 29.9662 8.92949 30.1608 9.39423L34.5409 19.7348L45.8706 20.7223C46.4157 20.7998 46.844 20.9741 47.1554 21.2452C47.4669 21.5163 47.7005 21.8648 47.8562 22.2908C48.012 22.7169 48.0412 23.1526 47.9438 23.5979C47.8465 24.0433 47.6032 24.4403 47.2138 24.7888L38.6289 32.1666L41.1986 43.1462C41.3154 43.6497 41.2764 44.1047 41.0818 44.5114C40.8871 44.918 40.6146 45.2569 40.2641 45.528C39.9137 45.7991 39.5049 45.954 39.0377 45.9927C38.5705 46.0315 38.1228 45.9153 37.6945 45.6442L28 39.8349Z"
                          fill="#F0C020"
                        />
                      </g>
                    </svg>
                  </>
                </div>
                <div className="flex items-center gap-0.5">
                  <h1 className="text-sm sm:text-xl font-semibold inline-block">
                    5
                  </h1>
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 56 56"
                      fill="none"
                    >
                      <mask
                        id="mask0_549_9345"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect
                          x="0.167969"
                          width="55.6601"
                          height="55.6601"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_549_9345)">
                        <path
                          d="M28 39.8349L18.3055 45.6442C17.8772 45.9153 17.4295 46.0315 16.9623 45.9927C16.4951 45.954 16.0863 45.7991 15.7358 45.528C15.3854 45.2569 15.1129 44.918 14.9182 44.5114C14.7236 44.1047 14.6846 43.6497 14.8014 43.1462L17.3711 32.1666L8.78616 24.7888C8.39683 24.4403 8.15349 24.0433 8.05615 23.5979C7.95882 23.1526 7.98802 22.7169 8.14376 22.2908C8.29949 21.8648 8.53309 21.5163 8.84456 21.2452C9.15603 20.9741 9.58431 20.7998 10.1294 20.7223L21.4591 19.7348L25.8392 9.39423C26.0338 8.92949 26.3356 8.58093 26.7444 8.34856C27.1532 8.11619 27.5717 8 28 8C28.4283 8 28.8468 8.11619 29.2556 8.34856C29.6644 8.58093 29.9662 8.92949 30.1608 9.39423L34.5409 19.7348L45.8706 20.7223C46.4157 20.7998 46.844 20.9741 47.1554 21.2452C47.4669 21.5163 47.7005 21.8648 47.8562 22.2908C48.012 22.7169 48.0412 23.1526 47.9438 23.5979C47.8465 24.0433 47.6032 24.4403 47.2138 24.7888L38.6289 32.1666L41.1986 43.1462C41.3154 43.6497 41.2764 44.1047 41.0818 44.5114C40.8871 44.918 40.6146 45.2569 40.2641 45.528C39.9137 45.7991 39.5049 45.954 39.0377 45.9927C38.5705 46.0315 38.1228 45.9153 37.6945 45.6442L28 39.8349Z"
                          fill="#F0C020"
                        />
                      </g>
                    </svg>
                  </>
                </div>
                <div className="flex items-center gap-0.5">
                  <h1 className="text-sm sm:text-xl font-semibold inline-block">
                    5
                  </h1>
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 56 56"
                      fill="none"
                    >
                      <mask
                        id="mask0_549_9345"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect
                          x="0.167969"
                          width="55.6601"
                          height="55.6601"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_549_9345)">
                        <path
                          d="M28 39.8349L18.3055 45.6442C17.8772 45.9153 17.4295 46.0315 16.9623 45.9927C16.4951 45.954 16.0863 45.7991 15.7358 45.528C15.3854 45.2569 15.1129 44.918 14.9182 44.5114C14.7236 44.1047 14.6846 43.6497 14.8014 43.1462L17.3711 32.1666L8.78616 24.7888C8.39683 24.4403 8.15349 24.0433 8.05615 23.5979C7.95882 23.1526 7.98802 22.7169 8.14376 22.2908C8.29949 21.8648 8.53309 21.5163 8.84456 21.2452C9.15603 20.9741 9.58431 20.7998 10.1294 20.7223L21.4591 19.7348L25.8392 9.39423C26.0338 8.92949 26.3356 8.58093 26.7444 8.34856C27.1532 8.11619 27.5717 8 28 8C28.4283 8 28.8468 8.11619 29.2556 8.34856C29.6644 8.58093 29.9662 8.92949 30.1608 9.39423L34.5409 19.7348L45.8706 20.7223C46.4157 20.7998 46.844 20.9741 47.1554 21.2452C47.4669 21.5163 47.7005 21.8648 47.8562 22.2908C48.012 22.7169 48.0412 23.1526 47.9438 23.5979C47.8465 24.0433 47.6032 24.4403 47.2138 24.7888L38.6289 32.1666L41.1986 43.1462C41.3154 43.6497 41.2764 44.1047 41.0818 44.5114C40.8871 44.918 40.6146 45.2569 40.2641 45.528C39.9137 45.7991 39.5049 45.954 39.0377 45.9927C38.5705 46.0315 38.1228 45.9153 37.6945 45.6442L28 39.8349Z"
                          fill="#F0C020"
                        />
                      </g>
                    </svg>
                  </>
                </div>
                <div className="flex items-center gap-0.5">
                  <h1 className="text-sm sm:text-xl font-semibold inline-block">
                    5
                  </h1>
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <mask
                        id="mask0_549_9345"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="10"
                        height="10"
                      >
                        <rect
                          x="0.167969"
                          width="55.6601"
                          height="55.6601"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_549_9345)">
                        <path
                          d="M28 39.8349L18.3055 45.6442C17.8772 45.9153 17.4295 46.0315 16.9623 45.9927C16.4951 45.954 16.0863 45.7991 15.7358 45.528C15.3854 45.2569 15.1129 44.918 14.9182 44.5114C14.7236 44.1047 14.6846 43.6497 14.8014 43.1462L17.3711 32.1666L8.78616 24.7888C8.39683 24.4403 8.15349 24.0433 8.05615 23.5979C7.95882 23.1526 7.98802 22.7169 8.14376 22.2908C8.29949 21.8648 8.53309 21.5163 8.84456 21.2452C9.15603 20.9741 9.58431 20.7998 10.1294 20.7223L21.4591 19.7348L25.8392 9.39423C26.0338 8.92949 26.3356 8.58093 26.7444 8.34856C27.1532 8.11619 27.5717 8 28 8C28.4283 8 28.8468 8.11619 29.2556 8.34856C29.6644 8.58093 29.9662 8.92949 30.1608 9.39423L34.5409 19.7348L45.8706 20.7223C46.4157 20.7998 46.844 20.9741 47.1554 21.2452C47.4669 21.5163 47.7005 21.8648 47.8562 22.2908C48.012 22.7169 48.0412 23.1526 47.9438 23.5979C47.8465 24.0433 47.6032 24.4403 47.2138 24.7888L38.6289 32.1666L41.1986 43.1462C41.3154 43.6497 41.2764 44.1047 41.0818 44.5114C40.8871 44.918 40.6146 45.2569 40.2641 45.528C39.9137 45.7991 39.5049 45.954 39.0377 45.9927C38.5705 46.0315 38.1228 45.9153 37.6945 45.6442L28 39.8349Z"
                          fill="#F0C020"
                        />
                      </g>
                    </svg>
                  </>
                </div>
                <div className="flex items-center gap-0.5 border-[2px] border-[var(--color-boldText)] p-0.5 rounded-md">
                  <h1 className="text-xs sm:text-sm font-semibold inline-block">
                    1
                  </h1>
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 56 56"
                      fill="none"
                    >
                      <mask
                        id="mask0_549_9345"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect
                          x="0.167969"
                          width="55.6601"
                          height="55.6601"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_549_9345)">
                        <path
                          d="M28 39.8349L18.3055 45.6442C17.8772 45.9153 17.4295 46.0315 16.9623 45.9927C16.4951 45.954 16.0863 45.7991 15.7358 45.528C15.3854 45.2569 15.1129 44.918 14.9182 44.5114C14.7236 44.1047 14.6846 43.6497 14.8014 43.1462L17.3711 32.1666L8.78616 24.7888C8.39683 24.4403 8.15349 24.0433 8.05615 23.5979C7.95882 23.1526 7.98802 22.7169 8.14376 22.2908C8.29949 21.8648 8.53309 21.5163 8.84456 21.2452C9.15603 20.9741 9.58431 20.7998 10.1294 20.7223L21.4591 19.7348L25.8392 9.39423C26.0338 8.92949 26.3356 8.58093 26.7444 8.34856C27.1532 8.11619 27.5717 8 28 8C28.4283 8 28.8468 8.11619 29.2556 8.34856C29.6644 8.58093 29.9662 8.92949 30.1608 9.39423L34.5409 19.7348L45.8706 20.7223C46.4157 20.7998 46.844 20.9741 47.1554 21.2452C47.4669 21.5163 47.7005 21.8648 47.8562 22.2908C48.012 22.7169 48.0412 23.1526 47.9438 23.5979C47.8465 24.0433 47.6032 24.4403 47.2138 24.7888L38.6289 32.1666L41.1986 43.1462C41.3154 43.6497 41.2764 44.1047 41.0818 44.5114C40.8871 44.918 40.6146 45.2569 40.2641 45.528C39.9137 45.7991 39.5049 45.954 39.0377 45.9927C38.5705 46.0315 38.1228 45.9153 37.6945 45.6442L28 39.8349Z"
                          fill="#F0C020"
                        />
                      </g>
                    </svg>
                  </>
                </div>
              </div>
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

export default Profile;
