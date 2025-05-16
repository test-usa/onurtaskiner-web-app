import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    credentials: "omit",
  }),
  endpoints: () => ({}),
});
