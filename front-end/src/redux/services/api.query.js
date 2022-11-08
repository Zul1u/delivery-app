import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import StorageManager from '../../utils/StorageManager';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API || 'http://localhost:3001/',
  prepareHeaders: (headers) => {
    const token = StorageManager.getToken();

    if (token !== 'No user stored.') {
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
      query: (payload) => ({ url: 'login', method: 'POST', body: payload }),
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
      query: (payload) => ({ url: 'users/', method: 'POST', body: payload }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({ url: `users/${id}`, method: 'DELETE' }),
    }),
    getSales: builder.query({
      query: () => 'sales/',
    }),
    getSaleByUserId: builder.query({
      query: (id) => `sales/user/${id}`,
    }),
    getSaleByToken: builder.query({
      query: () => 'sales/user',
    }),
    getSaleById: builder.query({
      query: (id) => `sales/${id}`,
    }),
    getSalesByToken: builder.query({
      query: () => 'sales/user',
    }),
    getSaleStatuses: builder.query({
      query: () => 'sales/statuses',
    }),
    createSale: builder.mutation({
      query: (payload) => ({ url: 'sales/', method: 'POST', body: payload }),
    }),
    updateSaleStatus: builder.mutation({
      query: (id, status) => ({ url: `sales/${id}/${status}`, method: 'PATCH' }),
    }),
    getProducts: builder.query({
      query: () => 'products/',
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useLoginMutation, useGetUsersQuery, useGetUserByIdQuery, useGetRolesQuery,
  useCreateUserMutation, useDeleteUserMutation, useGetSalesQuery, useGetSaleStatusesQuery,
  useGetSaleByUserIdQuery, useGetSaleByIdQuery, useCreateSaleMutation,
  useUpdateSaleStatusMutation, useGetProductsQuery, useGetProductByIdQuery,
  useGetSaleByTokenQuery, useGetSalesByTokenQuery,
} = deliveryAPI;

export default deliveryAPI.reducer;
