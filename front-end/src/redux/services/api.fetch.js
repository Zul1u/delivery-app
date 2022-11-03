import { useCreateSaleMutation, useCreateUserMutation, useDeleteUserMutation,
  useGetProductByIdQuery, useGetProductsQuery, useGetRolesQuery, useGetSaleByIdQuery,
  useGetSaleByUserIdQuery, useGetSalesQuery, useGetSaleStatusesQuery, useGetUserByIdQuery,
  useGetUsersQuery, useLoginMutation, useUpdateSaleStatusMutation } from './api.query';

const DELIVERY_API = {
  login: useLoginMutation,
  getAllUsers: useGetUsersQuery,
  getUserById: useGetUserByIdQuery,
  createUser: useCreateUserMutation,
  deleteUser: useDeleteUserMutation,
  getSales: useGetSalesQuery,
  getSaleById: useGetSaleByIdQuery,
  getSaleByUserId: useGetSaleByUserIdQuery,
  createSale: useCreateSaleMutation,
  updateSale: useUpdateSaleStatusMutation,
  getProducts: useGetProductsQuery,
  getProductById: useGetProductByIdQuery,
  getRoles: useGetRolesQuery,
  getSaleStatuses: useGetSaleStatusesQuery,
};

export default DELIVERY_API;
