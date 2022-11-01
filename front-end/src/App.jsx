import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import { counterAction } from './redux/slices/counterSlice';
import { useGetUserByIdQuery, useGetUsersQuery } from './redux/services/delivery.api';
import ProductCard from './components/ProductCard';
import OrderCard from './components/OrderCard';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const getUsers = useGetUsersQuery();
  const getUserById = useGetUserByIdQuery('1');
  console.log('Users', getUsers.data);
  console.log('User', getUserById.data);

  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
    </div>
  );
}

export default App;
