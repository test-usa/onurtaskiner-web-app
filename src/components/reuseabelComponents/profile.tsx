import React from "react";
import Wrapper from "../wrapper/wrapper";
import bgImage from "@/assets/images/profilebg.jpg";
import profile from "@/assets/images/profile.png";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
const Profile = () => {
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
        <div className="space-y-[8px] sm:pt-36 gap-6 sm:gap-9">
          <Avatar className="w-28 h-28 border-2 border-white">
            <AvatarImage src={profile.src} alt="profile-photo" />
            <AvatarFallback>Alex</AvatarFallback>
          </Avatar>
          <div className="flex flex-col md:flex-row gap-3.5 sm:gap-7.5">
            <div className="flex items-center justify-between gap-1.5">
              {/* NAME */}
              <h1 className="text-[12px] sm:text-[15px] leading-3.5 sm:leading-6 font-semibold text-[var(--color-accent)]">
                Alex Jones
              </h1>
              {/* Verify badge */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                className="w-[20px] h-[20px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.298 1.05107C8.89785 0.52334 8.10449 0.52334 7.70433 1.05107L6.71161 2.3603C6.49327 2.64825 6.13657 2.796 5.77857 2.74678L4.15085 2.52298C3.49473 2.43277 2.93374 2.99375 3.02395 3.64987L3.24776 5.27759C3.29698 5.63559 3.14922 5.9923 2.86127 6.21064L1.55205 7.20336C1.02432 7.60351 1.02432 8.39687 1.55205 8.79702L2.86128 9.78975C3.14923 10.0081 3.29698 10.3648 3.24776 10.7228L3.02395 12.3505C2.93374 13.0066 3.49473 13.5676 4.15085 13.4774L5.77857 13.2536C6.13657 13.2044 6.49327 13.3521 6.71161 13.6401L7.70433 14.9493C8.10449 15.477 8.89785 15.477 9.298 14.9493L10.2907 13.6401C10.5091 13.3521 10.8658 13.2044 11.2238 13.2536L12.8515 13.4774C13.5076 13.5676 14.0686 13.0066 13.9784 12.3505L13.7546 10.7228C13.7054 10.3648 13.8531 10.0081 14.1411 9.78975L15.4503 8.79702C15.978 8.39687 15.978 7.60351 15.4503 7.20336L14.1411 6.21064C13.8531 5.9923 13.7054 5.63559 13.7546 5.27759L13.9784 3.64987C14.0686 2.99375 13.5076 2.43277 12.8515 2.52298L11.2238 2.74678C10.8658 2.796 10.5091 2.64825 10.2907 2.3603L9.298 1.05107ZM11.4209 6.52041C11.6161 6.32515 11.6161 6.00857 11.4209 5.8133C11.2256 5.61804 10.909 5.61804 10.7138 5.8133L7.76731 8.75975L6.6542 7.64664C6.45894 7.45138 6.14236 7.45138 5.94709 7.64664C5.75183 7.8419 5.75183 8.15848 5.94709 8.35374L7.41376 9.82041C7.50753 9.91418 7.63471 9.96686 7.76731 9.96686C7.89992 9.96686 8.0271 9.91418 8.12087 9.82041L11.4209 6.52041Z"
                  fill="#003366"
                />
              </svg>
            </div>
            <div className="space-y-2">
              {/* username */}
              <p className="text-[12px] sm:text-[15px] leading-5 font-normal">
                @alex.jones
              </p>
              {/* passion */}
              <p className="text-[12px] sm:text-[15px] leading-[100%] sm:leading-[120%] ">
                Photographer
              </p>
              {/* location */}
              <div className="inline-flex items-center gap-[4px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-[24px] h-[24px]"
                >
                  <mask
                    id="mask0_549_8965"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_549_8965)">
                    <path
                      d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                      fill="#003366"
                    />
                  </g>
                </svg>
                <p className="text-[12px] sm:text-[14px] leading-[100%] sm:leading-[120%] inline-block">
                  New York
                </p>
              </div>
            </div>

            {/* MESSAGE BUTTON */}
            <Button
              size="lg"
              className="bg-[var(--color-grayTwo)] hover:bg-[var(--color-grayTwo)] cursor-pointer px-[15px] sm:px-[24px] py-[10px] sm:py-[16px] flex items-center gap-[8px] sm:gap-[10px] mt-2 sm:mt-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-7 h-7"
              >
                <mask
                  id="mask0_549_9774"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
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
              <span className="text-[12px] sm:text-[16px] font-medium text-[var(--color-accent)]">
                Message
              </span>
            </Button>

            {/* ANOTHER SECTION HERE */}
            <div className="bg-amber-300 w-full">dadfadf</div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Profile;
