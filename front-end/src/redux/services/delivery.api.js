import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API || 'http://localhost:3001/',
  prepareHeaders: (headers) => {
    const token = '';

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', token);
    }

    return headers;
  },
});

export const deliveryAPI = createApi({
  reducerPath: 'deliveryAPI',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: 'login/',
        method: 'POST',
        body: payload,
      }),
    }),
    getUsers: builder.query({
      query: () => 'users/',
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
    getRoles: builder.query({
      query: () => 'users/roles',
    }),
    createUser: builder.mutation({
      query: (payload) => ({
        url: 'users/',
        method: 'POST',
        body: payload,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetRolesQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = deliveryAPI;

export default deliveryAPI.reducer;
