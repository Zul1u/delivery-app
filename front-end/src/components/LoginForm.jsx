import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({
  handleSubmit, handleChange, formState, submitDisabled, loginError,
}) {
  const navigate = useNavigate();

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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formState: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  submitDisabled: PropTypes.bool.isRequired,
  loginError: PropTypes.bool.isRequired,
};
