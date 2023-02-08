import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import List from '../components/List';
import { registerValidation } from '../helpers/validateInputs';
import DELIVERY_API from '../redux/services/api.fetch';

function Management() {
  const [formState, setFormState] = useState({
    name: '', email: '', password: '', role: 'customer',
  });
  const [passwordInput, setPasswordInput] = useState({
    state: 0, type: 'password', button: '○',
  });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [registerError, setRegisterError] = useState({ error: false, message: '' });
  const [createUser] = DELIVERY_API.createUser();
  const [deleteUser] = DELIVERY_API.deleteUser();
  const getUsers = DELIVERY_API.getAllUsers();
  const [users, setUsers] = useState([]);

  const roles = ['customer', 'seller', 'administrator'];

  useEffect(() => {
    if (getUsers.data) {
      const usersTable = getUsers.data.filter((user) => user.role !== 'administrator');
      setUsers(usersTable);
      console.log(getUsers.data);
    }
  }, [getUsers]);

  useEffect(() => {
    setSubmitDisabled(!registerValidation(formState));
  }, [formState]);

  const handleChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await createUser(formState);
    if (response.error) {
      setRegisterError({ error: true, message: response.error.message });
      console.log(response.error);
    }

    if (response.data) {
      const { user } = response.data;
      setUsers([...users, user]);
    }
  };

  const seePassword = () => {
    if (passwordInput.type === 'password') {
      setPasswordInput({ type: 'text', button: '×' });
    } else {
      setPasswordInput({ type: 'password', button: '○' });
    }
  };

  const removeUser = ({ target: { parentNode } }) => {
    const row = parentNode;
    deleteUser(row.parentNode.id);
    row.parentNode.remove();
  };

  return (
    <>
      <Header />
      {registerError.error && (
        <span data-testid="admin_manage__element-invalid-register">
          {registerError.message}
        </span>
      )}
      <form
        onSubmit={ handleSubmit }
        className="management-form-container"
      >
        <div className="management-div-input">
          <label htmlFor="name">
            Nome:
            <input
              data-testid="admin_manage__input-name"
              type="name"
              id="name"
              name="name"
              onChange={ handleChange }
              value={ formState.name }
              placeholder="Nome e sobrenome"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              data-testid="admin_manage__input-email"
              type="email"
              id="email"
              name="email"
              onChange={ handleChange }
              value={ formState.email }
              placeholder="seu-email@site.com.br"
            />
          </label>
        </div>
        <div className="management-div-input">
          <label htmlFor="password">
            Senha:
            <input
              data-testid="admin_manage__input-password"
              type={ passwordInput.type }
              id="password"
              name="password"
              onChange={ handleChange }
              value={ formState.password }
              placeholder="******"
            />
            <button
              type="button"
              onClick={ seePassword }
            >
              {passwordInput.button}
            </button>
          </label>
          <label htmlFor="role">
            Tipo:
            <select
              data-testid="admin_manage__select-role"
              id="role"
              name="role"
              onChange={ handleChange }
              value={ formState.role }
            >
              {roles.map((role) => (
                <option key={ role } value={ role }>{role}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="management-btn-input">
          <button
            type="submit"
            data-testid="admin_manage__button-register"
            disabled={ submitDisabled }
          >
            CADASTRAR
          </button>
        </div>
      </form>
      <List
        type="user"
        data={ users }
        removeItem={ removeUser }
        testPrefix="admin_manage__"
      />
    </>
  );
}

export default Management;
