import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserInfosStorage } from '../helpers/localStorage/userInfos';
import emailAndPasswordValidation from '../helpers/validateInputs';
import { useLoginMutation } from '../redux/services/delivery.api';

export default function LoginForm() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const [login] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    setSubmitDisabled(!emailAndPasswordValidation(formState));
  }, [formState]);

  const handleChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
  };

  const selectRoute = ({ user }) => {
    switch (user.role) {
    case 'seller':
      return navigate(`/${user.role}/checkout`);
    case 'administrator':
      return navigate('/admin/manage');
    default:
      return navigate(`/${user.role}/products`);
    }
  };

  const handleSubmit = async () => {
    const result = await login(formState);
    if (result.data) {
      const { user: { name, email, role } } = result.data;

      const userInfos = { name, email, role, token: result.data.token };
      setUserInfosStorage(userInfos);

      return selectRoute(result.data);
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
