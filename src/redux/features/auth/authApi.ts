import { baseApi } from "@/redux/hooks/baseApi";

const autApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "posts", // set url name
        method: "GET",
        body: userInfo,
      }),
    }),
    getPosts: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetPostsQuery } = autApi;
