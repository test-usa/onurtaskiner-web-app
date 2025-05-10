import React from "react";
import Wrapper from "../wrapper/wrapper";

const CalculateCard = () => {
  const data = [
    {
      title: "Refund Amount",
      amount: "$12,412",
      change: "-2%",
    },
    {
      title: "Total Revenue",
      amount: "$89,320",
      change: "+5%",
    },
    {
      title: "Expenses",
      amount: "$45,210",
      change: "+1.2%",
    },
    {
      title: "New Customers",
      amount: "1,045",
      change: "-0.5%",
    },
  ];

  return (
    <Wrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map((single) => (
          <div
            key={single.amount}
            className="p-5 sm:p-7 bg-white rounded-2xl shadow-md flex flex-col justify-between"
          >
            {/* Top Row */}
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-sm sm:text-base font-extrabold text-[var(--color-normalText)] font-roboto">
                {single.title}
              </h1>
              <button className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                    fill="#003366"
                  />
                </svg>
              </button>
            </div>

            {/* Bottom Row */}
            <div>
              <h2 className="text-xl sm:text-3xl font-semibold text-[var(--color-accent)] font-roboto">
                {single.amount}
              </h2>
              <p className="text-sm text-[var(--color-textRed)] font-roboto">
                {single.change} price range
              </p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default CalculateCard;
