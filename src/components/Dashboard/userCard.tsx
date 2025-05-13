// components/UserCard.tsx

import Image from "next/image";
import { Button } from "../ui/button";

const users = [
  {
    id: 1,
    name: "Esther Howard",
    role: "Event Planner",
    signupDate: "01/01/2023",
    email: "john.doe@example.com",
    status: "Active",
    score: 895,
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Wade Warren",
    role: "UI Designer",
    signupDate: "02/14/2023",
    email: "wade.warren@example.com",
    status: "Active",
    score: 712,
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    role: "Product Manager",
    signupDate: "03/01/2023",
    email: "jenny.wilson@example.com",
    status: "Active",
    score: 948,
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Courtney Henry",
    role: "Developer Advocate",
    signupDate: "04/22/2023",
    email: "courtney.henry@example.com",
    status: "Active",
    score: 843,
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Guy Hawkins",
    role: "HR Specialist",
    signupDate: "05/10/2023",
    email: "guy.hawkins@example.com",
    status: "Active",
    score: 776,
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const UserCard = () => {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex flex-col sm:flex-row bg-white shadow rounded-lg overflow-hidden border hover:shadow-lg transition-all "
        >
          <Image
            width="200"
            height="200"
            src={user.imageUrl}
            alt={user.name}
            className="min-h-fit object-cover w-fit"
          />
          <div className="flex flex-col justify-between p-4 flex-1">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold">{user.name}</h2>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
                <div className=" flex flex-col text-left sm:text-right">
                  <p className="text-sm text-yellow-600 font-medium">
                    {user.email}
                  </p>
                  <p className="text-sm text-green-600">{user.status}</p>
                </div>
              </div>
              <div className="flex items-center gap-x-3 mt-4">
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.6667 1.33301V3.99967M5.33333 1.33301V3.99967M2 6.66634H14M3.33333 2.66634H12.6667C13.403 2.66634 14 3.26329 14 3.99967V13.333C14 14.0694 13.403 14.6663 12.6667 14.6663H3.33333C2.59695 14.6663 2 14.0694 2 13.333V3.99967C2 3.26329 2.59695 2.66634 3.33333 2.66634Z"
                      stroke="#333333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>{" "}
                <p className="text-sm text-gray-500">
                  Signup Date: {user.signupDate}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
              <button className="flex items-center gap-x-3 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.71078 2C3.34627 2 3.05078 2.2736 3.05078 2.61111V12.3889C3.05078 12.7264 3.34627 13 3.71078 13H6.35078C6.71529 13 7.01078 12.7264 7.01078 12.3889V2.61111C7.01078 2.2736 6.71529 2 6.35078 2H3.71078ZM9.65078 2C9.28627 2 8.99078 2.2736 8.99078 2.61111V12.3889C8.99078 12.7264 9.28627 13 9.65078 13H12.2908C12.6553 13 12.9508 12.7264 12.9508 12.3889V2.61111C12.9508 2.2736 12.6553 2 12.2908 2H9.65078Z"
                      fill="#003366"
                    />
                  </svg>
                </>
                <span>Suspend</span>
              </button>
              <button className="flex items-center text-sm gap-x-3 text-gray-700 hover:text-red-600 cursor-pointer">
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2.29492 3.67936H3.62826M3.62826 3.67936H14.2949M3.62826 3.67936V13.0127C3.62826 13.3663 3.76873 13.7055 4.01878 13.9555C4.26883 14.2056 4.60797 14.346 4.96159 14.346H11.6283C11.9819 14.346 12.321 14.2056 12.5711 13.9555C12.8211 13.7055 12.9616 13.3663 12.9616 13.0127V3.67936M5.62826 3.67936V2.34603C5.62826 1.99241 5.76873 1.65327 6.01878 1.40322C6.26883 1.15317 6.60797 1.0127 6.96159 1.0127H9.62826C9.98188 1.0127 10.321 1.15317 10.5711 1.40322C10.8211 1.65327 10.9616 1.99241 10.9616 2.34603V3.67936M6.96159 7.01269V11.0127M9.62826 7.01269V11.0127"
                      stroke="#003366"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>{" "}
                <span>Delete</span>
              </button>
              <button className="sm:ml-auto flex items-center gap-x-3 text-sm text-[var(--color-accent)] hover:underline cursor-pointer">
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_440_17488)">
                      <path
                        d="M15.5007 12.6159C15.5007 12.9695 15.3602 13.3086 15.1101 13.5587C14.8601 13.8087 14.5209 13.9492 14.1673 13.9492H2.16732C1.8137 13.9492 1.47456 13.8087 1.22451 13.5587C0.97446 13.3086 0.833984 12.9695 0.833984 12.6159V5.28255C0.833984 4.92893 0.97446 4.58979 1.22451 4.33974C1.47456 4.08969 1.8137 3.94922 2.16732 3.94922H4.83398L6.16732 1.94922H10.1673L11.5007 3.94922H14.1673C14.5209 3.94922 14.8601 4.08969 15.1101 4.33974C15.3602 4.58979 15.5007 4.92893 15.5007 5.28255V12.6159Z"
                        stroke="#003366"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.16732 11.2826C9.64008 11.2826 10.834 10.0886 10.834 8.61589C10.834 7.14313 9.64008 5.94922 8.16732 5.94922C6.69456 5.94922 5.50065 7.14313 5.50065 8.61589C5.50065 10.0886 6.69456 11.2826 8.16732 11.2826Z"
                        stroke="#003366"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_440_17488">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </>
                <span>View Profile</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center">
        <Button
          size="lg"
          variant="outline"
          className="flex bg-none items-center space-x-2 py-3 px-5 border border-[var(--color-accent)] hover:bg-[var(--color-accent)]  cursor-pointer group"
        >
          <span className="text-[var(--color-accent)] group-hover:text-white">
            View More Users
          </span>
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:text-white"
            >
              <mask
                id="mask0_440_17658"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_440_17658)">
                <path
                  d="M11.6667 11L10.7167 10.0667L12.1167 8.66667H2V7.33333H12.1167L10.7333 5.93333L11.6833 5L14.6667 8L11.6667 11Z"
                  className="fill-current"
                />
              </g>
            </svg>
          </>
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
