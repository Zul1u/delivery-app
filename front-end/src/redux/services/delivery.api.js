import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const deliveryAPI = createApi({
  reducerPath: 'deliveryAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users/',
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = deliveryAPI;
