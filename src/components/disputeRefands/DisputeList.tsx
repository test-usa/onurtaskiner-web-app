"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import disputeImg from "../../assets/images/dispute.png";

export default function DisputeList() {
  const disputes = [
    {
      id: 12345,
      user: "Alicia Keys",
      venue: "Madison Square Garden",
      disputeNumber: 1,
    },
    {
      id: 12346,
      user: "John Mayer",
      venue: "Wembley Stadium",
      disputeNumber: 2,
    },
    {
      id: 12347,
      user: "Taylor Swift",
      venue: "Allegiant Stadium",
      disputeNumber: 3,
    },
    { id: 12348, user: "Drake", venue: "O2 Arena", disputeNumber: 4 },
    { id: 12349, user: "Adele", venue: "Staples Center", disputeNumber: 5 },
    {
      id: 12350,
      user: "Bruno Mars",
      venue: "Sydney Opera House",
      disputeNumber: 6,
    },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(disputes.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedDisputes = disputes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen pt-4  md:pt-10 ">
      <h1 className="mb-6 text-xl font-semibold text-[#1B1E28]">
        Dispute List
      </h1>

      <div className="space-y-4">
        {paginatedDisputes.map((dispute, index) => (
          <div key={index} className="rounded-lg bg-[#E1E3E9] shadow-sm ">
            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              {/* Image section */}
              <div className="w-full sm:w-[220px] flex-shrink-0">
                <Image
                  src={disputeImg}
                  alt="disputeImg"
                  width={220}
                  height={170}
                  className="h-[170px] w-full rounded-md object-cover"
                />
              </div>

              {/* Text + Buttons */}
              <div className="flex-1 p-3">
                <div className="text-sm text-[#1B1E28] space-y-1">
                  <div className="font-semibold text-[17px]">
                    Booking ID: {dispute.id}
                  </div>
                  <div className="text-[15px]">
                    User: {dispute.user}, Venue: {dispute.venue}
                  </div>
                  <div className="text-[15px] font-medium">
                    Dispute {dispute.disputeNumber}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-6">
                  <a href="/admin/user-payment">
                    <button className="rounded-lg bg-[#003366] px-4 py-2 text-sm text-white w-full sm:w-auto">
                      View Details
                    </button>
                  </a>
                  <a href="/admin/chat-conversation">
                    <button className="rounded-lg border border-[#003366] bg-white px-4 py-2 text-sm text-[#003366] w-full sm:w-auto">
                      Chat
                    </button>
                  </a>

                  <a href="/admin/money-refund">
                    <button className="rounded-lg bg-[#D4AF37] px-4 py-2 text-sm text-white w-full sm:w-auto">
                      Pay Refund
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center sm:justify-start">
        <nav className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0033CC] text-white disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {Array.from({ length: totalPages }).map((_, idx) => {
            const page = idx + 1;
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm ${
                  currentPage === page
                    ? "bg-[#0033CC] text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0033CC] text-white disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </div>
  );
}
