import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => `/posts`,
    }),
    getComments: build.query({
      query: () => `/comments`,
    }),
    getUsersInfo: build.query({
      query: () => `/users`,
    }),
  }),
});
export const {
  useGetUsersQuery,
  useLazyGetCommentsQuery,
  useGetUsersInfoQuery,
} = usersApi;
