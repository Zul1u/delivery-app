import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import { useDeleteUserMutation } from './redux/services/delivery.api';

function App() {
  const [createUser] = useDeleteUserMutation();

  const SETE = 7;

  const sendUser = async () => {
    await createUser(SETE);
    // .unwrap()
    // .then((payload) => console.log(payload))
    // .then((error) => {
    //   console.log(error)
    // })
  };

  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      { getUsers() }
      <button
        type="button"
        onClick={ sendUser }
      >
        cria
      </button>
    </div>
  );
}

export default App;
