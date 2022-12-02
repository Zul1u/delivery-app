import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({
  handleSubmit, handleChange, formState, submitDisabled, loginError,
}) {
  const navigate = useNavigate();

  return (
    <div className="form-Container">
      <form>
        <div className="form-title"><h1>Gaguin Delivery</h1></div>
        <div className="form-sub-title"><p>Fazer login</p></div>
        <div className="form-inputs">
          <label htmlFor="email">
            <input
              data-testid="common_login__input-email"
              type="email"
              id="email"
              name="email"
              onChange={ handleChange }
              value={ formState.email }
              placeholder="seu-email@email.com"
            />
            <span>E-mail</span>
          </label>
          <label htmlFor="password">
            <input
              data-testid="common_login__input-password"
              type="password"
              id="password"
              name="password"
              onChange={ handleChange }
              value={ formState.password }
              placeholder="******"
            />
            <span>Senha</span>
          </label>
          {loginError && (
            <span
              data-testid="common_login__element-invalid-email"
              className="validation-error"
            >
              e-mail e/ou senha incorretos.
            </span>
          )}
        </div>
        <div className="form-button">
          <button
            type="button"
            data-testid="common_login__button-login"
            className="submit-button"
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
    </div>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formState: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  submitDisabled: PropTypes.bool.isRequired,
  loginError: PropTypes.bool.isRequired,
};
