import { baseApi } from "@/redux/hooks/baseApi";

const user_analytics = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userAnalyticsForBarCharts: builder.query<any, void>({
      query: () => ({
        url: "analytics/user-role-analytics",
        method: "GET",
      }),
    }),
    userAnalyticsForLineCharts: builder.query<any, void>({
      query: () => ({
        url: "analytics/user-analytics",
        method: "GET",
      }),
    }),
  }),
});

export const { useUserAnalyticsForBarChartsQuery,useLazyUserAnalyticsForLineChartsQuery } = user_analytics;
