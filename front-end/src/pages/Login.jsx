import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { loginValidation } from '../helpers/validateInputs';
import DELIVERY_API from '../redux/services/api.fetch';
import StorageManager from '../utils/StorageManager';

export default function LoginPage() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const [userLogin] = DELIVERY_API.login();

  const navigate = useNavigate();

  useEffect(() => {
    setSubmitDisabled(!loginValidation(formState));
  }, [formState]);

  const selectRoute = (user) => {
    switch (user.role) {
    case 'seller':
      return navigate('/seller/orders');
    case 'administrator':
      return navigate('/admin/manage');
    default:
      return navigate('/customer/products');
    }
  };

  useEffect(() => {
    const user = StorageManager.loadUser();
    if (user !== 'No user stored.') return selectRoute(user);
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async () => {
    const response = await userLogin(formState);

    if (response.data) {
      StorageManager.saveUser(response.data);

      return selectRoute(response.data.user);
    }
    setLoginError(true);
  };

  return (
    <LoginForm
      handleChange={ handleChange }
      handleSubmit={ handleSubmit }
      formState={ formState }
      submitDisabled={ submitDisabled }
      loginError={ loginError }
    />
  );
}
