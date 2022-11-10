import React from 'react';
import PropTypes from 'prop-types';

export default function RegisterForm({
  handleSubmit, handleChange, formState, submitDisabled, registerError,
}) {
  return (
    <form>
      <div>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="common_register__input-name"
            type="name"
            id="name"
            name="name"
            onChange={ handleChange }
            value={ formState.name }
            placeholder="Seu nome"
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input
            data-testid="common_register__input-email"
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
            data-testid="common_register__input-password"
            type="password"
            id="password"
            name="password"
            onChange={ handleChange }
            value={ formState.password }
            placeholder="******"
          />
        </label>
      </div>
      {registerError && (
        <span data-testid="common_register__element-invalid_register">
          Ops... Email invalido :(
        </span>
      )}
      <div>
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ submitDisabled }
          onClick={ handleSubmit }
        >
          CADASTAR
        </button>
      </div>
    </form>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formState: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  submitDisabled: PropTypes.bool.isRequired,
  registerError: PropTypes.bool.isRequired,
};
