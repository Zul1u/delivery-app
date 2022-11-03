import { useCreateSaleMutation, useCreateUserMutation, useDeleteUserMutation,
  useGetProductByIdQuery, useGetProductsQuery, useGetRolesQuery, useGetSaleByIdQuery,
  useGetSaleByUserIdQuery, useGetSalesQuery, useGetSaleStatusesQuery, useGetUserByIdQuery,
  useGetUsersQuery, useLoginMutation, useUpdateSaleStatusMutation } from "./api.query";

const DELIVERY_API = {
  getLogin: useLoginMutation()[0],
  getAllUsers: useGetUsersQuery,
  getUserById: useGetUserByIdQuery,
  createUser: useCreateUserMutation()[0],
  deleteUser: useDeleteUserMutation()[0],
  getSales: useGetSalesQuery,
  getSaleById: useGetSaleByIdQuery,
  getSaleByUserId: useGetSaleByUserIdQuery,
  createSale: useCreateSaleMutation()[0],
  updateSale: useUpdateSaleStatusMutation()[0],
  getProducts: useGetProductsQuery,
  getProductById: useGetProductByIdQuery,
  getRoles: useGetRolesQuery,
  getSaleStatuses: useGetSaleStatusesQuery,
};

export default DELIVERY_API;
