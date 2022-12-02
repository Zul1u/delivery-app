import React from 'react';
import PropTypes from 'prop-types';

export default function RegisterForm({
  handleSubmit, handleChange, formState, submitDisabled, registerError,
}) {
  return (
    <div className="form-Container">
      <form>
        <div className="form-title"><h1>Gaguin Delivery</h1></div>
        <div className="form-sub-title"><p>Criar sua Conta no Gaguin Delivery</p></div>
        <div className="form-inputs">
          <label htmlFor="name">
            <input
              data-testid="common_register__input-name"
              type="name"
              id="name"
              name="name"
              onChange={ handleChange }
              value={ formState.name }
              placeholder="Seu nome"
            />
            <span>Nome</span>
          </label>
          <label htmlFor="email">
            <input
              data-testid="common_register__input-email"
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
              data-testid="common_register__input-password"
              type="password"
              id="password"
              name="password"
              onChange={ handleChange }
              value={ formState.password }
              placeholder="******"
            />
            <span>Senha</span>
          </label>
          {registerError && (
            <span
              data-testid="common_register__element-invalid_register"
              className="validation-error"
            >
              Ops... Email invalido :(
            </span>
          )}
        </div>
        <div className="form-button">
          <button
            className="submit-button"
            type="button"
            data-testid="common_register__button-register"
            disabled={ submitDisabled }
            onClick={ handleSubmit }
          >
            CADASTAR
          </button>
        </div>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formState: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  submitDisabled: PropTypes.bool.isRequired,
  registerError: PropTypes.bool.isRequired,
};
