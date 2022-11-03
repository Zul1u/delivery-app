import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerValidation } from '../helpers/validateInputs';
import { useCreateUserMutation } from '../redux/services/delivery.api';
import StorageManager from '../utils/StorageManager';

export default function RegisterForm() {
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [registerError, setRegisterError] = useState(false);
  const [registerUser] = useCreateUserMutation();

  const navigate = useNavigate();

  useEffect(() => {
    setSubmitDisabled(!registerValidation(formState));
  }, [formState]);

  const handleChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async () => {
    const response = await registerUser(formState);

    if (response.data) {
      StorageManager.saveUser(response.data);

      return navigate('/customer/products');
    }
    setRegisterError(true);
  };

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
