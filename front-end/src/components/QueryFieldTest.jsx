import React from "react";
import DELIVERY_API from "../redux/services/api.fetch";


const FieldTest = () => {
  const users = DELIVERY_API.getAllUsers();
  const user = DELIVERY_API.getUserById(1);
  const roles = DELIVERY_API.getRoles();
  const addUser = DELIVERY_API.postUser; 
  const removeUser = DELIVERY_API.deleteUser;
  const sales = DELIVERY_API.getSales();
  const sale = DELIVERY_API.getSaleById(1);
  const userSale = DELIVERY_API.getSaleByUserId(6);
  const saleStatuses = DELIVERY_API.getSaleStatuses();
  const addSale = DELIVERY_API.postSale;
  const updateSale = DELIVERY_API.patchSale;
  const products = DELIVERY_API.getProducts();
  const product = DELIVERY_API.getProductById();

  const mappingApi = (object) => {
    if (object.error) {
      return <div>Error</div>
    }

    if (object.isLoading) {
      return <div>Loading...</div>
    }

    if (object.data) {
      console.log(object.data)
      return (
        <div>
          {object.data.map((e) => (
            <div key={e.id}>
              <p>
                {e.name || e.status}
              </p>
            </div>
          ))}
        </div>
      )
    }
  }

  const soloApi = (object) => {
    if (object.error) {
      return <div>Error</div>
    }

    if (object.isLoading) {
      return <div>Loading...</div>
    }

    if (object.data) {
      console.log(object.data)
      return <div>{object.data.name || object.data.status}</div>
    }
  }

console.log(roles, saleStatuses);

  const newUser = {
    name: 'Rogger Rojão Martins',
    email: 'decaxias@ateseropa.com',
    password: 'baixadacruel',
    role: 'seller',
  };

  const newSale = {
    clientId: 6,
    sellerId: 2,
    totalPrice: 360.36,
    deliveryAddress: 'Rua 60 - Distrito 72, Duque de Caxias - RJ',
    deliveryNumber: '+5521999999999',
    saleDate: new Date(),
    status: 'Em Trânsito',
  };

  const executeAddButton = async () => {
    await addUser(newUser);
  }

  const executeRemoveButton = async () => {
    await removeUser(4);
  }

  const executeSaleButton = async () => {
    await addSale(newSale);
  }

  const executeStatusButton = async () => {
    await updateSale(2, 'Entregue');
  }

  // console.log(roles, saleStatuses);

  return (
    <div>
      <h1>Users</h1>
      {mappingApi(users)}
      <hr/>
      <h1>User</h1>
      {soloApi(user)}
      <hr/>
      <h1>Add user</h1>
      <button
        type="button"
        onClick={executeAddButton}
      >
        do it
      </button>
      <hr/>
      <h1>Remove user</h1>
      <button
        type="button"
        onClick={executeRemoveButton}
      >
        do it
      </button>
      <hr/>
      <h1>Sales</h1>
      {mappingApi(sales)}
      <hr/>
      <h1>Sale</h1>
      {soloApi(sale)}
      <hr/>
      <h1>Sales by user</h1>
      {mappingApi(userSale)}
      <hr/>
      <h1>Add sale</h1>
      <button
        type="button"
        onClick={executeSaleButton}
      >
        do it
      </button>
      <hr/>
      <h1>Update sale</h1>
      <button
        type="button"
        onClick={executeStatusButton}
      >
        do it
      </button>
      <hr/>
      <h1>Products</h1>
      {mappingApi(products)}
      <hr/>
      <h1>Product</h1>
      {soloApi(product)}
      <hr/>
    </div>
  )
}

export default FieldTest;
