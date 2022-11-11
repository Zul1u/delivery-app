import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { registerValidation } from '../helpers/validateInputs';
import DELIVERY_API from '../redux/services/api.fetch';
import StorageManager from '../utils/StorageManager';

export default function RegisterPage() {
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [registerError, setRegisterError] = useState(false);
  const [registerUser] = DELIVERY_API.createUser();

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
    <RegisterForm
      formState={ formState }
      handleChange={ handleChange }
      handleSubmit={ handleSubmit }
      submitDisabled={ submitDisabled }
      registerError={ registerError }
    />
  );
}
