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
      <div className="flex flex-wrap items-center justify-center w-full gap-[18px] h-screen">
        {/* SINGLE CARD */}
        {data?.map((singe) => {
          return (
            <div
              key={singe.amount}
              className="flex-1 min-w-[210px] w-full max-w-[250px] sm:basis-[50%] lg:basis-[25%] p-[28px] bg-white rounded-[20px] "
            >
              {/* FIRST SECTION */}
              <div className="flex items-center justify-between">
                <h1
                  className="text-[12px] sm:text-[1rem] leading-[1.5rem] text-[var(--color-normalText)] font-extrabold"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  {singe?.title}
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                      fill="#003366"
                    />
                  </svg>
                </button>
              </div>

              {/* SECOND SECTION */}
              <div className="space-y-[2px]">
                <h1
                  className="text-[1.2rem] sm:text-[2.1rem] font-semibold leading-[-0.64px] text-[var(--color-accent)]"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  {singe?.amount}
                </h1>
                <p
                  className="text-[0.8rem] leading-[1rem] text-[var(--color-textRed)]"
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  {singe?.change} price range
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default CalculateCard;
