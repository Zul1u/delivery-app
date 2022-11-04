import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginValidation } from '../helpers/validateInputs';
import DELIVERY_API from '../redux/services/api.fetch';
import StorageManager from '../utils/StorageManager';

export default function LoginForm() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const [userLogin] = DELIVERY_API.login();

  const navigate = useNavigate();

  useEffect(() => {
    setSubmitDisabled(!loginValidation(formState));
  }, [formState]);

  const handleChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
  };

  const selectRoute = ({ user }) => {
    switch (user.role) {
    case 'seller':
      return navigate('/seller/checkout');
    case 'administrator':
      return navigate('/admin/manage');
    default:
      return navigate('/customer/products');
    }
  };

  const handleSubmit = async () => {
    const response = await userLogin(formState);

    if (response.data) {
      StorageManager.saveUser(response.data);

      return selectRoute(response.data);
    }
    setLoginError(true);
  };

  return (
    <form>
      <div>
        <label htmlFor="email">
          Email:
          <input
            data-testid="common_login__input-email"
            type="email"
            id="email"
            name="email"
            onChange={ handleChange }
            value={ formState.email }
            placeholder="seu-email@email.com"
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="common_login__input-password"
            type="password"
            id="password"
            name="password"
            onChange={ handleChange }
            value={ formState.password }
            placeholder="******"
          />
        </label>
      </div>
      {loginError && (
        <span data-testid="common_login__element-invalid-email">Login invalido</span>
      )}
      <div>
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ submitDisabled }
          onClick={ handleSubmit }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
      </div>
    </form>
  );
}
