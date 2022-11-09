import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import StorageManager from '../utils/StorageManager';

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const { role } = StorageManager.loadUser();
    if (role) {
      console.log(role);
      switch (role) {
      case 'seller':
        navigate('/seller/orders');
        break;
      case 'administrator':
        navigate('/admin/manage');
        break;
      default:
        navigate('/customer/products');
        break;
      }
    }
  });

  return <LoginForm />;
}
