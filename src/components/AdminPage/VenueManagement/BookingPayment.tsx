"use client";

import * as React from "react";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Wrapper from "@/components/wrapper/wrapper";
import venuphoto1 from "@/assets/images/venuphoto1.png";

// Define Venue type
export type Venue = {
  id: string;
  venueName: string;
  status: "bloked" | "refund" | "completed";
  address: string;
  totalEarning: number;
  commission: number;
  photo: string;
};

// Sample data
const data: Venue[] = [
  {
    id: "v001",
    venueName: "The Grand Hall",
    status: "bloked",
    address: "123 Main St, NY",
    totalEarning: 1200,
    commission: 200,
    photo: venuphoto1.src,
  },
  {
    id: "v002",
    venueName: "Ocean View Hall",
    status: "refund",
    address: "456 Ocean Dr, CA",
    totalEarning: 950,
    commission: 150,
    photo: venuphoto1.src,
  },
  {
    id: "v003",
    venueName: "Garden Plaza",
    status: "completed",
    address: "789 Garden Rd, TX",
    totalEarning: 0,
    commission: 0,
    photo: venuphoto1.src,
  },
  {
    id: "v004",
    venueName: "Skyline Event Center",
    status: "bloked",
    address: "101 Sky Blvd, LA",
    totalEarning: 5000,
    commission: 800,
    photo: venuphoto1.src,
  },
  {
    id: "v005",
    venueName: "City Lights Ballroom",
    status: "bloked",
    address: "202 City Ave, NY",
    totalEarning: 3500,
    commission: 500,
    photo: venuphoto1.src,
  },
  {
    id: "v006",
    venueName: "Riverfront Conference Hall",
    status: "refund",
    address: "303 River Rd, FL",
    totalEarning: 1300,
    commission: 250,
    photo: venuphoto1.src,
  },
  {
    id: "v007",
    venueName: "Mountain Retreat",
    status: "bloked",
    address: "404 Hilltop Ln, CO",
    totalEarning: 2100,
    commission: 350,
    photo: venuphoto1.src,
  },
  {
    id: "v008",
    venueName: "Sunset Pavilion",
    status: "completed",
    address: "505 Sunset Blvd, NV",
    totalEarning: 0,
    commission: 0,
    photo: venuphoto1.src,
  },
  {
    id: "v009",
    venueName: "The Royal Palace",
    status: "bloked",
    address: "606 Palace Rd, MA",
    totalEarning: 8500,
    commission: 1200,
    photo: venuphoto1.src,
  },
];

// Table columns
export const columns: ColumnDef<Venue>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "venueName",
    header: "Venue Name",
    cell: ({ row }) => {
      const venueName = row.getValue("venueName") as string;
      const venuePhotoUrl = row.original.photo;

      return (
        <div className="flex items-center space-x-3">
          <Image
            src={venuePhotoUrl}
            alt={venueName}
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded"
          />
          <span className="font-medium">{venueName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="flex items-center justify-start">
        <span>Status</span>
        <IoChevronDown className="text-gray-500 ml-1" />
      </div>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      let colorClass = "";
      let statusText = "";

      switch (status) {
        case "bloked":
          colorClass = "bg-[#DEF3E6] text-[#2D6A4F]";
          statusText = "Bloked";
          break;
        case "refund":
          colorClass = "bg-[#FFF5D6] text-[#B68900]";
          statusText = "Refund";
          break;
        case "completed":
          colorClass = "bg-[#86C2FF] text-[#004080]";
          statusText = "Completed";
          break;
        default:
          colorClass = "bg-red-500 text-white";
          statusText = "Unknown";
      }

      return (
        <div className="flex items-center justify-start">
          <span
            className={`capitalize px-2 py-1 rounded text-sm font-medium ${colorClass}`}
          >
            {statusText}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
  },
  {
    accessorKey: "totalEarning",
    header: () => <div className="text-right">Total Earning</div>,
    cell: ({ row }) => {
      const amount = row.getValue("totalEarning") as number;
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "commission",
    header: () => <div className="text-right">Commission</div>,
    cell: ({ row }) => {
      const amount = row.getValue("commission") as number;
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "details",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => (
      <a
        onClick={() => alert(`Details for ${row.getValue("venueName")}`)}
        className="text-[var(--color-accent)] underline flex items-end justify-end cursor-pointer w-[44px] h-[16px] font-roboto font-medium text-[14px] leading-[14px]"
      >
        Details
      </a>
    ),
  },
];

// BookingPayment Component
export function BookingPayment() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Wrapper>
      <div className="w-full bg-white rounded-lg shadow-md p-4">
        <div className="rounded-md">
          <Table>
            <TableHeader className="h-[56px]">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </Wrapper>
  );
}
